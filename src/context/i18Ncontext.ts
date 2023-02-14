import React, { createContext } from "react";

export const I18NContext = createContext<{
    locale: string;
    setLanguage: (language: string) => void;
    translateLink: (input: string) => string;
    translateRole: (role: string) => string;
}>(null);