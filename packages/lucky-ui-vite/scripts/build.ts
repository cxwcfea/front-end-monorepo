import * as fs from 'fs-extra';
import * as path from 'path';
import { build } from 'vite';
import generateDTS from './type';
import { config } from '../vite.config';

const generateCofnig = (name, filePath, outDir) => {
    let configContent = fs.readFileSync(path.resolve(__dirname, 'config-template.ts'), 'utf-8');
    configContent = configContent.replace('$$entry', path.resolve(__dirname, '../src', name, 'index.ts'));
    configContent = configContent.replace('$$name', name);
    configContent = configContent.replace('$$outDir', outDir);
    fs.outputFileSync(filePath, configContent);
};

const buildAll = async () => {
    await build();

    const baseOutDir = config.build?.outDir || '';
    fs.copyFileSync(path.resolve(__dirname, '../package.json'), path.resolve(baseOutDir, `package.json`));

    generateDTS(path.resolve(config.build?.outDir || '', 'lucky-ui.mjs'));

    const srcDir = path.resolve(__dirname, '../src/');
    const componentsDir = fs.readdirSync(srcDir).filter((name) => {
        const componentDir = path.resolve(srcDir, name);
        const isDir = fs.lstatSync(componentDir).isDirectory();
        return isDir && fs.readdirSync(componentDir).includes('index.ts');
    });

    for (let i = 0; i < componentsDir.length; i += 1) {
        const name = componentsDir[i];
        const outDir = path.resolve(baseOutDir, name);
        const configPath = path.resolve(srcDir, name, 'config.ts');
        generateCofnig(name, configPath, outDir);
        // eslint-disable-next-line
        const result = await build({ configFile: configPath });
        fs.unlinkSync(configPath);

        fs.outputFile(
            path.resolve(outDir, `package.json`),
            `{
    "name": "lucky-ui-vite/${name}",
    "main": "index.umd.js",
    "module": "index.mjs"
}`,
            `utf-8`
        );
    }
};

buildAll();
