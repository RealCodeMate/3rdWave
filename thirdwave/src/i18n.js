import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "tr",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            tr: {
                translation: {
                    header: {
                        home: "Anasayfa",
                        treatments: "Tedaviler",
                        gallery: "Galeri",
                        about: "Hakkımda",
                        faq: "SSS",
                        contact: "İletişim",
                        language:{
                            en:"EN 🇬🇧",
                            tr:"TR 🇹🇷"
                        }
                    },
                    homePage: {
                        welcomeTitle: {
                            word1: "Sizin",
                            word2: "gülüşünüz",
                            word3: "bizim için",
                            word4: "önemli.",
                        },
                        welcomeButton: {
                            text: "Başlayalım",
                        },
                        treatmentsSection: {
                            treHeader: "Tedaviler",
                            tre1: "Diş Beyazlatma",
                            tre2: "Dolgu işlemleri",
                            tre3: "Diş Çekimleri",
                            tre4: "İmplant Uygulamaları",
                            tre5: "Kanal Tedavileri",
                            tre6: "Protezler",
                            more: "Devamı",
                        },
                        photoGallerySection: {
                            header: "Foto Galeri",
                            word1: "Güzel bir",
                            word2: "gülümseme",
                            word3: "için sizleri bekliyoruz.",
                        },
                        faqSection: {
                            header: {
                                word1: "S",
                                word2: "ıkça",
                                word3: "S",
                                word4: "orulan",
                                word5: "S",
                                word6: "orular",
                            },
                            button: {
                                more: "Daha Fazlası",
                            },
                            accordion: {
                                questions: {
                                    q1: "Diş beyazlatmanın dişlere zararı var mıdır?",
                                    q2: "Laminatlar uzun ömürlü müdür? Dayanıklı mıdır?",
                                    q3: "Dişler nasıl fırçalanmalı?",
                                    q4: "Kanal tedavisi yapıldıktan sonra ağrı olur mu?",
                                },
                                answers: {
                                    a1: "Bir çok birey için gülüşün güzel olarak algılanmasında, diş ve çevre yapılarının formu ve simetrisi kadar dişlerin beyaz gözükmeleride önemlidir. Diş beyazlatma işlemi hekim kontrolünde olduğu sürece zararlı değildir ancak tedavi bitiminde 1 haftadan uzun sürmeyen diş hassasiyeti görülebilmektedir ve hastalar tedavi sonrası 2 hafta boyunca dişleri renklendirme potansiyeli olan; kahve, şarap, sigara gibi tüketimlerden mümkün olduğunca kaçınmalıdır.",
                                    a2: "Laminatlar iyi bir ağız bakımıyla yıllarca sorunsuz olarak kullanılabilirler. Çünkü diğer adeziv sistemlerden (bonding) daha üstün özelliklere sahip porselenden imal edilmişlerdir. Lekelenme ve aşınmaya karşı daha dirençlidirler. Ömürlerini uzatmak için ağız bakımına dikkat etmek gerekir. Ayrıca, çok sert gıdaları ısırmaktan, tırnak yemek gibi kötü alışkanlıklardan kaçınmak gerekir.",
                                    a3: "Dişlerimizi korumanın en etkili yolu düzenli olarak fırçalamaktır. Diş fırçalama işlemi ortalama 2 dk sürmeli, her dişin üzeri 8-10 kez fırçalanmalıdır. Diş fırçalarken mutlaka diş dişeti birleşim yeri özellikle fırçalanmalıdır. Amaç diş yüzeyindeki yemek artıklarını, bakteri plağını uzaklaştırmaktır.",
                                    a4: "Tedavi sonrası birkaç gün hafif ağrınız olabilir.Ancak bu durum kalıcı değildir.",
                                },
                            },
                        },
                        workingDaysAndHours: {
                            header: "Çalışma Saatleri",
                            day1: "Pazartesi",
                            day2: "Salı",
                            day3: "Çarşamba",
                            day4: "Perşembe",
                            day5: "Cuma",
                        },
                    },
                    treatmentsPage: {
                        header: "Tedaviler",
                        banner: {
                            slogan1: "Uzman Hekim",
                            slogan2: "Kaliteli Ekipmanlar",
                            slogan3: "Konforlu Tedavi",
                        },
                        sideMenu: {
                            m1: "Diş Beyazlatma",
                            m2: "Dolgu işlemleri",
                            m3: "Diş Çekimleri",
                            m4: "İmplant Uygulamaları",
                            m5: "Kanal Tedavileri",
                            m6: "Protez Tedavileri",
                            m7: "Zirkonyum Kaplama",
                            m8: "Laminat Kaplama",
                        },
                        teethWhitening: {
                            header: "Diş beyazlatma nedir?",
                            info1:
                                "Diş beyazlatma modern toplumlarda bireyler dişlerinin görünümünü önemser, hatta dişlerdeki şekil ve renk bozuklukları kişide psikolojik rahatsızlıklara kadar varan problemlere sebep olabilir. Diş hekimliğinde estetik ve restoratif maddelerin gelişmesiyle pek çok renk, şekil, konum bozuklukları kolaylıkla çözümlenebilmektedir. Renklenmiş dişlerin beyazlatılması (bleaching), diğer restoratif metotlara kıyasla daha ucuz, pratik ve zararsızdır. Diş beyazlatma işlemi nasıl yapılır?Beyazlatma dişlerin yapısında (mine ve dentin tabakasında) oluşan renklenmeleri giderme işlemidir. Şu anda bilinen iki değişik beyazlatma yöntemi vardır. Bunlardan ilki hastanın kendi başına uygulayabileceği bir yöntemdir, aşamaları şöyledir:",
                            l1: "Hekimin ağızdan ölçü alıp, dişlerinizin üzerine takabileceğiniz ince lastik kalıpları hazırlatması,",
                            l2: "Hastanın kendisi için hazırlanmış özel kalıbın içerisine ilaç yerleştirerek bu kalıbı beyazlatılacak dişlerin üstüne günde en az 6 – 8 saat takması (tercihen uykuda),",
                            l3: "Özgüvenin geri kazanılması ile daha mutlu bir sosyal hayat",
                            l4: "Tedavinin ortalama 1 – 4 hafta içinde sonlandırılması. İkinci yöntem ise klinikte bir hekim tarafından yapılan beyazlatmadır ki aşağıdaki şekilde uygulanır:",
                            l5: " Ağartıcı ilaç bu işlem hakkında deneyimi olan bir hekim tarafından diş üzerine yerleştirilir.",
                            l6: "İlgili dişin üzerine beyaz renkli ışık kaynağı belli bir süre tutulur.",
                            l7: "İşlem bittiğinde sonuç hemen gözlenir.",
                            info2:
                                " Her iki yöntemde etkin olmasına rağmen tercih, renklenmenin derecesine, tedavinin ne kadar çabuk sonlandırılmak istendiğine ve hekimin görüşüne bağlıdır.",
                        },
                        teethFillings: {
                            header1: "Kompozit reçine nedir ?",
                            info1:
                                "İçinde silikon dioksit parçacıkları olan bir plastik karışımdır. Diş renginde olduğu için beyaz dolgu olarak tanımlanırlar. 1960’larda yalnızca ön dişlerde kullanıldıkları halde materyalin ileri derecede geliştirilmesiyle çiğneme basınçlarına dayanıklı ve daha az aşınan bir dolgu maddesi larak arka dişlerde de başarılı olarak uygulanabilmektedirler.",
                            header2: "Kompozit dolgular nasıl yapılır ?",
                            info2:
                                "Kompozit dolgular, hazırlanmış kavitelere tabaka tabaka yerleştirilir ve her tabaka özel bir ışık ile sertleştirilir. Bu işlem bitince kompozit dolgular dişe göre şekillendirilir ve düzeltilir. Bütün bu işlemler amalgam dolgu işleminden daha uzun sürer. Ancak amalgamın en az iki katı kadar daha pahalıdır. Kompozit dolguların ağızda kalma süresi de 7-10 yıldır ki bu süre amalgamın ömrüne yakındır. Ancak çok büyük dolgularda durum amalgamın lehinedir.",
                            header3: "Avantaj ve dezavantajlar",
                            info3:
                                "Bu dolguların en büyük avantajları estetik olmalarıdır. Ayrıca bu dolgular dişlere iyice bağlandığı için diş dokularını destekler, kırılmaları ve sıcaklık geçmesini engeller. Kompozitler, yalnızca çürükleri restore etmek için değil, dişlerin rengini ve biçimini değişitirerek kozmetik etkileri için de kullanılabilmektedirler. En önemli dezavantajı işlem sonrası duyarlılıkların olmasıdır. Dolguların renkleri, kahve, çay gibi boyayıcı yiyeceklerle de hafifçe değişebilmektedir.",
                            header4: "Kompozit restorasyonlar sonrası hastaya uyarılar",
                            info4:
                                "Kompozitlerde de artık aynı seansda polisaj işlemi yapılabilmektedir.Ancak çok büyük restorasyonlar ya da çok diş için yapılan seri restorasyonlarda hastayı bir defa daha kontrole çağınp varsa gerekli düzeltmeleri yapmak hem estetik hem fonksiyon açısından çok daha iyi olacaktır. Bu mateyallerle ön dişlerde çok büyük kayıplar restore edilebilmekte bu nedenle hastaların ısırmada dikkatli olmalarının bu restorasyonların ömrünü uzatacağının da anlatılması gerekmektedir.Özellikle fasial yüzde yapılan uygulamalardan sonra ne kadar iyi polisaj yapılmış olsa da boyayabilen yiyecek ve içeceklerin dolguların renklerini değiştirebileceği yine hatırlatılmalıdır.Aşınma nedeni ile restore edilmiş dişlerde daha çok dikkat edilmesi gereken şey de hastaya çok sert olmayan diş fırçaları önermek ve fırçalama yöntemlerinde düzeltmeler yapabilmelerini sağlamaktır.Bu öneriler geniş fasial yüz restorasyonlan için de geçerlidir.",
                        },
                        teethPullings: {
                            header1: "Diş çekimi nedir? Nasıl Yapılır? Acıtır Mı?",
                            info1:
                                "Diş çekimi herhangi bir problem olduğunda ve dişin kurtarılması pek mümkün görünmediğinde tercih edilen bir çözümdür. Diş hekimleri için diş çekiminin son çare olarak tercih edildiğini söyleyebiliriz. Dişin kurtarılmasının mümkün olmadığı durumlarda çevre dokulara zarar vermeden dişin ağız içerisinden tahliye edilmesi diş çekimi olarak adlandırılır. Bu işlemde diş, kemikte yer alan ve soket olarak adlandırılan yuvasından tıbbicaletler yardımı ile çıkarılır. Diş çekiminin ne kadar sürdüğü, acı verip vermediği gibi konuya dair merak edilen tüm hususlara değineceğiz. Öncesinde bu işlemin nasıl yapıldığını daha detaylı bir şekilde ele alalım.",
                            header2: "Diş çekimi nasıl yapılır?",
                            info2:
                                "Öncelikle diş çekimi işleminin diş hekimi veya çene cerrahları tarafından yapılması gereken bir müdahale olduğunu belirtelim. Dişin çekilmesinden önce bu bölgenin uyuşturulması için lokal anestezi işlemi gerçekleştirilir. Anestezi ilacı enjeksiyon yöntemi ile bölgeye iletilir. Çok kısa bir süre içerisinde uyuşma meydana gelir ve ardından işleme başlanabilir. İşlem sırasında dişi elevatör adı verilen tıbbı bir alet ile diş yerinden oynatılır. Ardından davye kullanılarak diş sıkıca kavranır.",
                            info3:
                                "Sonrasında dişin bağlarından gevşetilmesi için hafifçe oynatılması gerekir. İleri ve geri yönlü hafif oynamalar ile diş bağlarından ayrılır ve böylelikle diş çekimi işlemi de kolaylıkla gerçekleştirilir. Sadece bazı durumlarda dişin parçalı olarak ağız içerisinden tahliye edilmesi söz konusu olabilir. Bunun dışında çoğunlukla diş tek bir parça halinde çekilir. Diş çekiminin ardından hafif bir kanama olması beklenen bir durumdur. Aynı zamanda bu hafif kanamanın gerekli olduğunu da belirtmeliyiz. Çoğunlukla çekim sonrasında geride kalan oyuk kısımda bir kan pıhtısı meydana gelir. Zira diş çekiminden sonra iyileşmenin başlaması için bu kan pıhtısının meydana gelmesi de gerekiyor. Diş hekimi tarafından bu bölgeye soket yerleştirilmesi de mümkündür.",
                        },
                        implantMethods: {
                            header1: "İmplant nedir?",
                            info1: `İmplant, vücut içerisine ve canlı dokulara yerleştirilen cansız maddeleri ifade eder. (Dental) implantlar (diş implanları), eksik olan veya birkaç dişin işlev ve estetiğini iade etmek için çene kemikleri içinde açılan yuvaya yerleştirilen, genellikle titanyum esaslı vida veya kök şeklinde yapılardır. Diş implantı ile canlı kemik dokusu arasındaki birlikteliğe osseintegrasyon adı verilir.`,
                            header2: "Osseintegrasyon",
                            info2:
                                "Canlı kemik dokusu ile fonksiyondaki titanyum implant malzemesi arasında, 100 büyütmede ışık mikroskobunda gözlenen direk temastır. Bu fenomen Göteburg Üniversitesinden Prof.Dr.Per-Ingvar Branemark ve çalışma arkadaşları tarafından geliştirilerek tarif edilmiştir. Branemark 1955 yılında mikrosirkülasyon üzerine yaptığı bir deney sırasında, tesadüfen titanyum ile kemik arasındaki direk bağlantıyı saptamıştır. Bu durumdan faydalanarak dişsiz çenelerde protezlere destek olacak implantları tasarlamıştır. 1965 yılına kadar on yıl süre ile çeşitli hayvan deneyleri, dizayn çalışmaları ve biyomekanik deneyler yapmış, 1965’te ilk insan üzerinde uygulamaya geçmiştir. 1969 yılında bu ön çalışmaların raporu Scandinavian Journal of Dentistry’de yayınlanmış; 1977 yılında 15 yıllık takip sonuçları yine Scandinavian Journal of Dentistry’de yayınlanmış, devam eden çalışma sonuçları 1981 yılında International Journal of Oral Surgery dergisinde yayınlanarak tıp dünyasına duyrulmuştur. Bu yayın sonrasında o güne kadar şarlatanlıkla ve bilimsel altyapıdan yoksun olmakla suçlanan diş implantı uygulamaları, A.B.D. ve Avrupa’daki saygın üniversitelerce kabul görerek hızla yaygınlaşmış ve dişhekimliği uygulamaları arasındaki yerini almıştır.",
                            header3: "Diş implantı",
                            info3:
                                "Diş implantları, travma, çürük, endodontik veya periodontal patolojiler sebebi ile çekim endikasyonu bulanan ve kaybedilen eksik dişlerin telafisi amacı ile atravmatik cerrahi operasyon tekniğiyle çene kemiklerine yerleştirilerek diş kökü işlevini gören, genellikle kök veya vida formunda, çoğunlukla titanyum ve alaşımlarından mamül cisimlerdir. Diş implantlarının kemiğe kaynama haline osseointegrasyon denir.",
                            header4: "Tarihçe",
                            info4:
                                "İmplant tanımına uyan ve eksik dişlerin telafisi amacı ile yapılan ilk uygulamalar arkeolojik bulgulara göre Maya uygarlığına aittir (MÖ 6. yüzyıl). İlk patenti alınan diş implantı 1908’de ABD’de Greenfield’in dizayn ettiği irridio-platin implanttır. 1939’da Strock krom-kobalt diş implantını tanıtmıştır. Lubit ve Rappaport 1949’da vitalyumdan yapılan vida veya kafes şeklindeki implantlarını geliştirmişlerdir. Cherchève çift spiral yivli implant dizaynını ve frezleme sonrası yiv açma tekniğini (screw-tapping), implantın çift safhalı cerrahi teknik ile fonksiyona sokulması gibi uygulamaları geliştirmiştir. Geçen yüzyılın ortalarına kadar Formiggini, Peron, Tramonte, Benoit, Jeanneret, Muratori, Linkow gibi dişhekimleri günümüzde kullanılan implantlara benzer uygulamalar yapmışlardır. Ancak bu yaklaşım ve çabaların hepsi ampirik uygulamalar olarak ve vaka raporlarının ötesine gidememiş çalışmalar olarak kalmışlardır. 1940’lı yıllarda subperiostal implantlar ortaya atılmıştır. 1960’lı yıllara gelindiğinde Linkow tarafından geliştirilen blade (levha, plaka) dizayn implantlar ortaya çıkmıştır.",
                        },
                        rootCanalTreatments: {
                            header1: "Kanal tedavisi nedir ?",
                            info1:
                                "Dişin iç kısmında bulunan pulpa dokusunun hastalanmasıyla oluşan rahatsızlıkların çözümü için uygulanan tedavilere kanal tedavisi denmektedir. Dişin canlılığını koruduğu durumlarda uygulanan lokal anestezilerde tedavi öncesi hastamız kanal tedavisine hazır hale getirilir.Dişin içinde bulunan pulpa dokusu özel el aletleriyle çıkarılır. Çeşitli kimyasal solüsyonların yardımıyla dişin iç kısmı artıklardan ve bakterilerden arındırılmaya çalışılır. Dokuyla uyumlu malzemelerle kök kanalları sızdırmaz bir biçimde kapatılır. Dişin iç kısmında iltihabi durumların olduğu vakalarda kanallar doldurulmadan önce pansuman yapılabilinir.",
                            header2: "Kanal tedavisi yapılan dişlerin ömrü nedir?",
                            info2:
                                "Kanal tedavisi sonrası herhangi bir dişinizden farklı bir ömrü olmayacaktır. Uygun tedaviler uygun dişlere yapıldıktan sonra ömür boyunca kullanabileceğinizi söyleyebiliriz.",
                            header3: "Dişlerimiz neden ağrır veya enfekte olur?",
                            info3:
                                "Diş çürüğünün ilerlemiş durumlarında diş içerisindeki pulpa dış dünyaya açık hale gelebilir. Soğuk, sıcak veya asitli uyaranlar canlılığını devam ettiren diş sinirlerini etkileyerek ağrı oluşturabilir. Bazı durumlarda kök uçlarında enfeksiyon basınç oluşturarak ağrıyı başlatabilir. Bunun yanında dişler darbelere maruz kalarak sağlıklarını yitirebilir. Bu darbeler şiddetli ve tek seferde olabileceği gibi küçük ama sürekli de olabilir.",
                            header4: "Kanal tedavisi başarısı nedir?",
                            info4:
                                "Kanal tedavisi ile kansere yakalanma vakaları arasında herhangi bir ilişki yoktur.",
                        },
                        prostheticMethods: {
                            header1: "Protez tedavi nedir?",
                            info1:
                                "Protez Diş Tedavisi, ağızdaki eksik diş sayısına ve yerlerine göre, bu eksiklikleri gidererek, ağız bütünlüğünü kazandıran, yalnızca estetik değil aynı zamanda çiğneme fonksiyonları, konuşurken sesleri düzgün çıkarabilme ve dişsizlikten kaynaklanan psikolojik problemleri de ortadan kaldırmayı hedefleyen diş hekimliğinin önemli ve büyük dallarından biridir. Protetik Diş Tedavisi, çoğunlukla tedaviye geç kalan hastalara uygulanır. Böylece kaybedilen diş ya da dişler farklı protez türleri ile geri kazanılabilir. Protetik tedavi yöntemleri, fonksiyon ve estetik anlamında kişinin kendisini daha iyi hissetmesini sağlar. Kişiye çiğneme ve konuşma fonksiyonu geri kazandırılırken, rahatlık ve estetik açıdan da kişinin kendini iyi hissetmesi sağlanır.",
                            info2:
                                "Temel olarak protetik diş tedavileri ile kaybedilen dişin yerine farklı protez türleri uygulanır. Protez tedavileri, protez uzmanı olarak tanımlanan prostodontist hekimler tarafından uygulanır. Protetik diş tedavisi uzmanı olarak da adlandırılan bu hekimler, ağız içi sabit ve hareketli protez uygulamalarının yanı sıra kanal tedavisi sonrasında dişin porselen kuronlarla desteklenmesi ile de uğraşır. Günümüzde estetik diş hekimliği olarak da tanımlanan protetik diş tedavileri bilimi, zaman zaman ortodonti gibi diğer diş hekimliği uzmanlıkları ile multidisipliner bir yaklaşımla çalışır. Protez uzmanları ya da diğer adıyla prostodontistler, temel olarak zarar görmüş ya da kaybedilmiş dişin, protez uygulamaları ile yerine koyulması ile uğraşır. Bu noktada tercih edilecek protezin hastanın ihtiyacına göre belirlenmesi ve protezin doğal dişler ile aynı boy ve renkte olması önemlidir. Var olan doku yerine protez dişin kullanılması nedeniyle protetik diş tedavileri sıklıkla estetik diş tedavisi olarak da bilinir. Bu noktada estetik görünüm çok önemli olsa da protetik diş tedavisinde esas olan kişinin çiğneme ve konuşma becerilerinin geri kazanılmasıdır.",
                            info3:
                                "Estetik olması için yapılan yanlış uygulamalara bağlı olarak kişinin konuşması sırasında bazı seslerin çıkmaması ya da yanakların ısırılması gibi istenmeyen sonuçlar ortaya çıkabilir. Dolayısıyla kaybedilen diş, protez uygulamaları ile geri kazanılırken işlevsellik başta olmak üzere estetik kaygılar da giderilir. Dişlerin tamamının kaybedildiği vakalarda ise total protez uygulamaları yine protetik diş uzmanları tarafından uygulanır.",
                        },
                        zirconiumCoating: {
                            header1: "Zirkonyum kaplama nedir ?",
                            info1:
                                "Dişlerinde oluşan lekeler sonucunda kişiler zirkonyum kaplama tercih etmektedir. Bu kaplamalar ise porselen kaplama olarakta bilinmektedir. Ayrıca zirkonyum kaplamalar, metal destekli yahut metal desteksiz olarakta ikiye ayrılmaktadır. Çoğunlukla doktor önerisi ile yapılan bu yöntem ise şahıslar tarafından da sıklıkla tercih edilmektedir. Dişlere beyazlık sağlayan bu kaplama aynı zamanda diş ve diş eti sağlığında da katkısı bulunmaktadır",
                            header2: "Zirkonyum kaplama nasıl yapılır ?",
                            info2:
                                "İlk öncelikle dişlerin ölçüsü dijital bir ortamda alınmaktadır. Ardından diş rengi, diş kaplamasının boyutları, diş sayısı ve yüze uyumu gibi teknik işlemlerde kontrol edilir. Zirkonyum kaplamalar hazır olduktan sonra hastaya gösterilir. Hastanın beğenmesi durumunda tamamiyle zirkonyum kaplama işlemi başlatılmaktadır. Zirkonyum kaplama işlemleri 4 veya 5 gün gibi bir süre içerisinde bitmektedir. Bu süre doktorun yoğunluğuma görede değişebilmektedir. Diş işlemleri ise yüzeylerinde bulunan fazlalıkların törpülenmesi ile başlamaktadır. Törpüleme sonrasında doktor zirkonyumu dişe şeffaf ve özel bir yapıştırıcı eşliği ile dişe yapıştırır.",
                            header3: "Zirkonyum kaplama avantajları",
                            info3:
                                "Zirkonyum kaplama sadece estetik bir gülüşle kalmayıp birçok avantaj sunmaktadır. Zirkonyum kaplama avantajları ise şu şekilde sıralanabilmektedir;",
                            l1: "Yapısı gereği diş etlerinde koyu bir renk bırakmamaktadır. Bu nedenle ileriki yaşlarda takacağınız metal kaplamalı dişler siyah renk yansımasıda yapmaz.",
                            l2: "Zirkonyum yapısı gereği ışığı içeri geçirerek kendi dişlerinizi de eski görüntüsüne getirebilme avantajı da sunmaktadır.",
                            l3: "Bakımı yapılması durumunda uzun yıllarca kullanılmaktadır.",
                            l4: "Zirkonyum diş etlerine uyum göstererek, diş et sağlığınızda da büyük rol oynamaktadır.",
                            l5: "Zirkonyum kullanan kişilerin dişlerinde sıcak ve soğuk hassasiyet olmaz.",
                            l6: "Sigara içen kişilerin dişlerinde, diş lekeleri ve diş sararmasının oluşmasında minimuma indirmektedir.",
                            l7: "Ağız kokusunuda minimuma indirmektedir.",
                        },
                        laminateCoating: {
                            header1: "Laminat kaplama nedir?",
                            info1:
                                "Görünüşünüzü olumsuz yönde etkileyen bir çok diş bozukluklarında mükemmel bir kozmetik çözümdür. Laminat kaplamalarda temel olarak estetik sorunları olan ön dişlerde, porselenden hazırlanan tabakanın dişlerin ön yüzlerine yapıştırılmasıyla bu sorunların giderilmesini amaçlayan bir tedavi şeklidir. Çoğu durumda sağlam yapıları ve bozulmayan renkleriyle dişlere doğal bir güzellikle birlikte, doğal bir işlev kazandırmak için yeterlidirler. Laminat kaplamalarla kendinizden emin bir şekilde gülümseyebilirsiniz! Porselenden imal edilen bu kaplamalar ince, yarı geçirgen bir tabakadır. Mevcut bir diş üzerine mükemmel bir uyum ve hassasiyetle hazırlanıp yerleştirilirler. Dişin ön yüzü ile kaplamanın iç yüzü özel bir rezinle (yapıştırıcı bir ara madde) yapıştırılır. İşlem bittiğinde mükemmel bir kaynaşma beklenir.",
                            header2: "Hangi durumlarda laminat tedavisine başvurulur?",
                            info2:
                                "Laminat vener kaplamalar temel olarak, renk değişikliklerinin giderilmesi ve belli bir dereceye kadar şekil düzeltilmesi amacıyla yapılabilirler. Başlıca uygulama alanları şu şekilde özetlenebilir:",
                            l1: "Renklenmelerde, bleaching (diş beyazlatma) gibi metotlarla sonuç alınmayan ileri derecedeki antibiyotik, flor vb. lekelerinde kalıtsal yapı ve renk bozukluklarında.",
                            l2: "Ayrık dişleri bitiştirmede (diastema kapama).",
                            l3: "Kırık veya aşınmış dişlerin restorasyonunda.",
                            l4: "Rengi ve yapısı bozulmuş eski dolguların düzeltilmesinde.",
                            l5: "Çapraşık ve eğri dişlerin düzeltilmesinde (ortodontik tedavi alternatifi olarak).",
                            header3: "Laminat tedavisinden kimler yararlanabilir?",
                            info3:
                                "Yukarıdaki sebeplerden dolayı şikayetçi olan her yaş grubundaki kişiler laminat tedavisinden yararlanabilir. Ancak, çene bozuklukları, tırnak yeme, kalem ısırma gibi kötü alışkanlıklar ileri derecede dişeti tahribatlarının mevcut olduğu durumlarda uygulanmaz. Buna en iyi karar verecek olan dişhekiminizdir.",
                        },
                    },
                    galleryPage: {
                        header: 'Galeri'
                    },
                    aboutPage: {
                        header: 'Diş hekimi Mustafa Akyılmaz kimdir ?',
                        whoAmI: `1975 Mersin doğumluyum. İlk ve ortaoğretimi Mersin'de okudum. 1993 yılında Özel Toros Koleji'nden mezun oldum ve Gazi Üniversitesi Diş Hekimligi Fakültesi’ni kazandım. 1999 yılında fakültemi bitirerek askeri görevimi yaptım. 2000 yılından itibaren aktif olarak Erdemli'deki muayenehanemde çalışmaktayım. Evli ve 3 kız çocuk babasıyım.`
                    },
                    faqPage: {
                        header: "Sıkça Sorulan Sorular",
                        questions: {
                            q1: "Diş etlerinin fırçalanması neden önemlidir?",
                            q2: "Diş çekimi sonrası sigara içilir mi?",
                            q3: "Diyabetli kişi implant yaptırabilir mi ?",
                            q4: "Dişlerde neden hassasiyet oluşur?",
                            q5: "Diş çürüğü nedir? Diş çürüklerini önlemek için ne yapmak gerekir?",
                            q6: "Apse nedir?",
                            q7: "Süt dişlerinin önemi nedir?",
                            q8: "Çocuklarda çürük oluşumu engellenebilir mi?",
                            q9: "Laminalar sararır mı?",
                            q10: "İmplantların uzun ömürlü olabilmesi nelere bağlıdır?",
                        },
                        answers: {
                            a1: "Yapılması gereken başka bir işlem de diş etlerini fırçalamaktır. Diş etlerinin kanama şikayeti olsa bile fırçalamaya devam edilmelidir, çünkü diş etlerini besleyen damarlar dolaşım bozukluğu sonucunda dolgunlaşmıştır. Buna tıp dilinde “konjestiyon” denir. Tedavi etmek için kılcal damarları açmak yani fırça yapmak gerekecektir. Böylece diş etinin damarları iyileşir ve kanama da kendiliğinden durur. Diş etinin fırçalanması, diş eti hastalıklarından korunmanın en etkin çarelerindendir.",
                            a2: "Elbette diş çekimi sonrasında kesinlikle sigara içmemek gerekiyor. Özellikle diş çekimini takiben ilk 24 saat içerisinde sigara içilmesi ciddi iltihaplanmalara yol açabilir. Bununla birlikte sigaranın yaraların iyileşmesini de sıkıntıya soktuğunu unutmamak gerekiyor. İyileşme sürecine zarar verebilir ve diş çekiminden sonra yaşanan ağrının artmasına da yol açabilir.",
                            a3: "Diyabetli kişi implant yaptırmak istediğinde öncelikle diş hekimi tarafından bir sağlık kuruluşuna yönlendirilir. Kanında ki hba1c miktarı ve hastanın genel durumu diş hekimi tarafından değerlendirilir. Sonuç uygun görülürse implant tedavisine başlanır.",
                            a4: "Diş eti çekilmesi hassasiyete yol açan en önemli nedenlerden birisidirç Bunun yanı sıra dişleri sıcak, soğuk, ekşi ve tatlı gibi dış etkilerden mine tabakası korur. Erozyon, abrazyon veya çürüğe bağlı olarak mine kaybedilmiş ise iç tabaka olan hassas dentin tabakası açığa çıkar. Dentinde uyaranları ileten sinir uçları bulunur ve bu nedenle hassasiyet hissedilir.",
                            a5: "Diş çürüğü, yiyip içtiğimiz besinlerin dişlerimizde bıraktığı artıklar olarak tanımlayabileceğimiz maddelerin ağız içindeki bakterilerin üremesine uygun bir ortam oluşturması ve uzaklaştırılmayan bu maddelerin desteklediği bakteriyel faaliyet sonucu dişlerde madde kaybı meydana gelmesidir. Özellikle şekerli ve yapışkan gıdalar bu tabloya sebep olmaktadır. Yapılması gereken bu tür gıdaların tüketiminden veya öğünlerden sonra mümkün olamıyorsa günde en az iki kere dişlerin fırçalanmasıdır. Diş ip ve gargara kullanımı da ağız içi hijyeni iyileştirmeye ciddi katkı sağlar.",
                            a6: "Apse oluşumu, diş çürüğünün ilerleyen safhalarında dişin sinirinin bulunduğu kanaldan kök ucuna hatta kemiğe kadar ilerleyip bu alanda iltihap oluşumuna sebep olmasıdır. Akut (alevli) safhada çene kemiği ve dişin içinde iltihabın sıkışmasıyla yoğun ağrı yaşanabilir. Müdahale edilmezse sonrasında iltihap kendine fistül adını verdiğimiz bir çıkış yolu oluşturur ve ağız içine akar ve genelde ağrı kesilir. Bu dönemde de yine kanal tedavisi veya dişin çekimi şeklinde bir müdahale ile iltihabın uzaklaştırılması gereklidir.",
                            a7: "Süt dişleri, ilerde yerlerine gelecek olan sürekli dişlere rehberlik ederler. Bu anlamda sağlıklı olmaları zamanından önce çekilmemeleri sürekli dişlenme açısından da oldukça önemlidir. Süt dişleri çekilmek zorundaysa diş hekiminiz yer tutucu önerecektir.",
                            a8: "Çocuklarda çürük oluşumunun engellenmesi için yapılması gereken en önemli şey diş fırçalama alışkanlığının kazandırılması, çocuğun yapışkan ve şekerli gıdalardan mümkün olduğunca uzak tutulmasıdır.",
                            a9: "Porselen lamina camsı bir yapı olması nedeniyle leke tutmayan bir özelliğe sahiptir. Çay, kahve sigara kullanımında aşırıya kaçılmadığı ve ağız bakımına dikkat edildiği taktirde sararma göstermeyeceklerdir.",
                            a10: "İmplantlar da, dişler gibi dişeti ve kemik ile ilişkidedir ve bu yapılarda oluşabilecek rahatsızlıklar implantları etkileyebilmektedir. İyi bir ağız bakımı yapılamadığında, implantların çevresindeki dişeti iltihaplanarak doğal dişe benzer şekilde dişeti hastalıklarının oluşmasına ve implantların kaybedilmesine varan sorunlara neden olabilir. Doğal dişlere olduğu gibi, implantların çevresine de doğru bir ağız bakımı uygulayıp, rutin kontrollere gittiğinizde; implantlarınızı uzun bir süre sağlıklı bir şekilde kullanabilirsiniz."
                        },
                    },
                    contactPage: {
                        name: "İsim",
                        email: "Email",
                        message: "Mesaj",
                        submitBtn: "Gönder",
                        addressHeader: "Adres",
                        address1: "Merkez Mahallesi, Kamil Başaran Sokak, M.Çelikel Apt. ,",
                        address2: "A Blok, No: 2, Daire: 7, 33730 Erdemli / Mersin",
                        phoneHeader: "Telefon",
                    },
                    footer: {
                        copyright: "Copyright © 3rd Wave 2022. Tüm hakları saklıdır."
                    }
                },
            },
            en: {
                translation: {
                    header: {
                        home: "Home",
                        treatments: "Treatments",
                        gallery: "Gallery",
                        about: "About",
                        faq: "FAQ",
                        contact: "Contact",
                        language:{
                            en:"EN 🇬🇧",
                            tr:"TR 🇹🇷"
                        }
                    },
                    homePage: {
                        welcomeTitle: {
                            word1: "Your",
                            word2: "smile",
                            word3: "is important",
                            word4: "for us.",
                        },
                        welcomeButton: {
                            text: `Let's Start`,
                        },
                        treatmentsSection: {
                            treHeader: "Treatments",
                            tre1: "Teeth Whitening",
                            tre2: "Teeth Fillings",
                            tre3: "Tooth Pulling",
                            tre4: "Implant Methods",
                            tre5: "Root Canal Treatments",
                            tre6: "Prosthetic Treatments",
                            more: "More",
                        },
                        photoGallerySection: {
                            header: "Photo Gallery",
                            word1: "We are waiting for your",
                            word2: "beautiful",
                            word3: "smile.",
                        },
                        faqSection: {
                            header: {
                                word1: "F",
                                word2: "requently",
                                word3: "A",
                                word4: "sked",
                                word5: "Q",
                                word6: "uestions",
                            },
                            button: {
                                more: "More",
                            },
                            accordion: {
                                questions: {
                                    q1: "Is teeth whitening harmful to teeth?",
                                    q2: "Are laminates long-lasting? Is it durable?",
                                    q3: "How should teeth be brushed?",
                                    q4: "Will there be pain after root canal treatment?",
                                },
                                answers: {
                                    a1: "For many individuals, it is important that the teeth appear white as well as the form and symmetry of the teeth and surrounding structures in perceiving the smile as beautiful. Teeth whitening is not harmful as long as it is under the control of the physician, but tooth sensitivity that does not last longer than 1 week at the end of the treatment can be seen and patients who have the potential to color the teeth for 2 weeks after the treatment; coffee, wine, cigarettes should be avoided as much as possible.",
                                    a2: "Laminates can be used for years without any problems with good oral care. Because they are made of porcelain with superior properties than other adhesive systems (bonding). They are more resistant to staining and abrasion. In order to prolong their life, it is necessary to pay attention to oral care. In addition, it is necessary to avoid bad habits such as biting very hard foods and biting nails.",
                                    a3: "The most effective way to protect our teeth is to brush regularly. Tooth brushing should take an average of 2 minutes, and each tooth should be brushed 8-10 times. When brushing teeth, especially the tooth-gingival junction should be brushed. The aim is to remove food residues and bacterial plaque on the tooth surface.",
                                    a4: "You may have mild pain for a few days after the treatment. However, this is not permanent.",
                                },
                            },
                        },
                        workingDaysAndHours: {
                            header: "Working Hours",
                            day1: "Monday",
                            day2: "Tuesday",
                            day3: "Wednesday",
                            day4: "Thursday",
                            day5: "Friday",
                        },
                    },
                    treatmentsPage: {
                        header: "Treatments",
                        banner: {
                            slogan1: "Specialist Dentist",
                            slogan2: "Quality Equipments",
                            slogan3: "Comfortable Treatment",
                        },
                        sideMenu: {
                            m1: "Teeth Whitening",
                            m2: "Teeth Fillings",
                            m3: "Tooth Pulling",
                            m4: "Implant Methods",
                            m5: "Root Canal Treatments",
                            m6: "Prosthetic Treatments",
                            m7: "Zirconium Coating",
                            m8: "Laminate Coating",
                        },
                        teethWhitening: {
                            header: "What is teeth whitening?",
                            info1:
                                "Teeth whitening in modern societies, individuals care about the appearance of their teeth, and even shape and color disorders in the teeth can cause problems up to psychological disorders. With the development of aesthetic and restorative materials in dentistry, many color, shape and position disorders can be easily resolved. Bleaching of discolored teeth is cheaper, more practical and harmless compared to other restorative methods. How is the teeth whitening process done? Whitening is the process of removing the discoloration that occurs in the structure of the teeth (enamel and dentin layer). There are two different whitening methods currently known. The first of these is a method that the patient can apply on his own, the stages are as follows:",
                            l1: "Having the dentist take measurements from the mouth and prepare thin rubber molds that you can put on your teeth,",
                            l2: "The patient places a medicine in a special mold prepared for him and wears this mold on the teeth to be whitened for at least 6 - 8 hours a day (preferably asleep),",
                            l3: "A happier social life with the recovery of self-confidence",
                            l4: "Termination of treatment in an average of 1 – 4 weeks. The second method is whitening performed by a physician in the clinic, which is applied as follows:",
                            l5: "The bleaching drug is placed on the tooth by a physician experienced in this procedure.",
                            l6: "A white light source is kept on the relevant tooth for a certain period of time.",
                            l7: "When the process is finished, the result is immediately observed.",
                            info2: `Although both methods are effective, the choice depends on the degree of discoloration, how quickly the treatment is desired to be terminated, and the physician's opinion.`,
                        },
                        teethFillings: {
                            header1: "What is composite resin ?",
                            info1:
                                "It is a plastic mixture with silicon dioxide particles in it. They are defined as white fillings because they are tooth-colored. Although they were used only in the anterior teeth in the 1960s, with the advanced development of the material, they can be successfully applied to the posterior teeth as a filling material that is resistant to chewing pressures and wears less.",
                            header2: "How are composite fillings made?",
                            info2:
                                "Composite fillings are placed in the prepared cavities layer by layer and each layer is cured with a special light. When this process is finished, composite fillings are shaped and corrected according to the tooth. All these processes take longer than amalgam fillings. But it is at least twice as expensive as amalgam. The duration of the composite fillings in the mouth is 7-10 years, which is close to the life of amalgam. However, in very large fillings, the situation is in favor of amalgam.",
                            header3: "Advantages and disadvantages",
                            info3:
                                "The biggest advantage of these fillings is that they are aesthetic. In addition, since these fillings are well bonded to the teeth, they support the dental tissues, prevent breakage and heat transfer. Composites can be used not only to restore caries, but also for cosmetic effects by changing the color and shape of teeth. The most important disadvantage is post-process sensitivities. The colors of the fillings can also change slightly with coloring foods such as coffee and tea.",
                            header4: "Warnings to the patient after composite restorations",
                            info4:
                                "Polishing can now be done in the same session on composites. However, in very large restorations or serial restorations made for multiple teeth, it will be much better to call the patient for a check-up once again and make the necessary corrections, if any, both in terms of aesthetics and function. With these materials, very large losses in the anterior teeth can be restored, so it should be explained that being careful in biting will prolong the life of these restorations. What needs more attention in restored teeth is to recommend toothbrushes that are not too hard to the patient and to enable them to make corrections in brushing methods. These recommendations are also valid for wide facial restorations.",
                        },
                        teethPullings: {
                            header1:
                                "What is tooth extraction? How is it done? Does it hurt?",
                            info1: `Tooth extraction is a preferred solution when there is a problem and it seems unlikely to save the tooth. We can say that tooth extraction is preferred as a last resort for dentists. In cases where it is not possible to save the tooth, evacuation of the tooth from the mouth without damaging the surrounding tissues is called tooth extraction. In this process, the tooth is removed from its socket in the bone, called a socket, with the help of medical calages. We will touch on all the issues that are curious about the subject, such as how long the tooth extraction lasts and whether it is painful or not. First, let's take a closer look at how this is done.`,
                            header2: "How is tooth extraction done?",
                            info2: `First of all, let us state that tooth extraction is an intervention that should be done by dentists or maxillofacial surgeons. Before the extraction of the tooth, local anesthesia is performed to numb this area. Anesthesia drug is delivered to the area by injection method. In a very short time, numbness occurs and then the procedure can be started. During the procedure, the tooth is displaced with a medical device called a dental elevator. The tooth is then firmly grasped using a dagger.`,
                            info3: `Afterwards, the tooth should be moved slightly to loosen it from its ligaments. It is separated from the tooth ligaments by slight movements in the forward and backward directions, and thus the tooth extraction process is easily performed. Only in some cases, it may be possible to partially evacuate the tooth from the mouth. Apart from that, most of the time the tooth is extracted in one piece. Slight bleeding after tooth extraction is expected. We should also point out that this light bleeding is necessary. Often, a blood clot forms in the hollow part that remains after extraction. Because after tooth extraction, this blood clot must occur in order for the healing to begin. It is also possible to place a socket in this area by the dentist.`,
                        },
                        implantMethods: {
                            header1: "What is an implant?",
                            info1: `Implant refers to inanimate substances placed in the body and living tissues. (Dental) implants (dental implants) are generally titanium-based screw or root-shaped structures that are placed in a slot opened in the jawbones to restore the function and aesthetics of missing or a few teeth. The union between dental implant and living bone tissue is called osseintegration.`,
                            header2: "Osseintegration",
                            info2:
                                "It is the direct contact between the living bone tissue and the functioning titanium implant material, observed under the light microscope at 100 magnification. This phenomenon is Prof.Dr.Per-Ingvar Branemark of the University of Gothenburg et al. developed and described by During an experiment on microcirculation in 1955, Branemark accidentally detected the direct connection between titanium and bone. Taking advantage of this situation, he designed implants to support dentures in edentulous jaws. Until 1965, he conducted various animal experiments, design studies and biomechanical experiments for ten years, and in 1965 he first applied on humans. The report of these preliminary studies was published in the Scandinavian Journal of Dentistry in 1969; The results of the 15-year follow-up were published in the Scandinavian Journal of Dentistry in 1977, and the results of the ongoing study were published in the International Journal of Oral Surgery in 1981 and announced to the medical world. After this publication, dental implant applications, which had been accused of quackery and lack of scientific infrastructure until that day, were started in the USA. It has been accepted by prestigious universities in Europe and has become widespread rapidly and has taken its place among dental practices.",
                            header3: "Dental implant",
                            info3:
                                "Dental implants are objects made of titanium and its alloys, usually in the form of roots or screws, which are placed in the jawbones with an atraumatic surgical technique to compensate for missing teeth that have an indication for extraction and lost due to trauma, caries, endodontic or periodontal pathologies. The fusion of dental implants to the bone is called osseointegration.",
                            header4: "History",
                            info4:
                                "According to archaeological findings, the first applications that fit the definition of implant and made to compensate for missing teeth belong to the Maya civilization (6th century BC). The first patented dental implant was the irridio-platinum implant designed by Greenfield in the USA in 1908. In 1939, Strock introduced the chromium-cobalt dental implant. Lubit and Rappaport developed screw or cage-shaped implants made of vitalium in 1949. Cherchève has developed applications such as double spiral threaded implant design and post-milling screw-tapping, putting the implant into function with a double-stage surgical technique. Until the middle of the last century, dentists such as Formiggini, Peron, Tramonte, Benoit, Jeanneret, Muratori, Linkow made similar applications to the implants used today. However, all of these approaches and efforts remained empirical applications and studies that did not go beyond case reports. Subperiosteal implants were introduced in the 1940s. By the 1960s, blade (plate, plate) design implants developed by Linkow emerged.",
                        },
                        rootCanalTreatments: {
                            header1: "What is root canal treatment?",
                            info1:
                                "The treatments applied to solve the diseases caused by the disease of the pulp tissue in the inner part of the tooth are called root canal treatment. In local anesthesia applied in cases where the tooth maintains its vitality, our patient is prepared for root canal treatment before the treatment. The pulp tissue inside the tooth is removed with special hand tools. With the help of various chemical solutions, the inner part of the tooth is tried to be purified from residues and bacteria. Root canals are sealed with tissue compatible materials. In cases where there are inflammatory conditions in the inner part of the tooth, dressing can be done before the canals are filled.",
                            header2: "What is the lifespan of root canal treated teeth?",
                            info2:
                                "After root canal treatment, it will not have a different life than any of your teeth. We can say that you can use it for a lifetime after the appropriate treatments are applied to the appropriate teeth.",
                            header3: "Why do our teeth hurt or become infected?",
                            info3:
                                "In advanced cases of dental caries, the pulp inside the tooth may become open to the outside world. Cold, hot or acidic stimuli may cause pain by affecting the dental nerves that maintain their vitality. In some cases, infection at the root tips can create pressure and initiate pain. In addition, teeth can lose their health by being exposed to impacts. These blows can be severe and single-shot, or they can be small but continuous.",
                            header4: "What is the success of root canal treatment?",
                            info4:
                                "There is no relationship between root canal treatment and cancer cases.",
                        },
                        prostheticMethods: {
                            header1: "What is prosthetic treatment?",
                            info1:
                                "Prosthetic Dentistry is one of the important and big branches of dentistry, which aims to restore oral integrity by eliminating these deficiencies according to the number and location of missing teeth in the mouth, aiming not only aesthetics but also chewing functions, speaking properly and eliminating psychological problems caused by toothlessness. is one. Prosthetic Dentistry is mostly applied to patients who are late for treatment. Thus, the lost tooth or teeth can be regained with different types of prosthesis. Prosthetic treatment methods make the person feel better in terms of function and aesthetics. While the chewing and speaking function is restored to the person, it is ensured that the person feels good in terms of comfort and aesthetics.",
                            info2:
                                "Basically, different types of prosthesis are applied to replace the lost tooth with prosthetic dental treatments. Prosthesis treatments are applied by prosthodontist physicians, who are defined as prosthodontists. These dentists, also called prosthodontists, deal with fixed and removable prosthesis applications in the mouth, as well as supporting the tooth with porcelain crowns after root canal treatment. Today, the science of prosthetic dentistry, which is also defined as aesthetic dentistry, sometimes works with other dentistry specialties such as orthodontics in a multidisciplinary approach. Prosthodontists, or prosthodontists, basically deal with replacing the damaged or lost tooth with prosthesis applications. At this point, it is important that the prosthesis to be preferred is determined according to the needs of the patient and that the prosthesis is the same size and color as the natural teeth. Prosthetic dental treatments are often also known as aesthetic dental treatment, due to the use of prosthetic teeth instead of existing tissue. At this point, although the aesthetic appearance is very important, the main thing in the treatment of prosthetic teeth is to regain the chewing and speaking skills of the person.",
                            info3: `Depending on the wrong applications made for aesthetics, undesirable results such as the absence of some sounds during the person's speech or the biting of the cheeks may occur. Therefore, while the lost tooth is regained with prosthesis applications, aesthetic concerns, especially functionality, are eliminated. In cases where all teeth are lost, total dentures are applied by prosthetic dentists.`,
                        },
                        zirconiumCoating: {
                            header1: "What is zirconium coating?",
                            info1:
                                "As a result of the stains on their teeth, people prefer zirconium coating. These coatings are also known as porcelain coatings. In addition, zirconium coatings are divided into two as metal-supported or metal-free. This method, which is mostly done with the recommendation of a doctor, is also frequently preferred by individuals. This coating, which provides whiteness to the teeth, also contributes to the health of teeth and gums.",
                            header2: "How is zirconium veneer made?",
                            info2:
                                "First of all, the size of the teeth is taken in a digital environment. Then, the tooth color is checked in technical procedures such as the dimensions of the tooth coating, the number of teeth and its fit to the face. After the zirconium crowns are ready, they are shown to the patient. If the patient likes it, the zirconium coating process is started. Zirconium coating processes are completed in a period of 4 or 5 days. This period may vary depending on the intensity of the doctor. Tooth processes begin with rasping the excess on their surfaces. After filing, the doctor adheres the zirconium to the tooth with a transparent and special adhesive.",
                            header3: "Zirconium veneer advantages",
                            info3:
                                "Zirconium coating not only provides an aesthetic smile but also offers many advantages. The advantages of zirconium coating can be listed as follows;",
                            l1: "Due to its structure, it does not leave a dark color on the gums. For this reason, metal-coated teeth that you will wear in the future will not reflect black color.",
                            l2: "Due to its structure, zirconium also offers the advantage of bringing your own teeth to their old appearance by passing the light inside.",
                            l3: "It can be used for many years if taken care of.",
                            l4: "Zirconium plays a big role in your gum health by adapting to the gums.",
                            l5: "People who use zirconium do not have hot and cold sensitivity in their teeth.",
                            l6: "It minimizes the formation of tooth stains and yellowing on the teeth of smokers.",
                            l7: "It also minimizes bad breath.",
                        },
                        laminateCoating: {
                            header1: "What is laminate flooring?",
                            info1:
                                "It is an excellent cosmetic solution for many dental disorders that negatively affect your appearance. It is a form of treatment that aims to eliminate these problems by sticking the layer prepared from porcelain on the anterior teeth, which basically have aesthetic problems in laminate veneers. In most cases, they are sufficient to give the teeth a natural beauty and a natural function with their solid structure and pristine color. You can smile confidently with laminate floors! These veneers made of porcelain are a thin, semi-permeable layer. They are prepared and placed on an existing tooth with perfect fit and precision. The front of the tooth and the inside of the veneer are bonded with a special resin (an adhesive intermediate). When the process is finished, a perfect fusion is expected.",
                            header2: "In which cases is laminate treatment applied?",
                            info2:
                                "Laminate veneers can be made primarily for the purpose of removing color changes and correcting the shape to a certain extent. The main application areas can be summarized as follows:",
                            l1: "In discoloration, advanced antibiotics, fluorine, etc., which do not produce results with methods such as bleaching (teeth whitening). in hereditary structure and color disorders in stains.",
                            l2: "Conjoining split teeth (diastema closure).",
                            l3: "In the restoration of broken or worn teeth.",
                            l4: "In the correction of old fillings whose color and structure have deteriorated.",
                            l5: "Correction of crooked and crooked teeth (as an alternative to orthodontic treatment).",
                            header3: "Who can benefit from laminate treatment?",
                            info3:
                                "People of all age groups who complain about the above reasons can benefit from laminate treatment. However, bad habits such as jaw disorders, nail biting, pen biting are not applied in cases where there is severe gingival damage. Your dentist will decide this best.",
                        },
                    },
                    galleryPage: {
                        header: 'Gallery'
                    },
                    aboutPage: {
                        header: 'Who is dentist Mustafa Akyılmaz?',
                        whoAmI: 'I was born in 1975 in Mersin. I had my primary and secondary education in Mersin. I graduated from Private Toros College in 1993 and won Gazi University Faculty of Dentistry. I finished my faculty in 1999 and did my military duty. I have been working actively in my clinic in Erdemli since 2000. I am married and have 3 daughters.'
                    },
                    faqPage: {
                        header: "Frequently Asked Questions",
                        questions: {
                            q1: "Why is brushing the gingivas important?",
                            q2: "Is it possible to smoke after tooth extraction?",
                            q3: "Can a person with diabetes have an implant?",
                            q4: "Why does sensitivity occur in teeth?",
                            q5: "What is tooth decay? What should be done to prevent tooth decay?",
                            q6: "What is an abscess?",
                            q7: "What is the importance of milk teeth?",
                            q8: "Can cavities be prevented in children?",
                            q9: "Do laminates turn yellow?",
                            q10: "What does the longevity of implants depend on?",
                        },
                        answers: {
                            a1: `Another thing that needs to be done is brushing the gingivas. Brushing should be continued even if there is a complaint of bleeding gingivas, because the vessels feeding the gingivas have become fuller as a result of circulation disorder. This is called "congestion" in medical language. To treat it, it will be necessary to open the capillaries, that is, to brush. Thus, the vessels of the gingiva heal and the bleeding stops by itself. Brushing the gingivas is one of the most effective ways to prevent gum disease.`,
                            a2: "Of course, it is absolutely necessary not to smoke after tooth extraction. Especially in the first 24 hours after tooth extraction, smoking can cause serious inflammation. However, it should not be forgotten that smoking also makes the healing of wounds difficult. It can harm the healing process and can also lead to increased pain experienced after tooth extraction.",
                            a3: "When a person with diabetes wants to have an implant, they are first directed to a health institution by the dentist. The amount of hba1c in the blood and the general condition of the patient are evaluated by the dentist. If the result is deemed appropriate, implant treatment is started.",
                            a4: "Gingival recession is one of the most important causes of sensitivity. In addition, the enamel layer protects the teeth from external effects such as hot, cold, sour and sweet. If the enamel is lost due to erosion, abrasion or caries, the inner layer of sensitive dentin is exposed. Dentin has nerve endings that transmit stimuli and therefore sensitivity is felt.",
                            a5: "Dental caries is the formation of a suitable environment for the growth of bacteria in the mouth, which we can define as the residues left on our teeth by the foods we eat and drink, and the loss of substance in the teeth as a result of the bacterial activity supported by these substances that are not removed. Especially sugary and sticky foods cause this picture. If it is not possible after the consumption of such foods or after meals, it is necessary to brush the teeth at least twice a day. The use of dental floss and mouthwash also contributes significantly to improving oral hygiene.",
                            a6: "Abscess formation is that in the later stages of tooth decay, it progresses from the canal where the tooth's nerve is located to the root tip and even to the bone and causes inflammation in this area. In the acute (flaming) stage, intense pain can be experienced with the compression of inflammation in the jawbone and tooth. If not intervened, then the inflammation creates an outlet that we call fistula and flows into the mouth and usually the pain is relieved. In this period, it is necessary to remove the inflammation with an intervention in the form of root canal treatment or tooth extraction.",
                            a7: "Milk teeth guide the permanent teeth that will come to their place in the future. In this sense, it is very important for them to be healthy and not to be pulled out prematurely in terms of permanent dentition. If milk teeth have to be extracted, your dentist will recommend a placeholder.",
                            a8: "The most important thing to do in order to prevent the formation of caries in children is to gain the habit of brushing teeth, and to keep the child away from sticky and sugary foods as much as possible.",
                            a9: "Porcelain lamina has a stain-proof feature due to its glassy structure. If the use of tea, coffee and cigarettes is not overdone and attention is paid to oral care, they will not show yellowing.",
                            a10: "Implants, like teeth, are in contact with the gingiva and bone, and the disturbances that may occur in these structures can affect the implants. When good oral care is not provided, the gingiva around the implants may become inflamed, causing problems such as the formation of gingival diseases and the loss of implants, similar to natural teeth. As with natural teeth, when you apply the right oral care around the implants and go to routine controls; You can use your implants in a healthy way for a long time."
                        },
                    },
                    contactPage: {
                        name: "Name",
                        email: "Email",
                        message: "Message",
                        submitBtn: "Submit",
                        addressHeader: "Address",
                        address1: "Merkez District, Kamil Basaran Street M.Celikel Apt.",
                        address2: "A Block, No: 2, Flat: 7, 33730 Erdemli / Mersin",
                        phoneHeader: "Phone",
                    },
                    footer: {
                        copyright: "Copyright © 3rd Wave 2022. All rights reserved."
                    }

                },
            },
        },
    });

export default i18n;
