import react from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../sass/components/_header.scss";
import { useTranslation } from 'react-i18next';

export default function LngBtn() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            {/* <button onClick={() => changeLanguage('tr')}>
                TR
            </button>
            <button onClick={() => changeLanguage('en')}>
                ENG
            </button> */}
            <NavDropdown title="Language" >
                <NavDropdown.Item onClick={() => changeLanguage('tr')}>TR</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => changeLanguage('en')}>ENG</NavDropdown.Item>
            </NavDropdown>
        </div>


    )
}