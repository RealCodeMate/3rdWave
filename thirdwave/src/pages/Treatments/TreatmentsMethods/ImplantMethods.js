import react from "react";
import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function ImplantMethods() {
  const { t } = useTranslation();

  return (
    <div>
      <p>
        <h4>{t("treatmentsPage.implantMethods.header1")}</h4>
        <p>{t("treatmentsPage.implantMethods.info1")}</p>
        <h4>{t("treatmentsPage.implantMethods.header2")}</h4>
        <p>{t("treatmentsPage.implantMethods.info2")}</p>
        <Banner />
        <h4>{t("treatmentsPage.implantMethods.header3")}</h4>
        <p>{t("treatmentsPage.implantMethods.info3")}</p>
        <h4>{t("treatmentsPage.implantMethods.header4")}</h4>
        <p>{t("treatmentsPage.implantMethods.info4")}</p>
      </p>
    </div>
  );
}
