import react from 'react';
import Banner from '../../../compenents/Banner/Banner';

export default function RootCanalTreatments({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                <h4>Kanal tedavisi nedir?</h4>
                <p>
                    Dişin iç kısmında bulunan pulpa dokusunun hastalanmasıyla oluşan rahatsızlıkların çözümü için uygulanan tedavilere kanal
                    tedavisi denmektedir. Dişin canlılığını koruduğu durumlarda uygulanan lokal anestezilerde tedavi öncesi hastamız kanal tedavisine
                    hazır hale getirilir.Dişin içinde bulunan pulpa dokusu özel el aletleriyle çıkarılır. Çeşitli kimyasal solüsyonların yardımıyla dişin
                    iç kısmı artıklardan ve bakterilerden arındırılmaya çalışılır. Dokuyla uyumlu malzemelerle kök kanalları sızdırmaz bir biçimde kapatılır.
                    Dişin iç kısmında iltihabi durumların olduğu vakalarda kanallar doldurulmadan önce pansuman yapılabilinir.
                </p>
                <h4>Kanal tedavisi yapılan dişlerin ömrü nedir?</h4>
                <p>
                    Kanal tedavisi sonrası herhangi bir dişinizden farklı bir ömrü olmayacaktır. Uygun tedaviler uygun dişlere yapıldıktan sonra ömür boyunca
                    kullanabileceğinizi söyleyebiliriz.
                </p>
                <Banner />
                <h4>Dişlerimiz neden ağrır veya enfekte olur?</h4>
                <p>
                    Diş çürüğünün ilerlemiş durumlarında diş içerisindeki pulpa dış dünyaya açık hale gelebilir. Soğuk, sıcak veya asitli uyaranlar canlılığını devam ettiren diş sinirlerini etkileyerek ağrı oluşturabilir. Bazı durumlarda kök uçlarında enfeksiyon basınç oluşturarak ağrıyı başlatabilir.

                    Bunun yanında dişler darbelere maruz kalarak sağlıklarını yitirebilir. Bu darbeler şiddetli ve tek seferde olabileceği gibi küçük ama sürekli de olabilir.
                </p>
                <h4>Kanal tedavisi başarısı nedir?</h4>
                <p>
                    Kanal tedavisi ile kansere yakalanma vakaları arasında herhangi bir ilişki yoktur.
                </p>
            </p>
        </div>
    );
}