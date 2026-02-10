import {
    Handle,
    Position,
} from '@xyflow/react';
import { ContainerEtapa, HeaderEtapa } from './styles';
import { IconeMultiplasEngrenagens } from '@/components/icones/svg/MultiplasEngrenagens';
import { Cancel, CheckCircle, PauseCircle, RemoveCircle, Settings, Warning } from '@mui/icons-material';
import { IPropsEtapa } from './types';

// Componente de nó customizado
export function Etapa({ id, data }: IPropsEtapa) {

    return (
        <ContainerEtapa id={id}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                isConnectable={true}
            />

            {id === 'inicio' || id === 'fim' ?
                <strong>{data.etapa}</strong>
                : <>
                    <HeaderEtapa status={data.status}>
                        {data.etapa}
                    </HeaderEtapa>

                    <div style={{ width: '100%', padding: '8px', backgroundColor: '#f3f3f3', display: 'grid', placeItems: 'center' }}>
                        {data.status === 'CONCLUÍDA' ?
                            <img src='/linha_producao_finalizada.png' alt='' width={80} /> :
                            data.status === 'PRODUZINDO' ?
                                <IconeMultiplasEngrenagens width={80} height={80} color='#2f80ed' /> :
                                <img src='/linha_producao.png' alt='' width={100} />
                        }
                    </div>

                    <div style={{ width: '100%', padding: '2px', fontSize: '14px', fontWeight: '600', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                        {data.status === 'CONCLUÍDA' ?
                            <CheckCircle sx={{ fontSize: 28 }} color='success' /> :
                            data.status === 'PRODUZINDO' ?
                                <Settings sx={{ fontSize: 28 }} color='info' /> :
                                data.status === 'PARADA' ?
                                    <PauseCircle sx={theme => ({ fontSize: 28, color: theme.palette.alert.main })} /> :
                                    data.status === 'ATRASADA' ?
                                        <Warning sx={{ fontSize: 28 }} color='warning' /> :
                                        data.status === 'CANCELADA' ?
                                            <Cancel sx={{ fontSize: 28 }} color='error' /> :
                                            <RemoveCircle sx={{ fontSize: 28 }} color='disabled' />}

                        {data.status}
                    </div>

                    <div style={{ width: '100%', padding: '2px', fontSize: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {data.tempo}
                    </div>
                </>
            }


            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555' }}
                isConnectable={true}
            />
        </ContainerEtapa>
    );
};