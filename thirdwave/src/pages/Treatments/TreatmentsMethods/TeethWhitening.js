import react from 'react';
import Banner from '../../../compenents/Banner/Banner';
import "../../../sass/pages/_treatments.scss";
import { useTranslation } from 'react-i18next';

export default function TeethWhitening() {
    const { t } = useTranslation();

    return (
        <div>
            <h4>{t('treatmentsPage.teethWhitening.header')}</h4>
            <p>
                {t('treatmentsPage.teethWhitening.info1')}
                <Banner />
            </p>
            <ul>
                <li>
                    {t('treatmentsPage.teethWhitening.l1')}
                </li>
                <li>
                    {t('treatmentsPage.teethWhitening.l2')}
                </li>
                <li>
                    {t('treatmentsPage.teethWhitening.l3')}
                </li>
                <li>
                    {t('treatmentsPage.teethWhitening.l4')}
                </li>
                <ol>
                    <li>
                        {t('treatmentsPage.teethWhitening.l5')}
                    </li>
                    <li>
                        {t('treatmentsPage.teethWhitening.l6')}
                    </li>
                    <li>
                        {t('treatmentsPage.teethWhitening.l7')}
                    </li>
                </ol>
            </ul>
            {t('treatmentsPage.teethWhitening.info2')}

        </div>
    );
}