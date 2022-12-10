import react from 'react';
import Banner from '../../../compenents/Banner/Banner';
import "../../../sass/pages/_treatments.scss";

export default function TeethWhitening({ data }) {

    return (
        <div>
            {data ? (data?.toUpperCase()) : `DIS-BEYAZLATMA`}
            <h4>Diş beyazlatma nedir?</h4>
            <p>
                Diş beyazlatma (Bleaching)
                Modern toplumlarda bireyler dişlerinin görünümünü önemser, hatta dişlerdeki şekil ve renk bozuklukları kişide psikolojik rahatsızlıklara kadar varan problemlere sebep olabilir. Diş hekimliğinde estetik ve restoratif maddelerin gelişmesiyle pek çok renk, şekil, konum bozuklukları kolaylıkla çözümlenebilmektedir. Renklenmiş dişlerin beyazlatılması (bleaching), diğer restoratif metotlara kıyasla daha ucuz, pratik ve zararsızdır.
                Diş beyazlatma işlemi nasıl yapılır?
                Beyazlatma dişlerin yapısında (mine ve dentin tabakasında) oluşan renklenmeleri giderme işlemidir. Şu anda bilinen iki değişik beyazlatma yöntemi vardır. Bunlardan ilki hastanın kendi başına uygulayabileceği bir yöntemdir, aşamaları şöyledir:

                <Banner />
            </p>
            <ul>
                <li>
                    Hekimin ağızdan ölçü alıp, dişlerinizin üzerine takabileceğiniz ince lastik kalıpları hazırlatması,
                </li>
                <li>
                    Hastanın kendisi için hazırlanmış özel kalıbın içerisine ilaç yerleştirerek bu kalıbı beyazlatılacak dişlerin üstüne günde en az 6 – 8 saat takması (tercihen uykuda),
                </li>
                <li>
                    Özgüvenin geri kazanılması ile daha mutlu bir sosyal hayat
                </li>
                <li>
                    Tedavinin ortalama 1 – 4 hafta içinde sonlandırılması. İkinci yöntem ise klinikte bir hekim tarafından yapılan beyazlatmadır ki aşağıdaki şekilde uygulanır:
                </li>
                    <ol>
                        <li>
                        Ağartıcı ilaç bu işlem hakkında deneyimi olan bir hekim tarafından diş üzerine yerleştirilir.
                        </li>
                        <li>
                        İlgili dişin üzerine beyaz renkli ışık kaynağı belli bir süre tutulur.
                        </li>
                        <li>
                        İşlem bittiğinde sonuç hemen gözlenir.
                        </li>
                    </ol>
                
                
            </ul>
            Her iki yöntemde etkin olmasına rağmen tercih, renklenmenin derecesine, tedavinin ne kadar çabuk sonlandırılmak istendiğine ve hekimin görüşüne bağlıdır.
            <p></p>
        </div>
    );
}