import Accordion from "react-bootstrap/Accordion";

function MyAccordion() {
    return (
        <Accordion defaultActiveKey="0" flush>

            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Diş etlerinin fırçalanması neden önemlidir?
                </Accordion.Header>
                <Accordion.Body>
                    Yapılması gereken başka bir işlem de diş etlerini fırçalamaktır. “Ama doktor, diş etlerim kanıyor…” şikayeti olsa
                    bile fırçalamaya devam edilmelidir, çünkü diş etlerini besleyen damarlar dolaşım bozukluğu sonucunda dolgunlaşmıştır.
                    Buna tıp dilinde “konjestiyon” denir. Tedavi etmek için kılcal damarları açmak yani fırça yapmak gerekecektir. Böylece
                    diş etinin damarları iyileşir ve kanama da kendiliğinden durur. Diş etinin fırçalanması, diş eti hastalıklarından
                    korunmanın en etkin çarelerindendir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Diş çekimi sonrası sigara içilir mi?
                </Accordion.Header>
                <Accordion.Body>
                    Elbette diş çekimi sonrasında kesinlikle sigara içmemek gerekiyor. Özellikle diş çekimini takiben ilk 24 saat içerisinde
                    sigara içilmesi ciddi iltihaplanmalara yol açabilir. Bununla birlikte sigaranın yaraların iyileşmesini de sıkıntıya
                    soktuğunu unutmamak gerekiyor. İyileşme sürecine zarar verebilir ve diş çekiminden sonra yaşanan ağrının artmasına da yol açabilir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Diyabetli kişi implant yaptırabilir mi ?</Accordion.Header>
                <Accordion.Body>
                    Diyabetli kişi implant yaptırmak istediğinde öncelikle diş hekimi tarafından bir sağlık kuruluşuna yönlendirilir. Kanında ki
                    hba1c miktarı ve hastanın genel durumu diş hekimi tarafından değerlendirilir. Sonuç uygun görülürse implant tedavisine başlanır.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Dişlerde neden hassasiyet oluşur?</Accordion.Header>
                <Accordion.Body>
                    Normalde dişleri sıcak, soğuk, ekşi ve tatlı gibi dış etkilerden mine tabakası korur. Erozyon, abrazyon veya çürüğe bağlı olarak
                    mine kaybedilmiş ise iç tabaka olan hassas dentin tabakası açığa çıkar. Dentinde uyaranları ileten sinir uçları bulunur ve bu
                    nedenle hassasiyet hissedilir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Diş çürüğü nedir? Diş çürüklerini önlemek için ne yapmak gerekir?</Accordion.Header>
                <Accordion.Body>
                    Diş çürüğü, yiyip içtiğimiz besinlerin dişlerimizde bıraktığı artıklar olarak tanımlayabileceğimiz maddelerin ağız içindeki
                    bakterilerin üremesine uygun bir ortam oluşturması ve uzaklaştırılmayan bu maddelerin desteklediği bakteriyel faaliyet sonucu
                    dişlerde madde kaybı meydana gelmesidir. Özellikle şekerli ve yapışkan gıdalar bu tabloya sebep olmaktadır. Yapılması gereken
                    bu tür gıdaların tüketiminden veya öğünlerden sonra mümkün olamıyorsa günde en az iki kere dişlerin fırçalanmasıdır. Diş ipi
                    ve gargara kullanımı da ağız içi hijyeni iyileştirmeye ciddi katkı sağlar.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Abse nedir?</Accordion.Header>
                <Accordion.Body>
                    Abse oluşumu, diş çürüğünün ilerleyen safhalarında dişin sinirinin bulunduğu kanaldan kök ucuna hatta kemiğe kadar ilerleyip
                    bu alanda iltihap oluşumuna sebep olmasıdır. Akut (alevli) safhada çene kemiği ve dişin içinde iltihabın sıkışmasıyla yoğun
                    ağrı yaşanabilir. Müdahale edilmezse sonrasında iltihap kendine fistül adını verdiğimiz bir çıkış yolu oluşturur ve ağız içine
                    akar ve genelde ağrı kesilir. Bu dönemde de yine kanal tedavisi veya dişin çekimi şeklinde bir müdahale ile iltihabın
                    uzaklaştırılması gereklidir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Süt dişlerinin önemi nedir?</Accordion.Header>
                <Accordion.Body>
                    Süt dişleri, ilerde yerlerine gelecek olan sürekli dişlere rehberlik ederler. Bu anlamda sağlıklı olmaları zamanından önce
                    çekilmemeleri sürekli dişlenme açısından da oldukça önemlidir. Süt dişleri çekilmek zorundaysa diş hekiminiz yer tutucu önerecektir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Çocuklarda çürük oluşumu engellenebilir mi?</Accordion.Header>
                <Accordion.Body>
                    Çocuklarda çürük oluşumunun engellenmesi için yapılması gereken en önemli şey diş fırçalama alışkanlığının kazandırılması,
                    çocuğun yapışkan ve şekerli gıdalardan mümkün olduğunca uzak tutulmasıdır.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
                <Accordion.Header>Laminalar sararır mı?</Accordion.Header>
                <Accordion.Body>
                    Porselen lamina camsı bir yapı olması nedeniyle leke tutmayan bir özelliğe sahiptir. Çay, kahve sigara kullanımında aşırıya
                    kaçılmadığı ve ağız bakımına dikkat edildiği taktirde sararma göstermeyeceklerdir.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
                <Accordion.Header>İmplantların uzun ömürlü olabilmesi nelere bağlıdır?</Accordion.Header>
                <Accordion.Body>
                    İmplantlar da, dişler gibi dişeti ve kemik ile ilişkidedir ve bu yapılarda oluşabilecek rahatsızlıklar implantları
                    etkileyebilmektedir. İyi bir ağız bakımı yapılamadığında, implantların çevresindeki dişeti iltihaplanarak doğal dişe
                    benzer şekilde dişeti hastalıklarının oluşmasına ve implantların kaybedilmesine varan sorunlara neden olabilir. Doğal
                    dişlere olduğu gibi, implantların çevresine de doğru bir ağız bakımı uygulayıp, rutin kontrollere gittiğinizde;
                    implantlarınızı uzun bir süre sağlıklı bir şekilde kullanabilirsiniz.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default MyAccordion;
