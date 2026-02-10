import { styled } from "@mui/material";

export const ContainerEtapa = styled('div')(
    ({ id }: { id: string }) => ({
        background: '#fff',

        ...(id === 'inicio' || id === 'fim' ? {
            border: '2px solid #1a192b',
            borderRadius: '9px',
            display: 'grid',
            placeItems: 'center',
            width: '150px',
        } : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '200px',
            boxShadow: `
            inset 0 -2px 0 rgba(0, 0, 0, 0.25),
            0 4px 8px rgba(0, 0, 0, 0.2)
            `,
        })
    })
)

export const HeaderEtapa = styled('div')(
    ({ status }: { status: string }) => ({
        width: '220px',
        backgroundColor:
            status === 'CONCLUÍDA' ? '#27ae60' :
                status === 'PRODUZINDO' ? '#2f80ed' :
                    status === 'PARADA' ? '#FFC222' :
                        status === 'ATRASADA' ? '#ec7615' :
                            status === 'CANCELADA' ? '#ed2f2f' :
                                '#444',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        padding: '8px 12px',
        fontSize: '18px',
        fontWeight: 600,
        textAlign: 'center',

        /* efeito painel */
        position: 'relative',
        boxShadow: `
        inset 0 -2px 0 rgba(0,0,0,0.25),
        0 4px 8px rgba(0,0,0,0.2)
    `,
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',

        /* evita vazamento visual */
        overflow: 'hidden',

        /* aba superior */
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '-6px',
            left: '12px',
            right: '12px',
            height: '6px',
            background: 'rgba(255,255,255,0.18)',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
        },
    })
)