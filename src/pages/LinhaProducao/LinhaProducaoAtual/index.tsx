import { IconButton, Modal } from "@mui/material";
import { IPropsLinhaProducaoAtual } from "./types";
import { Close } from "@mui/icons-material";
import { ContainerModal } from "./styles";
import { GraficoLinhaProducao } from "./GraficoLinhaProducao";
import { EtapasLateral } from "./EtapasLateral";
import { GraficoLinhaProducaoProvider } from "./contexts/organizacaoGrafico";


export function LinhaProducaoAtual({ open, handleClose }: IPropsLinhaProducaoAtual) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{ padding: 4 }}
        >
            <ContainerModal>
                <IconButton sx={{ zIndex: 3, position: 'absolute', top: 2, right: 2 }} color="error" onClick={handleClose}>
                    <Close />
                </IconButton>


                <GraficoLinhaProducaoProvider>
                    <EtapasLateral />
                    <GraficoLinhaProducao />
                </GraficoLinhaProducaoProvider>
            </ContainerModal>
        </Modal>
    )
}