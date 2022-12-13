import react from "react";
import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function TeethFillings() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <h4>{t("treatmentsPage.teethFillings.header1")}</h4>
        {t("treatmentsPage.teethFillings.info1")}
      </p>
      <br />
      <p>
        <h4>{t("treatmentsPage.teethFillings.header2")}</h4>
        {t("treatmentsPage.teethFillings.info2")}
        <Banner />
        <p>
          <h4>{t("treatmentsPage.teethFillings.header3")}</h4>
          {t("treatmentsPage.teethFillings.info3")}
        </p>
        <h4>{t("treatmentsPage.teethFillings.header4")}</h4>

        {t("treatmentsPage.teethFillings.info4")}
      </p>
    </div>
  );
}
