import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { theme } from "../../../../tailwind.config";
import { I18NContext } from '../../../context/i18Ncontext';
import themeStyle from '../../../../content/data/style.json';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DisplayModeContext } from '../../../context/displayMode';

export default function LocaleSelector() {
    const { locale, setLanguage } = useContext(I18NContext);
    const { displayMode } = useContext(DisplayModeContext);
    const darkOrLightMode = createTheme({ palette: { mode: displayMode } });

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (
        <div>
            <FormControl size="small" fullWidth>
                <ThemeProvider theme={darkOrLightMode}>
                    <Select
                        labelId="locale-select-label"
                        id="locale-select"
                        value={locale}
                        label="Language"
                        onChange={handleChange}
                        sx={{
                            textTransform: 'none',
                            color: 'inherit',
                            fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                            fontWeight: themeStyle.link.weight,
                            fontSize: '1rem',
                            letterSpacing: themeStyle.link.letterSpacing,
                            ...theme.extend['sb-component-link'],
                        }}
                    >
                        <MenuItem value={"pt"}>PT</MenuItem>
                        <MenuItem value={"en"}>EN</MenuItem>
                    </Select>
                </ThemeProvider>
            </FormControl>
        </div>
    )
}