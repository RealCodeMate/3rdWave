import react from "react";
import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function TeethFillings() {
  const { t } = useTranslation();

  return (
    <div>
      <h4>{t("treatmentsPage.laminateCoating.header1")}</h4>
      <p>{t("treatmentsPage.laminateCoating.info1")}</p>
      <br />
      <h4>{t("treatmentsPage.laminateCoating.header2")}</h4>
      <p>{t("treatmentsPage.laminateCoating.info2")}</p>
      <ul>
        <li>{t("treatmentsPage.laminateCoating.l1")}</li>
        <li>{t("treatmentsPage.laminateCoating.l2")}</li>
        <li>{t("treatmentsPage.laminateCoating.l3")}</li>
        <li>{t("treatmentsPage.laminateCoating.l4")}</li>
        <li>{t("treatmentsPage.laminateCoating.l5")}</li>
      </ul>
      <Banner />
      <h4>{t("treatmentsPage.laminateCoating.header3")}</h4>
      <p>{t("treatmentsPage.laminateCoating.info3")}</p>
    </div>
  );
}
