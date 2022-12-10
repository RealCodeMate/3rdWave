import react from 'react';
import Banner from '../../../compenents/Banner/Banner';

export default function TeethFillings({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                <h4>Laminat kaplama nedir?</h4>
                Görünüşünüzü olumsuz yönde etkileyen bir çok diş bozukluklarında mükemmel bir kozmetik çözümdür. Laminat kaplamalarda
                temel olarak estetik sorunları olan ön dişlerde, porselenden hazırlanan tabakanın dişlerin ön yüzlerine yapıştırılmasıyla
                bu sorunların giderilmesini amaçlayan bir tedavi şeklidir. Çoğu durumda sağlam yapıları ve bozulmayan renkleriyle dişlere
                doğal bir güzellikle birlikte, doğal bir işlev kazandırmak için yeterlidirler. Laminat kaplamalarla kendinizden emin bir
                şekilde gülümseyebilirsiniz! Porselenden imal edilen bu kaplamalar ince, yarı geçirgen bir tabakadır. Mevcut bir diş
                üzerine mükemmel bir uyum ve hassasiyetle hazırlanıp yerleştirilirler. Dişin ön yüzü ile kaplamanın iç yüzü özel bir
                rezinle (yapıştırıcı bir ara madde) yapıştırılır. İşlem bittiğinde mükemmel bir kaynaşma beklenir.
            </p>
            <br />
            <p>
                <h4>Hangi durumlarda laminat tedavisine başvurulur?</h4>
                Laminat vener kaplamalar temel olarak, renk değişikliklerinin giderilmesi ve belli bir dereceye kadar şekil düzeltilmesi
                amacıyla yapılabilirler. Başlıca uygulama alanları şu şekilde özetlenebilir:
                <ul>
                    <li>
                        Renklenmelerde, bleaching (diş beyazlatma) gibi metotlarla sonuç alınmayan ileri derecedeki antibiyotik,
                        flor vb. lekelerinde kalıtsal yapı ve renk bozukluklarında.
                    </li>
                    <li>
                        Ayrık dişleri bitiştirmede (diastema kapama).
                    </li>
                    <li>
                        Kırık veya aşınmış dişlerin restorasyonunda.
                    </li>
                    <li>
                        Rengi ve yapısı bozulmuş eski dolguların düzeltilmesinde.
                    </li>
                    <li>
                        Çapraşık ve eğri dişlerin düzeltilmesinde (ortodontik tedavi alternatifi olarak).
                    </li>
                </ul>
                <Banner />
                <p>
                    <h4>Laminat tedavisinden kimler yararlanabilir?</h4>
                    Hemen hemen herkes! Yukarıdaki sebeplerden dolayı şikayetçi olan her yaş grubundaki kişiler laminat tedavisinden
                    yararlanabilir. Ancak, çene bozuklukları, tırnak yeme, kalem ısırma gibi kötü alışkanlıklar ileri derecede dişeti
                    tahribatlarının mevcut olduğu durumlarda uygulanmaz. Buna en iyi karar verecek olan dişhekiminizdir.
                </p>



            </p>
        </div>
    );
}