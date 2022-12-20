import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function ToothPulling() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <h4>{t("treatmentsPage.teethPullings.header1")}</h4>
        <p>{t("treatmentsPage.teethPullings.info1")}</p>
        <h4>{t("treatmentsPage.teethPullings.header2")}</h4>
        <p>{t("treatmentsPage.teethPullings.info2")}</p>
        <p>{t("treatmentsPage.teethPullings.info3")}</p>
        <Banner />
      </p>
    </div>
  );
}
