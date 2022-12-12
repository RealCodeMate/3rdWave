import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            tr: {
                translation: {
                    header: {
                        home: 'Anasayfa',
                        treatments: 'Tedaviler',
                        gallery: 'Galeri',
                        about: 'Hakkımda',
                        faq: 'SSS',
                        contact: 'İletişim'
                    },
                    homePage: {
                        welcomeTitle: {
                            word1: 'Sizin',
                            word2: 'gülüşünüz',
                            word3: 'bizim için',
                            word4: 'önemli.'
                        },
                        welcomeButton: {
                            text: 'Başlayalım'
                        },
                        treatmentsSection: {
                            treHeader: 'Tedaviler',
                            tre1: 'Diş Beyazlatma',
                            tre2: 'Dolgu işlemleri',
                            tre3: 'Diş Çekimleri',
                            tre4: 'İmplant Uygulamaları',
                            tre5: 'Kanal Tedavileri',
                            tre6: 'Protezler',
                            more: 'Devamı'
                        },
                        photoGallerySection: {
                            header: 'Foto Galeri',
                            word1: 'Güzel bir',
                            word2: 'gülümseme',
                            word3: 'için sizleri bekliyoruz.'
                        },
                        faqSection: {
                            header: {
                                word1: 'S',
                                word2: 'ıkça',
                                word3: 'S',
                                word4: 'orulan',
                                word5: 'S',
                                word6: 'orular'
                            },
                            button: {
                                more: 'Daha Fazlası'
                            },
                            accordion: {
                                questions: {
                                    q1: 'Diş beyazlatmanın dişlere zararı var mıdır?',
                                    q2: 'Laminatlar uzun ömürlü müdür? Dayanıklı mıdır?',
                                    q3: 'Dişler nasıl fırçalanmalı?',
                                    q4: 'Kanal tedavisi yapıldıktan sonra ağrı olur mu?',
                                },
                                answers: {
                                    a1: 'Bir çok birey için gülüşün güzel olarak algılanmasında, diş ve çevre yapılarının formu ve simetrisi kadar dişlerin beyaz gözükmeleride önemlidir. Diş beyazlatma işlemi hekim kontrolünde olduğu sürece zararlı değildir ancak tedavi bitiminde 1 haftadan uzun sürmeyen diş hassasiyeti görülebilmektedir ve hastalar tedavi sonrası 2 hafta boyunca dişleri renklendirme potansiyeli olan; kahve, şarap, sigara gibi tüketimlerden mümkün olduğunca kaçınmalıdır.',
                                    a2: 'Laminatlar iyi bir ağız bakımıyla yıllarca sorunsuz olarak kullanılabilirler. Çünkü diğer adeziv sistemlerden (bonding) daha üstün özelliklere sahip porselenden imal edilmişlerdir. Lekelenme ve aşınmaya karşı daha dirençlidirler. Ömürlerini uzatmak için ağız bakımına dikkat etmek gerekir. Ayrıca, çok sert gıdaları ısırmaktan, tırnak yemek gibi kötü alışkanlıklardan kaçınmak gerekir.',
                                    a3: 'Dişlerimizi korumanın en etkili yolu düzenli olarak fırçalamaktır. Diş fırçalama işlemi ortalama 2 dk sürmeli, her dişin üzeri 8-10 kez fırçalanmalıdır. Diş fırçalarken mutlaka diş dişeti birleşim yeri özellikle fırçalanmalıdır. Amaç diş yüzeyindeki yemek artıklarını, bakteri plağını uzaklaştırmaktır.',
                                    a4: 'Tedavi sonrası birkaç gün hafif ağrınız olabilir.Ancak bu durum kalıcı değildir.',
                                }
                            }
                        },
                        workingDaysAndHours: {
                            header: 'Çalışma Saatleri',
                            day1: 'Pazartesi',
                            day2: 'Salı',
                            day3: 'Çarşamba',
                            day4: 'Perşembe',
                            day5: 'Cuma',

                        }

                    },
                    treatmentsPage: {
                        header: 'Tedaviler',
                        banner: {
                            slogan1: 'Uzman Hekim',
                            slogan2: 'Kaliteli Ekipmanlar',
                            slogan3: 'Konforlu Tedavi'
                        },
                        sideMenu: {
                            m1: 'Diş Beyazlatma',
                            m2: 'Dolgu işlemleri',
                            m3: 'Diş Çekimleri',
                            m4: 'İmplant Uygulamaları',
                            m5: 'Kanal Tedavileri',
                            m6: 'Protez Tedavileri',
                            m7: 'Zirkonyum Kaplama',
                            m8: 'Laminat Kaplama'
                        },
                        teethWhitening: {
                            header: 'Diş beyazlatma nedir?',
                            info1: 'Diş beyazlatma modern toplumlarda bireyler dişlerinin görünümünü önemser, hatta dişlerdeki şekil ve renk bozuklukları kişide psikolojik rahatsızlıklara kadar varan problemlere sebep olabilir. Diş hekimliğinde estetik ve restoratif maddelerin gelişmesiyle pek çok renk, şekil, konum bozuklukları kolaylıkla çözümlenebilmektedir. Renklenmiş dişlerin beyazlatılması (bleaching), diğer restoratif metotlara kıyasla daha ucuz, pratik ve zararsızdır. Diş beyazlatma işlemi nasıl yapılır?Beyazlatma dişlerin yapısında (mine ve dentin tabakasında) oluşan renklenmeleri giderme işlemidir. Şu anda bilinen iki değişik beyazlatma yöntemi vardır. Bunlardan ilki hastanın kendi başına uygulayabileceği bir yöntemdir, aşamaları şöyledir:',
                            l1: 'Hekimin ağızdan ölçü alıp, dişlerinizin üzerine takabileceğiniz ince lastik kalıpları hazırlatması,',
                            l2: 'Hastanın kendisi için hazırlanmış özel kalıbın içerisine ilaç yerleştirerek bu kalıbı beyazlatılacak dişlerin üstüne günde en az 6 – 8 saat takması (tercihen uykuda),',
                            l3: 'Özgüvenin geri kazanılması ile daha mutlu bir sosyal hayat',
                            l4: 'Tedavinin ortalama 1 – 4 hafta içinde sonlandırılması. İkinci yöntem ise klinikte bir hekim tarafından yapılan beyazlatmadır ki aşağıdaki şekilde uygulanır:',
                            l5: ' Ağartıcı ilaç bu işlem hakkında deneyimi olan bir hekim tarafından diş üzerine yerleştirilir.',
                            l6: 'İlgili dişin üzerine beyaz renkli ışık kaynağı belli bir süre tutulur.',
                            l7: 'İşlem bittiğinde sonuç hemen gözlenir.',
                            info2: ' Her iki yöntemde etkin olmasına rağmen tercih, renklenmenin derecesine, tedavinin ne kadar çabuk sonlandırılmak istendiğine ve hekimin görüşüne bağlıdır.'

                        }
                    }
                }
            },
            en: {
                translation: {
                    header: {
                        home: 'Home',
                        treatments: 'Treatments',
                        gallery: 'Gallery',
                        about: 'About',
                        faq: 'FAQ',
                        contact: 'Contact'
                    },
                    homePage: {
                        welcomeTitle: {
                            word1: 'Your',
                            word2: 'smile',
                            word3: 'is important',
                            word4: 'for us.'
                        },
                        welcomeButton: {
                            text: `Let's Start`
                        },
                        treatmentsSection: {
                            treHeader: 'Treatments',
                            tre1: 'Teeth Whitening',
                            tre2: 'Teeth Fillings',
                            tre3: 'Tooth Pulling',
                            tre4: 'Implant Methods',
                            tre5: 'Root Canal Treatments',
                            tre6: 'Prosthetic Treatments',
                            more: 'More'
                        },
                        photoGallerySection: {
                            header: 'Photo Gallery',
                            word1: 'We are waiting for your',
                            word2: 'beautiful',
                            word3: 'smile.'
                        },
                        faqSection: {
                            header: {
                                word1: 'F',
                                word2: 'requently',
                                word3: 'A',
                                word4: 'sked',
                                word5: 'Q',
                                word6: 'uestions'
                            },
                            button: {
                                more: 'More'
                            },
                            accordion: {
                                questions: {
                                    q1: 'Is teeth whitening harmful to teeth?',
                                    q2: 'Are laminates long-lasting? Is it durable?',
                                    q3: 'How should teeth be brushed?',
                                    q4: 'Will there be pain after root canal treatment?',
                                },
                                answers: {
                                    a1: 'For many individuals, it is important that the teeth appear white as well as the form and symmetry of the teeth and surrounding structures in perceiving the smile as beautiful. Teeth whitening is not harmful as long as it is under the control of the physician, but tooth sensitivity that does not last longer than 1 week at the end of the treatment can be seen and patients who have the potential to color the teeth for 2 weeks after the treatment; coffee, wine, cigarettes should be avoided as much as possible.',
                                    a2: 'Laminates can be used for years without any problems with good oral care. Because they are made of porcelain with superior properties than other adhesive systems (bonding). They are more resistant to staining and abrasion. In order to prolong their life, it is necessary to pay attention to oral care. In addition, it is necessary to avoid bad habits such as biting very hard foods and biting nails.',
                                    a3: 'The most effective way to protect our teeth is to brush regularly. Tooth brushing should take an average of 2 minutes, and each tooth should be brushed 8-10 times. When brushing teeth, especially the tooth-gingival junction should be brushed. The aim is to remove food residues and bacterial plaque on the tooth surface.',
                                    a4: 'You may have mild pain for a few days after the treatment. However, this is not permanent.',
                                }
                            }
                        },
                        workingDaysAndHours: {
                            header: 'Working Hours',
                            day1: 'Monday',
                            day2: 'Tuesday',
                            day3: 'Wednesday',
                            day4: 'Thursday',
                            day5: 'Friday',

                        }

                    },
                    treatmentsPage: {
                        header: 'Treatments',
                        banner: {
                            slogan1: 'Specialist Dentist',
                            slogan2: 'Quality Equipments',
                            slogan3: 'Comfortable Treatment'
                        },
                        sideMenu: {
                            m1: 'Teeth Whitening',
                            m2: 'Teeth Fillings',
                            m3: 'Tooth Pulling',
                            m4: 'Implant Methods',
                            m5: 'Root Canal Treatments',
                            m6: 'Prosthetic Treatments',
                            m7: 'Zirconium Coating',
                            m8: 'Laminate Coating'
                        },
                        teethWhitening: {
                            header: 'What is teeth whitening?',
                            info1: 'Teeth whitening in modern societies, individuals care about the appearance of their teeth, and even shape and color disorders in the teeth can cause problems up to psychological disorders. With the development of aesthetic and restorative materials in dentistry, many color, shape and position disorders can be easily resolved. Bleaching of discolored teeth is cheaper, more practical and harmless compared to other restorative methods. How is the teeth whitening process done? Whitening is the process of removing the discoloration that occurs in the structure of the teeth (enamel and dentin layer). There are two different whitening methods currently known. The first of these is a method that the patient can apply on his own, the stages are as follows:',
                            l1: 'Having the dentist take measurements from the mouth and prepare thin rubber molds that you can put on your teeth,',
                            l2: 'The patient places a medicine in a special mold prepared for him and wears this mold on the teeth to be whitened for at least 6 - 8 hours a day (preferably asleep),',
                            l3: 'A happier social life with the recovery of self-confidence',
                            l4: 'Termination of treatment in an average of 1 – 4 weeks. The second method is whitening performed by a physician in the clinic, which is applied as follows:',
                            l5: 'The bleaching drug is placed on the tooth by a physician experienced in this procedure.',
                            l6: 'A white light source is kept on the relevant tooth for a certain period of time.',
                            l7: 'When the process is finished, the result is immediately observed.',
                            info2: `Although both methods are effective, the choice depends on the degree of discoloration, how quickly the treatment is desired to be terminated, and the physician's opinion.`

                        }
                    }

                }
            }
        }
    });

export default i18n;