import { IPropsChildrenComponent } from "@/@types/PropsChildrenComponent";
import { Paper, TableContainer } from "@mui/material";

export function CustomTableContainer({ children }: IPropsChildrenComponent) {
    return (
        <TableContainer
            component={Paper}
            sx={theme => ({
                maxHeight: 'calc(100vh - 25.2rem)',
                overflowX: 'hidden',
                // '& .MuiTableHead-root .MuiTableRow-root': {
                //     background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                // },

                '&::-webkit-scrollbar': {
                    width: '8px',
                    backgroundColor: theme.palette.info.bgColor,
                },

                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.info.main,
                    borderRadius: 4,
                },

                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: theme.palette.info.dark,
                },

                '& .MuiTableCell-stickyHeader': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    // backgroundColor: 'transparent', // Importante!
                    color: 'white',
                    fontWeight: 600,
                }
            })}>
            {children}
        </TableContainer>
    )
}