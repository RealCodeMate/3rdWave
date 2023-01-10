import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from 'react-i18next';

function MyAccordion() {
  const { t } = useTranslation();

  const data = [
    { key: 'question-el-1', question: `${t("homePage.faqSection.accordion.questions.q1")}`, answer: `${t("homePage.faqSection.accordion.answers.a1")}` },
    { key: 'question-el-2', question: `${t("homePage.faqSection.accordion.questions.q2")}`, answer: `${t("homePage.faqSection.accordion.answers.a2")}` },
    { key: 'question-el-3', question: `${t("homePage.faqSection.accordion.questions.q3")}`, answer: `${t("homePage.faqSection.accordion.answers.a3")}` },
    { key: 'question-el-4', question: `${t("homePage.faqSection.accordion.questions.q4")}`, answer: `${t("homePage.faqSection.accordion.answers.a4")}` },
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
