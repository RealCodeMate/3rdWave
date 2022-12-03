import react from 'react';

export default function ProstheticTreatments({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                Sabit Protezler: Yeterli diş dokusu desteği olmayan ve dolgu materyali ile restore edilemeyecek büyüklükte madde kaybı yaşayan dişlerde doku kaybının büyüklüğüne göre dişin bir bölümünü içine alan inley, onley restorasyonlar veya dişin tamamı küçültülerek kuron restorasyonu yapılabilmektedir. Bir veya daha fazla diş eksikliği olduğu durumlarda ise boşluğun iki tarafındaki dişlerin küçültülerek destek olarak kullanıldığı protezler köprü protezleridir. İnsanların sosyal hayatlarındaki değişimler, diş hekimliğindeki ilerleyen teknoloji ve protetik tedavilerdeki gelişmeler hastaların estetik ve fonksiyonel beklentilerini artırmış, yaşam standartlarını yükseltmiştir. Özellikle estetik beklentinin artması ile alt yapıda kullanılan metal alaşımları yerini üstün estetik ve biyouyumlu materyallere bırakmıştır.
                Zirkonyum Restorasyonlar: Yüksek dirence sahip, biyouyumlu, dayanıklı ve estetik restorasyonlardır. Zirkonyum oksitin doğal diş rengine yakın bir materyal olması ve kuvvetler karşısında en az onun kadar dayanıklı kalması sabit ve implant üstü protezlerde zirkonyum seramiklerin kullanılmasını yaygınlaştırmıştır.
                Empress kuronlar; metal veya zirkonyum oksit gibi alt yapı materyali kullanılmadan tamamı seramikten oluşan dayanıklılığı artırılmış ve ışık geçirgenliği oldukça iyi olan yüksek estetik özelliklere sahip restorasyonlardır.

                Laminate Restorasyonlar: Dişlerdeki şekil, renk, form ve boyut bozukluklarını tedavi etmek için diş yüzeyinin minimal düzeyde aşındırılması sonucu elde edilen yaprak şeklindeki porselenlerin yapıştırılması ile elde edilen doğal dişe yakın oldukça estetik restorasyonlardır.
            </p>
        </div>
    );
}