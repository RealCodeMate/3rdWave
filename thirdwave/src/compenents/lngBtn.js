import react from 'react'
import { useTranslation } from 'react-i18next';

export default function LngBtn() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <button onClick={() => changeLanguage('tr')}>
                TR
            </button>
            <button onClick={() => changeLanguage('en')}>
                ENG
            </button>
        </div>


    )
}