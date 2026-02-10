import { IconGraficoSubida } from "@/components/icones/svg/GraficoSubida";
import { useTheme } from "@mui/material";
import { BackgroundIcon } from "../styles";

export function IconeEficiencia({ eficiencia }: { eficiencia: number }) {
    const theme = useTheme()

    if (eficiencia <= 0.4) {
        return (
            <BackgroundIcon back="error">
                <IconGraficoSubida height={20} width={20} color={theme.palette.error.main} />
            </BackgroundIcon>
        )
    }

    if (eficiencia <= 0.6) {
        return (
            <BackgroundIcon back="alert">
                <IconGraficoSubida height={20} width={20} color={theme.palette.alert.main} />
            </BackgroundIcon>
        )
    }


    return (
        <BackgroundIcon>
            <IconGraficoSubida height={20} width={20} color={theme.palette.info.main} />
        </BackgroundIcon>
    )
}