import react from 'react';
import Banner from '../../../compenents/Banner/Banner';

export default function ZirconiumCoating({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                <h4>Zirkonyum kaplama nedir?</h4>
                Dişlerinde oluşan lekeler sonucunda kişiler zirkonyum kaplama tercih etmektedir. Bu  kaplamalar ise porselen kaplama olarakta
                bilinmektedir. Ayrıca zirkonyum kaplamalar, metal destekli yahut metal desteksiz olarakta ikiye ayrılmaktadır. Çoğunlukla
                doktor önerisi ile yapılan bu yöntem ise şahıslar tarafından da sıklıkla tercih edilmektedir. Dişlere beyazlık sağlayan bu
                kaplama aynı zamanda diş ve diş eti sağlığında da katkısı bulunmaktadır.
            </p>
            <br />
            <p>
                <h4>Zirkonyum kaplama nasıl yapılır ?</h4>
                İlk öncelikle dişlerin ölçüsü dijital bir ortamda alınmaktadır. Ardından diş rengi, diş kaplamasının boyutları, diş sayısı ve
                yüze uyumu gibi teknik işlemlerde kontrol edilir. Zirkonyum kaplamalar hazır olduktan sonra hastaya gösterilir. Hastanın beğenmesi
                durumunda tamamiyle zirkonyum kaplama işlemi başlatılmaktadır.
                Zirkonyum kaplama işlemleri 4 veya 5 gün gibi bir süre içerisinde bitmektedir. Bu süre doktorun yoğunluğuma görede değişebilmektedir.
                Diş işlemleri ise yüzeylerinde bulunan fazlalıkların törpülenmesi ile başlamaktadır. Törpüleme sonrasında doktor zirkonyumu dişe
                şeffaf ve özel bir yapıştırıcı eşliği ile dişe yapıştırır.
                <Banner />
                <p>
                    <h4>Zirkonyum kaplama avantajları</h4>
                    Zirkonyum kaplama sadece estetik bir gülüşle kalmayıp birçok avantaj sunmaktadır. Zirkonyum kaplama avantajları ise şu şekilde
                    sıralanabilmektedir;
                    <ul>
                        <li>
                            Yapısı gereği diş etlerinde koyu bir renk bırakmamaktadır. Bu nedenle ileriki yaşlarda takacağınız metal kaplamalı
                            dişler siyah renk yansımasıda yapmaz.
                        </li>
                        <li>
                            Zirkonyum yapısı gereği ışığı içeri geçirerek kendi dişlerinizi de eski görüntüsüne getirebilme avantajı da sunmaktadır.
                        </li>
                        <li>
                            Bakımı yapılması durumunda uzun yıllarca kullanılmaktadır.
                        </li>
                        <li>
                            Zirkonyum diş etlerine uyum göstererek, diş et sağlığınızda da büyük rol oynamaktadır.
                        </li>
                        <li>
                            Zirkonyum kullanan kişilerin dişlerinde sıcak ve soğuk hassasiyet olmaz.
                        </li>
                        <li>
                            Sigara içen kişilerin dişlerinde, diş lekeleri ve diş sararmasının oluşmasında minimuma indirmektedir.
                        </li>
                        <li>
                            Ağız kokusunuda minimuma indirmektedir.
                        </li>
                    </ul>
                </p>


            </p>
        </div>
    );
}