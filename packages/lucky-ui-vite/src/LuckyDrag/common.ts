export const DRAG_CONTEXT_KEY = 'drag-context-key';

export const DRAG_DOM_ATTR_NAME = 'data-drag-item';

export interface DragContext {
    activeIndex: number;
    dragToIndex: number;
}

export const getElementIndex = (elem: HTMLElement | null) => {
    let ele = elem;
    let index = 0;
    if (!ele || !ele.parentNode) {
        return -1;
    }
    ele = ele.previousElementSibling as HTMLElement | null;
    while (ele) {
        index += 1;
        ele = ele.previousElementSibling as HTMLElement | null;
    }
    return index;
};

export const getDraggingElement = (elem: HTMLElement | undefined) => {
    if (!elem || !elem.parentNode) {
        return null;
    }
    let ele = elem;
    ele = ele.parentNode as HTMLElement | null;
    while (ele) {
        if (ele.getAttribute(DRAG_DOM_ATTR_NAME) === 'yes') {
            break;
        }
        ele = ele.parentNode as HTMLElement | null;
    }
    return ele;
};
