import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { PageCenter } from "src/components/PageCenter";

export function NotFound() {
  const { t } = useTranslation();

  return <PageCenter>
    <Typography variant="h4">{t("pageNotFound")}</Typography>
    </PageCenter>

}