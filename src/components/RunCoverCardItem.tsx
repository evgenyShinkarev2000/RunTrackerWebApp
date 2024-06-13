import { Card, Icon, Stack, Typography } from "@mui/material"
import { ReactElement } from "react"
import { useTranslation } from "react-i18next"

type RunCoverCardItemProps = Partial<{
  value: string,
  unit: string,
  name: string,
  icon: ReactElement,
}>

export function RunCoverCardItem(props: RunCoverCardItemProps) {
  const { t } = useTranslation();

  return <Card sx={{ aspectRatio: 1, display: "flex", justifyContent: "center", padding: 2, minWidth: "150px" }}>
    <Stack direction="column" width="100%">
      <Stack direction="column" justifyContent="center" flexGrow={1}>
        <Stack direction="row" justifyContent="center" alignItems="center" gap={"0.2rem"}>
          {
            props.value != undefined
              ? <Typography variant="h5" align="center">{props.value}{props.unit && ","} </Typography>
              : <Typography variant="h6" align="center">{t("noData")}{props.unit && ","} </Typography>
          }
          {
            props.unit && <Typography variant="h6">{props.unit}</Typography>
          }
        </Stack>
      </Stack>
      <div>
        <Stack direction="row" gap={1} justifyContent="center" alignItems="center" overflow="hidden">
          <Icon >{props.icon}</Icon>
          <Typography variant="h6" textOverflow="ellipsis" overflow="hidden">{props.name}</Typography>
        </Stack>
      </div>

    </Stack>
  </Card>
}