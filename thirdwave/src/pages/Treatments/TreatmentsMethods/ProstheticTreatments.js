import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function ProstheticTreatments() {
  const { t } = useTranslation();
  return (
    <div>
      <h4>{t("treatmentsPage.prostheticMethods.header1")}</h4>
      <p>{t("treatmentsPage.prostheticMethods.info1")}</p>
      <Banner />
      <p>{t("treatmentsPage.prostheticMethods.info2")}</p>
      <p>{t("treatmentsPage.prostheticMethods.info3")}</p>
    </div>
  );
}
