import React, { createContext } from "react";

export const DisplayModeContext = createContext<{
    displayMode: 'dark' | 'light';
    setDark: () => void;
    setLight: () => void;
    // setDisplayMode: React.Dispatch<React.SetStateAction<string>>;
}>(null);