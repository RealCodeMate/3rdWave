import { Link } from "react-router-dom";
import "../../sass/pages/_notFound.scss";

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>404</h1>
            <div class="cloak__wrapper">
                <div class="cloak__container">
                    <div class="cloak"></div>
                </div>
            </div>
            <div class="info">
                <h2>Sayfayı bulamıyoruz</h2>
                <p>O sayfanın eskiden burada olduğundan oldukça eminiz, ancak görünüşe göre kaybolmuş. Onun adına özür dileriz.</p>
                <Link to="/" className="faq-button">
                    Anasayfa
                </Link>
            </div>
        </div>
    )
}