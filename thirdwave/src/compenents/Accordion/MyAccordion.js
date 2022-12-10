import Accordion from "react-bootstrap/Accordion";

function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Diş beyazlatmanın dişlere zararı var mıdır?
        </Accordion.Header>
        <Accordion.Body>
          Bir çok birey için gülüşün güzel olarak algılanmasında, diş ve çevre yapılarının formu ve simetrisi kadar dişlerin beyaz gözükmeleride önemlidir. Diş beyazlatma işlemi hekim kontrolünde olduğu sürece zararlı değildir ancak tedavi bitiminde 1 haftadan uzun sürmeyen diş hassasiyeti görülebilmektedir ve hastalar tedavi sonrası 2 hafta boyunca dişleri renklendirme potansiyeli olan; kahve, şarap, sigara gibi tüketimlerden mümkün olduğunca kaçınmalıdır.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Laminatlar uzun ömürlü müdür? Dayanıklı mıdır?
        </Accordion.Header>
        <Accordion.Body>
          Laminatlar iyi bir ağız bakımıyla yıllarca sorunsuz olarak kullanılabilirler. Çünkü diğer adeziv sistemlerden (bonding) daha üstün özelliklere sahip porselenden imal edilmişlerdir. Lekelenme ve aşınmaya karşı daha dirençlidirler. Ömürlerini uzatmak için ağız bakımına dikkat etmek gerekir. Ayrıca, çok sert gıdaları ısırmaktan, tırnak yemek gibi kötü alışkanlıklardan kaçınmak gerekir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Dişler nasıl fırçalanmalı?</Accordion.Header>
        <Accordion.Body>
          Dişlerimizi korumanın en etkili yolu düzenli olarak fırçalamaktır. Diş fırçalama işlemi ortalama 2 dk sürmeli, her dişin üzeri 8-10 kez fırçalanmalıdır. Diş fırçalarken mutlaka diş dişeti birleşim yeri özellikle fırçalanmalıdır. Amaç diş yüzeyindeki yemek artıklarını, bakteri plağını uzaklaştırmaktır.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Kanal tedavisi yapıldıktan sonra ağrı olur mu?</Accordion.Header>
        <Accordion.Body>
          Tedavi sonrası birkaç gün hafif ağrınız olabilir.Ancak bu durum kalıcı değildir.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
