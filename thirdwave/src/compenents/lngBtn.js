import react, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../sass/components/_header.scss";
import { useTranslation } from 'react-i18next';
import "../sass/components/_header.scss";
import trFlag from "../assets/turkish.png";
import enFlag from "../assets/english.png";
import ruFlag from "../assets/russia.png";


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
        console.log(language)
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

    const handleLanguageRu = () => {
        changeLanguage('ru')
        setLanguage('ru')
        setOpen(false);
    }

    const handleLanguages = () => {
        if (language === 'tr') {
            return (
                <div className="menu-item">
                    <button>{t('header.language.tr')}</button>
                    <img src={trFlag} style={{ marginLeft: '5px', height: '20px', width: '20px' }}></img>
                </div>
            )
        }
        if (language === 'en') {
            return (
                <div className="menu-item">
                    <button>{t('header.language.en')}</button>
                    <img src={enFlag} style={{ marginLeft: '5px', height: '20px', width: '20px' }}></img>
                </div>
            )
        }
        if (language === 'ru') {
            return (
                <div className="menu-item">
                    <button>{t('header.language.ru')}</button>
                    <img src={ruFlag} style={{ marginLeft: '5px', height: '20px', width: '20px' }}></img>
                </div>
            )
        }
    }

    return (
        <div className="dropdown">
            <button onClick={handleOpen}>
                {handleLanguages()}


            </button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item" onClick={handleLanguageTr} key='1'>
                        <button >{t('header.language.tr')}</button>
                        <img src={trFlag} style={{ height: '20px', width: '20px' }}></img>
                    </li>
                    <li className="menu-item" onClick={handleLanguageEn} key='2'>
                        <button >{t('header.language.en')} </button>
                        <img src={enFlag} style={{ height: '20px', width: '20px' }}></img>
                    </li>
                    <li className="menu-item" onClick={handleLanguageRu} key='3'>
                        <button >{t('header.language.ru')} </button>
                        <img src={ruFlag} style={{ height: '20px', width: '20px' }}></img>
                    </li>
                </ul>
            ) : null}
        </div>
    )
}
