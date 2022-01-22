import { Container, Typography, Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        background:"#444641",
        color:'#fff',
        padding:40
    },

    headerText: {
        fontWeight:'bold',
        fontSize:25
    },

    bodyText: {
        width:"30ch"
    },
    
    button: {
        color:"#fff",
        background:"#5fb5c4"
    },

    video: {
        display:"inline-block",
        width: 325,
        height: 275
    }
}))

const Footer = () => {
    const classes = useStyles();
    
    return (
    <>
        <Container className={classes.container}>
           <Grid container justify="center" spacing={2}>
                <Grid item  lg={4} xl={4}>
                    <video className={classes.video} src="../../Videos/Pexels Videos 1457810.mp4" controls autoPlay></video>
                </Grid>

               <Grid item lg={4} xl={4}>
                    <Typography className={classes.headerText} variant="h6">What are you waiting?</Typography>
                    <Typography className={classes.headerText} variant="h6" gutterBottom>Start it Today?</Typography>
                    <Typography variant="body1" paragraph className={classes.bodyText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Enim, possimus! Asperiores in quod at provident officiis odio quos commodi quasi.
                    </Typography>
                    <Button className={classes.button} variant="contained">Click To View</Button>
               </Grid>
           </Grid>
        </Container>
    </>
     );
}
 
export default Footer;