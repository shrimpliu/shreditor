/**
 * 内敛样式
 * @type {[*]}
 */
export const INLINE_STYLES = [
    'BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE', 'SUPERSCRIPT', 'SUBSCRIPT'
];

export const FONT_SIZES = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];

/**
 * 自定义内联样式
 * @type {{*}}
 */
export const CUSTOM_INLINE_STYLES = {
    FONT_SIZE: {},
    FONT_FAMILY: {}
};

FONT_SIZES.forEach(fontSize => {
   CUSTOM_INLINE_STYLES.FONT_SIZE[`FONT_SIZE-${fontSize}`] = {fontSize};
});



/**
 * custom style map
 * @type {{}}
 */
export const CUSTOM_STYLE_MAP = {
    ...CUSTOM_INLINE_STYLES.FONT_SIZE,
    SUPERSCRIPT: {
        fontSize: 11,
        position: 'relative',
        top: -8,
        display: 'inline-flex',
    },
    SUBSCRIPT: {
        fontSize: 11,
        position: 'relative',
        bottom: -8,
        display: 'inline-flex',
    }
};

/**
 * EditorChangeTypes
 * @type {{*}}
 */
export const CHANGE_TYPES = {
    ADJUST_DEPTH: 'adjust-depth',
    APPLY_ENTITY: 'apply-entity',
    BACKSPACE_CHARACTER: 'backspace-character',
    CHANGE_BLOCK_DATA: 'change-block-data',
    CHANGE_BLOCK_TYPE: 'change-block-type',
    CHANGE_INLINE_STYLE: 'change-inline-style',
    MOVE_BLOCK: 'move-block',
    DELETE_CHARACTER: 'delete-character',
    INSERT_CHARACTERS: 'insert-characters',
    INSERT_FRAGMENT: 'insert-fragment',
    REDO: 'redo',
    REMOVE_RANGE: 'remove-range',
    SPELLCHECK_CHANGE: 'spellcheck-change',
    SPLIT_BLOCK: 'split-block',
    UNDO: 'undo'
};