import react from 'react';

export default function ToothPulling({ data }) {

    return (
        <div>
            {data.toUpperCase()}
            <p>
                Diş çekimi, tedavisi mümkün olmayan dişlerin kemikteki yuvasından çıkartılması işlemidir.

                Diş çekimi hangi durumlarda uygulanır?

                Diş çekimi işlemi aşağıdaki durumlarda uygulanmaktadır:

                -Dişlerde görülen çürükler veya kırıklar sonucu dolgu, kanal tedavisi veya kron uygulamaları yapılabilmektedir. Ancak dişler bu tedavi seçenekleri ile kurtarılamayacak kadar madde kaybına sahipse,

                -Diş eti hastalığı sonucu dişi destekleyen çevre dokularda gözlenen kayıplar ileri boyutlardaysa,

                -Ortodontik tedavi için yer gereksinimine ihtiyaç duyuluyorsa,

                -Gömülü veya yarı gömülü dişler zaman içinde çürüklere, ağrılara ve abse oluşumuna neden oluyorsa diş çekimi gerekebilmektedir.
            </p>
        </div>
    );
}