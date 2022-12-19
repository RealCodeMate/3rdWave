import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function MyAccordion() {
    const { t } = useTranslation();

    const data = [
        { key: '0', question: `${t("faqPage.questions.q1")}`, answer: `${t("faqPage.answers.a1")}` },
        { key: '1', question: `${t("faqPage.questions.q2")}`, answer: `${t("faqPage.answers.a2")}` },
        { key: '2', question: `${t("faqPage.questions.q3")}`, answer: `${t("faqPage.answers.a3")}` },
        { key: '3', question: `${t("faqPage.questions.q4")}`, answer: `${t("faqPage.answers.a4")}` },
        { key: '4', question: `${t("faqPage.questions.q5")}`, answer: `${t("faqPage.answers.a5")}` },
        { key: '5', question: `${t("faqPage.questions.q6")}`, answer: `${t("faqPage.answers.a6")}` },
        { key: '6', question: `${t("faqPage.questions.q7")}`, answer: `${t("faqPage.answers.a7")}` },
        { key: '7', question: `${t("faqPage.questions.q8")}`, answer: `${t("faqPage.answers.a8")}` },
        { key: '8', question: `${t("faqPage.questions.q9")}`, answer: `${t("faqPage.answers.a9")}` },
        { key: '9', question: `${t("faqPage.questions.q10")}`, answer: `${t("faqPage.answers.a10")}` },
    ]

    return (
        <Accordion defaultActiveKey="0" flush>
            {data.map(el => {
                return (
                    <Accordion.Item eventKey={el.key}>
                        <Accordion.Header>{el.question}</Accordion.Header>
                        <Accordion.Body>{el.answer}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    );
}

export default MyAccordion;
