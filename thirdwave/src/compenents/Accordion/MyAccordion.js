import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from 'react-i18next';

function MyAccordion() {
  const { t } = useTranslation();

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {t('homePage.faqSection.accordion.questions.q1')}
        </Accordion.Header>
        <Accordion.Body>
        {t('homePage.faqSection.accordion.answers.a1')}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        {t('homePage.faqSection.accordion.questions.q2')}
        </Accordion.Header>
        <Accordion.Body>
        {t('homePage.faqSection.accordion.answers.a2')}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{t('homePage.faqSection.accordion.questions.q3')}</Accordion.Header>
        <Accordion.Body>
        {t('homePage.faqSection.accordion.answers.a3')}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>{t('homePage.faqSection.accordion.questions.q4')}</Accordion.Header>
        <Accordion.Body>
        {t('homePage.faqSection.accordion.answers.a4')}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
