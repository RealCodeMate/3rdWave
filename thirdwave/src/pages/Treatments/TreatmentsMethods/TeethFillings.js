import react from 'react';
import Banner from '../../../compenents/Banner/Banner';

export default function TeethFillings({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
               <h4>Kompozit reçine nedir?</h4> 
                İçinde silikon dioksit parçacıkları olan bir plastik karışımdır. Diş renginde olduğu için beyaz dolgu olarak tanımlanırlar. 1960’larda yalnızca ön dişlerde kullanıldıkları halde materyalin ileri derecede geliştirilmesiyle çiğneme basınçlarına dayanıklı ve daha az aşınan bir dolgu maddesi larak arka dişlerde de başarılı olarak uygulanabilmektedirler.
                </p>
                <br/>
                <p>
                <h4>Kompozit dolgular nasıl yapılır?</h4>
                Kompozit dolgular, hazırlanmış kavitelere tabaka tabaka yerleştirilir ve her tabaka özel bir ışık ile sertleştirilir. Bu işlem bitince kompozit dolgular dişe göre şekillendirilir ve düzeltilir. Bütün bu işlemler amalgam dolgu işleminden daha uzun sürer. Ancak amalgamın en az iki katı kadar daha pahalıdır. Kompozit dolguların ağızda kalma süresi de 7-10 yıldır ki bu süre amalgamın ömrüne yakındır. Ancak çok büyük dolgularda durum amalgamın lehinedir.
                <Banner />
                <p>
                <h4>Avantaj ve dezavantajlar</h4>
                Bu dolguların en büyük avantajları estetik olmalarıdır. Ayrıca bu dolgular dişlere iyice bağlandığı için diş dokularını destekler, kırılmaları ve sıcaklık geçmesini engeller. Kompozitler, yalnızca çürükleri restore etmek için değil, dişlerin rengini ve biçimini değişitirerek kozmetik etkileri için de kullanılabilmektedirler. En önemli dezavantajı işlem sonrası duyarlılıkların olmasıdır. Dolguların renkleri, kahve, çay gibi boyayıcı yiyeceklerle de hafifçe değişebilmektedir.
                </p>
                <h4>Kompozit restorasyonlar sonrası hastaya uyarılar</h4>

                Kompozitlerde de artık aynı seansda polisaj işlemi yapılabilmektedir.Ancak çok büyük restorasyonlar ya da çok diş için yapılan seri restorasyonlarda hastayı bir defa daha kontrole çağınp varsa gerekli düzeltmeleri yapmak hem estetik hem fonksiyon açısından çok daha iyi olacaktır. Bu mateyallerle ön dişlerde çok büyük kayıplar restore edilebilmekte bu nedenle hastaların ısırmada dikkatli olmalarının bu restorasyonların ömrünü uzatacağının da anlatılması gerekmektedir.Özellikle fasial yüzde yapılan uygulamalardan sonra ne kadar iyi polisaj yapılmış olsa da boyayabilen yiyecek ve içeceklerin dolguların renklerini değiştirebileceği yine hatırlatılmalıdır.Aşınma nedeni ile restore edilmiş dişlerde daha çok dikkat edilmesi gereken şey de hastaya çok sert olmayan diş fırçaları önermek ve fırçalama yöntemlerinde düzeltmeler yapabilmelerini sağlamaktır.Bu öneriler geniş fasial yüz restorasyonlan için de geçerlidir.


            </p>
        </div>
    );
}