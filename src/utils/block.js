import { RichUtils } from 'draft-js';


export function getSelectBlockMap(editorState) {

    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();
    const start = selection.getStartKey();
    const end = selection.getEndKey();
    const blockMap = content.getBlockMap();
    return blockMap.toSeq().skipUntil((p, c) => c === start).takeUntil((p, c) => c === end).concat([[end, blockMap.get(end)]]);

}

/**
 * 获取块
 * @param editorState
 * @returns {*}
 */
export function getSelectBlockList(editorState) {
    return getSelectBlockMap(editorState).toList();
}


export function getSelectBlocksType(editorState) {
    const blocks = getSelectBlockList(editorState);
    const isMultiple = blocks.some(block => block.type !== blocks.get(0).type);
    if (!isMultiple) {
        return blocks.get(0).type;
    }
    return undefined;
}