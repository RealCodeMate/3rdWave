import Banner from "../../../compenents/Banner/Banner";
import { useTranslation } from "react-i18next";

export default function ZirconiumCoating() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <h4>{t("treatmentsPage.zirconiumCoating.header1")}</h4>
        {t("treatmentsPage.zirconiumCoating.info1")}
      </p>
      <br />
      <p>
        <h4>{t("treatmentsPage.zirconiumCoating.header2")}</h4>
        {t("treatmentsPage.zirconiumCoating.info2")}
        <Banner />
        <p>
          <h4>{t("treatmentsPage.zirconiumCoating.header3")}</h4>
          {t("treatmentsPage.zirconiumCoating.info3")}
          <ul>
            <li key="zirconium-el-1">{t("treatmentsPage.zirconiumCoating.l1")}</li>
            <li key="zirconium-el-2">{t("treatmentsPage.zirconiumCoating.l2")}</li>
            <li key="zirconium-el-3">{t("treatmentsPage.zirconiumCoating.l3")}</li>
            <li key="zirconium-el-4">{t("treatmentsPage.zirconiumCoating.l4")}</li>
            <li key="zirconium-el-5">{t("treatmentsPage.zirconiumCoating.l5")}</li>
            <li key="zirconium-el-6">{t("treatmentsPage.zirconiumCoating.l6")}</li>
            <li key="zirconium-el-7">{t("treatmentsPage.zirconiumCoating.l7")}</li>
          </ul>
        </p>
      </p>
    </div>
  );
}
