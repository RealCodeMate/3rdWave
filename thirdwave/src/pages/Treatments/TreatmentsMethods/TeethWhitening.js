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
                <li key="bleaching-el-1">
                    {t('treatmentsPage.teethWhitening.l1')}
                </li>
                <li key="bleaching-el-2">
                    {t('treatmentsPage.teethWhitening.l2')}
                </li>
                <li key="bleaching-el-3">
                    {t('treatmentsPage.teethWhitening.l3')}
                </li>
                <li key="bleaching-el-4">
                    {t('treatmentsPage.teethWhitening.l4')}
                </li>
                <ol>
                    <li key="bleaching-el-5">
                        {t('treatmentsPage.teethWhitening.l5')}
                    </li>
                    <li key="bleaching-el-6">
                        {t('treatmentsPage.teethWhitening.l6')}
                    </li>
                    <li key="bleaching-el-7">
                        {t('treatmentsPage.teethWhitening.l7')}
                    </li>
                </ol>
            </ul>
            {t('treatmentsPage.teethWhitening.info2')}

        </div>
    );
}