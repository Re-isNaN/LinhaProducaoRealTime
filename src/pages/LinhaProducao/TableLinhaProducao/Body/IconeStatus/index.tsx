import { TypeStatus } from "@/@types/TiposStatus";
import { IconeMultiplasEngrenagens } from "@/components/icones/svg/MultiplasEngrenagens";
import { CheckBox, DisabledByDefault, PauseCircle, Settings, Warning } from "@mui/icons-material";

export function IconeStatus({ status }: { status: TypeStatus }) {
    switch (status) {
        case 'PRODUZINDO':
            return <IconeMultiplasEngrenagens width={36} height={36} color="#4299e1" />

        case 'CONCLUÍDA':
            return <CheckBox sx={theme => ({ color: theme.palette.success.main, fontSize: 36 })} />

        case 'CANCELADA':
            return <DisabledByDefault sx={theme => ({ color: theme.palette.error.main, fontSize: 36 })} />

        case 'ATRASADA':
            return <Warning sx={theme => ({ color: theme.palette.warning.main, fontSize: 36 })} />

        case 'PARADA':
            return <PauseCircle sx={theme => ({ color: theme.palette.alert.main, fontSize: 36 })} />

        default:
            return <Settings sx={{ color: "#808080", fontSize: 36 }} />
    }
}