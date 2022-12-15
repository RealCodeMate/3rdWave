import react, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../sass/components/_header.scss";
import { useTranslation } from 'react-i18next';
import "../sass/components/_header.scss";


export default function LngBtn() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('tr') 
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const handleOpen = () => {
        setOpen(!open);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleLanguageTr = () => {
        changeLanguage('tr')
        setLanguage('tr')
        setOpen(false);
    }

    const handleLanguageEn = () => {
        changeLanguage('en')
        setLanguage('en')
        setOpen(false);
    }

    return (
        <div className="dropdown">
            <button onClick={handleOpen}>
                 {language==='tr' ?  <button>{t('header.language.tr')}</button> : <button>{t('header.language.en')} </button>}
                
            </button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                    <button onClick={handleLanguageTr}>{t('header.language.tr')}</button>
                    </li>
                    <li className="menu-item">
                    <button onClick={handleLanguageEn}>{t('header.language.en')} </button>

                    </li>
                </ul>
            ) : null}
        </div>
    )
}
