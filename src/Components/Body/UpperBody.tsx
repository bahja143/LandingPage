import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import { Language, LaptopMac, Chat, Settings } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    container: {
        background:'#fff',
        paddingTop: 60,
        paddingBottom: 30,
    },

    headingText: {
        fontWeight:"bold",
        marginTop:20
    },


     headingText2: {
        fontWeight:"bold",
        color: "#5fb5c4",
    },

    bodyText: {
        color: "#555",
        width:"30ch"
    },

    icon: {
        fontSize:75,
        color: "#fff",
        position: "relative",
        top: 2
    },

    icon2: {
        fontSize:65,
        color: "#fff",
        position: "relative",
        top: 7
    },

    iconBackgr: {
        background: '#444641',
        border: "7px solid #444641",
        borderRadius: 50,
        display:"inline-block",
        width:80,
        height:80,
    },

     iconBackgr2: {
        background: '#5fb5c4',
        border: "7px solid #fff",
        borderRadius: 50,
        display:"inline-block",
        width:75,
        height:75,
        position:"relative",
        bottom: -5
    },

    iconBorder: {
        display: 'inline-block',
        border: "3px solid #5fb5c4",
        borderRadius: 100,
        width:100,
        height:100,
        marginBottom:10
    }
}))

const UpperBody = () => {
    const classes = useStyles();

    return (
        <> 
            <Container className={classes.container}>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Typography align="center"><div className={classes.iconBackgr}><Language className={classes.icon} /></div> </Typography>
                        <Typography className={classes.headingText} variant="h6" align="center" gutterBottom>Global network</Typography>
                        <Typography className={classes.bodyText} variant="body1" align="center"> ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>
                    </Grid>

                     <Grid item>
                        <Typography align="center"><div className={classes.iconBorder}><div className={classes.iconBackgr2}><LaptopMac className={classes.icon2} /></div></div></Typography>
                        <Typography className={classes.headingText2} variant="h6" align="center" gutterBottom>Global network</Typography>
                        <Typography className={classes.bodyText} variant="body1" align="center"> ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>
                    </Grid>

                     <Grid item>
                        <Typography align="center"><div className={classes.iconBackgr}><Chat className={classes.icon2} /></div></Typography>
                        <Typography className={classes.headingText} variant="h6" align="center" gutterBottom>Connect</Typography>
                        <Typography className={classes.bodyText} variant="body1" align="center"> ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>
                    </Grid>

                     <Grid item>
                        <Typography align="center"><div className={classes.iconBackgr}><Settings className={classes.icon} /></div></Typography>
                        <Typography className={classes.headingText} variant="h6" align="center" gutterBottom>Technical support</Typography>
                        <Typography className={classes.bodyText} variant="body1" align="center"> ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
      );
}
 
export default UpperBody;