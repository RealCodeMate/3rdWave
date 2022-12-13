import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function MyAccordion() {
    const { t } = useTranslation();
    return (
        <Accordion defaultActiveKey="0" flush>

            <Accordion.Item eventKey="0">
                <Accordion.Header>{t("faqPage.questions.q1")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a1")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>{t("faqPage.questions.q2")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a2")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>{t("faqPage.questions.q3")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a3")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>{t("faqPage.questions.q4")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a4")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>{t("faqPage.questions.q5")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a5")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>{t("faqPage.questions.q6")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a6")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header>{t("faqPage.questions.q7")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a7")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
                <Accordion.Header>{t("faqPage.questions.q8")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a8")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>{t("faqPage.questions.q9")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a9")}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
                <Accordion.Header>{t("faqPage.questions.q10")}</Accordion.Header>
                <Accordion.Body>{t("faqPage.answers.a10")}</Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default MyAccordion;
