import react, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../sass/components/_header.scss";
import { useTranslation } from 'react-i18next';
import "../sass/components/_header.scss";
import trFlag from "../assets/turkish.png";
import enFlag from "../assets/english.png";


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
                {language === 'tr' ?
                    <div className="menu-item">
                        <button>{t('header.language.tr')}</button>
                        <img src={trFlag} style={{ marginLeft:'5px', height: '20px', width: '20px' }}></img>
                    </div>
                    :
                    <div className="menu-item">
                        <button>{t('header.language.en')}</button>
                        <img src={enFlag} style={{ marginLeft:'5px', height: '20px', width: '20px' }}></img>
                    </div>
                }


            </button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button onClick={handleLanguageTr}>{t('header.language.tr')}</button>
                        <img src={trFlag} style={{ height: '20px', width: '20px' }}></img>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleLanguageEn}>{t('header.language.en')} </button>
                        <img src={enFlag} style={{ height: '20px', width: '20px' }}></img>
                    </li>
                </ul>
            ) : null}
        </div>
    )
}
