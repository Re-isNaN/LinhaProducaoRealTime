
import { StyledMenu } from '@/components/DESKTOP/MenuAlternativa/styles'
import { useState } from 'react'
import { IPropsChildrenComponent } from '@/@types/PropsChildrenComponent'
import { ButtonFiltros } from '../../CustomButtons'

export function FiltroTable({ children }: IPropsChildrenComponent) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <ButtonFiltros onClick={handleClick} />

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {children}
            </StyledMenu>
        </>
    )
}
