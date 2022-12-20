import "../../sass/pages/_treatments.scss"
import { useTranslation } from 'react-i18next';

export default function Banner() {
    const { t } = useTranslation();
    return (
        <div className="middle-bg">
            <div className='middle-bg-icons'>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-tooth fa-4x" />
                    <h3>{t('treatmentsPage.banner.slogan1')}</h3>
                </div>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-magnifying-glass-chart fa-4x" />
                    <h3>{t('treatmentsPage.banner.slogan2')}</h3>
                </div>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-square-plus fa-4x" />
                    <h3>{t('treatmentsPage.banner.slogan3')}</h3>
                </div>
            </div>
        </div>
    )
}