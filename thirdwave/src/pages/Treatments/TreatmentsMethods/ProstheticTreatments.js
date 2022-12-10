import react from 'react';
import Banner from '../../../compenents/Banner/Banner';

export default function ProstheticTreatments({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                <h4>Protez tedavi nedir?</h4>
                <p>
                    Protetik (Protez) Diş Tedavisi, ağızdaki eksik diş sayısına ve yerlerine göre, bu eksiklikleri gidererek,
                    ağız bütünlüğünü kazandıran, yalnızca estetik değil aynı zamanda çiğneme fonksiyonları, konuşurken sesleri
                    düzgün çıkarabilme ve dişsizlikten kaynaklanan psikolojik problemleri de ortadan kaldırmayı hedefleyen diş
                    hekimliğinin önemli ve büyük dallarından biridir.

                    Protetik Diş Tedavisi, çoğunlukla tedaviye geç kalan hastalara uygulanır. Böylece kaybedilen diş ya da dişler
                    farklı protez türleri ile geri kazanılabilir. Protetik tedavi yöntemleri, fonksiyon ve estetik anlamında
                    kişinin kendisini daha iyi hissetmesini sağlar. Kişiye çiğneme ve konuşma fonksiyonu geri kazandırılırken,
                    rahatlık ve estetik açıdan da kişinin kendini iyi hissetmesi sağlanır.
                </p>

                <Banner />
                <p>
                    Temel olarak protetik diş tedavileri ile kaybedilen dişin yerine farklı protez türleri uygulanır. Protez
                    tedavileri, protez uzmanı olarak tanımlanan prostodontist hekimler tarafından uygulanır. Protetik diş tedavisi
                    uzmanı olarak da adlandırılan bu hekimler, ağız içi sabit ve hareketli protez uygulamalarının yanı sıra kanal
                    tedavisi sonrasında dişin porselen kuronlarla desteklenmesi ile de uğraşır.

                    Günümüzde estetik diş hekimliği olarak da tanımlanan protetik diş tedavileri bilimi, zaman zaman ortodonti gibi
                    diğer diş hekimliği uzmanlıkları ile multidisipliner bir yaklaşımla çalışır. Protez uzmanları ya da diğer adıyla
                    prostodontistler, temel olarak zarar görmüş ya da kaybedilmiş dişin, protez uygulamaları ile yerine koyulması ile
                    uğraşır. Bu noktada tercih edilecek protezin hastanın ihtiyacına göre belirlenmesi ve protezin doğal dişler ile
                    aynı boy ve renkte olması önemlidir. Var olan doku yerine protez dişin kullanılması nedeniyle protetik diş tedavileri
                    sıklıkla estetik diş tedavisi olarak da bilinir. Bu noktada estetik görünüm çok önemli olsa da protetik diş
                    tedavisinde esas olan kişinin çiğneme ve konuşma becerilerinin geri kazanılmasıdır.
                </p>
                <p>
                    Estetik olması için yapılan yanlış uygulamalara bağlı olarak kişinin konuşması sırasında bazı seslerin çıkmaması
                    ya da yanakların ısırılması gibi istenmeyen sonuçlar ortaya çıkabilir. Dolayısıyla kaybedilen diş, protez uygulamaları
                    ile geri kazanılırken işlevsellik başta olmak üzere estetik kaygılar da giderilir. Dişlerin tamamının kaybedildiği
                    vakalarda ise total protez uygulamaları yine protetik diş uzmanları tarafından uygulanır.
                </p>
            </p>
        </div>
    );
}