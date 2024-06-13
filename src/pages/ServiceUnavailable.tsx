import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { PageCenter } from "src/components/PageCenter";

export function ServiceUnavailable(){
  const {t} = useTranslation();

  return <PageCenter>
    <Typography variant="h4">{t("serviceUnavailable")}</Typography>
  </PageCenter>
}