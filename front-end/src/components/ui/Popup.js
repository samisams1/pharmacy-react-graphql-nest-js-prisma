import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import Controls from "./controls";
import { makeStyles } from  "@mui/styles";
//import CloseIcon from "@material-ui/icons"
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        position: 'absolute',
      
    },
    dialogTitle: {
        paddingRight: '110px',
        color:"red",
        fontSize:"303px",
        backgroundColor:"#1976d"
    }
}));
export default function Popup(props){
    const {title,children,openPopup,setOpenPopup} = props;
    const classes = useStyles();
    return(
        <Dialog open={openPopup} maxWidth="md" classes={{paper:classes.dialogWrapper}}> 
            <DialogTitle className={classes.dialogTitle}>
            <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="primary"
                        onClick={()=>{setOpenPopup(false)}}>
                       
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}