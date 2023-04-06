import handlebars from 'handlebars';
import fs from 'fs';
import { resolve } from 'path';

function generateCode(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString();
        const result = handlebars.compile(content)(meta);
        fs.writeFileSync(filePath, result);
    }
    console.log(`🚀${filePath} 创建成功`);
}

async function getComponents(input) {
    const entry = await import(input);
    return Object.keys(entry)
        .filter((k) => k !== 'default')
        .map((k) => ({
            name: entry[k].name,
            component: k,
        }));
}

export default async function generateDTS(entryPath) {
    const template = resolve(__dirname, './entry.d.ts.hbs');
    const dts = resolve(__dirname, entryPath.replace('.mjs', '.d.ts'));

    // 组件库数据
    const components = await getComponents(entryPath);

    // 生成模版
    generateCode(
        {
            components,
        },
        dts,
        template
    );
}
