import React, { useContext } from "react";
import { Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Action } from "../../atoms";
import classNames from "classnames";
import { theme } from "../../../../tailwind.config";
import { I18NContext } from "../../../context/i18Ncontext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DisplayModeContext } from '../../../context/displayMode';

const themeStyle = require('../../../../content/data/style.json');


export default function DropdownLink(props) {
    const { translateLink: translate } = useContext(I18NContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { displayMode } = useContext(DisplayModeContext);
    const darkOrLightMode = createTheme({ palette: { mode: displayMode } });

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const {
        label,
        dropdownLinks,
        inMobileMenu,
        'data-sb-field-path': fieldPath
    } = props;

    const annotations = fieldPath ? {
        'data-sb-field-path': [
            fieldPath,
            `dropdownLinks`
        ]
            .join('.')
            .trim()
    } : {};

    return (
        <div {...annotations}>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                className='sb-component-link'
                sx={{ 
                    textTransform: 'none',
                    color: 'inherit',
                    fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                    fontWeight: themeStyle.link.weight,
                    fontSize: '1rem',
                    letterSpacing: themeStyle.link.letterSpacing,
                    ...theme.extend['sb-component-link'],
                    padding: '0',
                }}
            >
                <span>{translate(label)}</span>
            </Button>
            <ThemeProvider theme={darkOrLightMode}>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    {dropdownLinks.map((link, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleClose}
                            sx={{
                                color: 'inherit',
                                fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                                fontWeight: themeStyle.link.weight,
                                fontSize: '1rem',
                                letterSpacing: themeStyle.link.letterSpacing,
                                ...theme.extend['sb-component-link'],
                            }}
                        >
                            <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`${index}`}/>
                        </MenuItem>
                    ))}
                </Menu>
            </ThemeProvider>
        </div>
    )
}