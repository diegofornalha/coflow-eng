export const headerColorMapper = {
    "dark": {
        "colors-d": "colors-b",
    },
    "light": {
        "colors-b" : "colors-d"
    }
}

export function getMatchingColor(displayMode: 'dark' | 'light', color: string) {
    return headerColorMapper[displayMode][color] ? headerColorMapper[displayMode][color] : color;
}