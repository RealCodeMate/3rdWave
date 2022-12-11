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
        fallbackLng: 'en',
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
                        treatmentsSection:{
                            treHeader: 'Tedaviler',
                            tre1:'Diş Beyazlatma',
                            tre2:'Dolgu işlemleri',
                            tre3:'Diş Çekimleri',
                            tre4:'İmplant Uygulamaları',
                            tre5:'Kanal Tedavileri',
                            tre6:'Protezler',
                            more:'Devamı'
                        },
                        photoGallerySection:{
                            header:'Foto Galeri',
                            word1:'Güzel bir',
                            word2:'gülümseme',
                            word3:'için sizleri bekliyoruz.'
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
                        treatmentsSection:{
                            treHeader: 'Treatments',
                            tre1:'Teeth Whitening',
                            tre2:'Teeth Fillings',
                            tre3:'Tooth Pulling',
                            tre4:'Implant Methods',
                            tre5:'Root Canal Treatments',
                            tre6:'Prosthetic Treatments',
                            more:'More'
                        },
                        photoGallerySection:{
                            header:'Photo Gallery',
                            word1:'We are waiting for your',
                            word2:'beautiful',
                            word3:'smile.'
                        }


                    }
                }
            }
        }
    });

export default i18n;