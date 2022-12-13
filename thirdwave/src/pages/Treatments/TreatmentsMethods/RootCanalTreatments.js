import react from "react";
import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function RootCanalTreatments() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <h4>{t("treatmentsPage.rootCanalTreatments.header1")}</h4>
        <p>{t("treatmentsPage.rootCanalTreatments.info1")}</p>
        <h4>{t("treatmentsPage.rootCanalTreatments.header2")}</h4>
        <p>{t("treatmentsPage.rootCanalTreatments.info2")}</p>
        <Banner />
        <h4>{t("treatmentsPage.rootCanalTreatments.header3")}</h4>
        <p>{t("treatmentsPage.rootCanalTreatments.info3")}</p>
        <h4>{t("treatmentsPage.rootCanalTreatments.header4")}</h4>
        <p>{t("treatmentsPage.rootCanalTreatments.info4")}</p>
      </p>
    </div>
  );
}
