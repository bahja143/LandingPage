import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import { LaptopMac, Settings, Create } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    container: {
        background:'#fff',
        padding: 60
    },

    headerText: {
        fontWeight:"bold"
    },

    bodyText: {
        width: '30ch'
    },

    img: {
        width:175,
        height:175,
        objectFit:"cover",
        borderRadius:87.5
    },

    iconBackgr: {
        display:'inline-block',
        background:"#5fb5c4",
        width:50,
        height:50,
        borderRadius:25,
        position:"relative",
        left:-65,
        bottom:20
    },

    icon: {
        color:'#fff',
        position:"relative",
        bottom:-11,
        fontSize:30
    },

    textImageBackgr: {
        display:'inline-block',
        background:"#5fb5c4",
        width:175,
        height:175,
        borderRadius:87.5,
        color:"#fff",
        marginBottom:20
    },

    textImage: {
        fontWeight:"bold",
        fontSize:25,
        position:'relative',
        top:75
    }
}))

const LowerBody = () => {
    const classes = useStyles();

    return ( 
    <> 
        <Container className={classes.container}> 
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Typography align="center"><img className={classes.img} src="//source.unsplash.com/collection/1051/5" alt="" /> <span className={classes.iconBackgr}><Settings className={classes.icon} /></span></Typography>
                    <Typography className={classes.headerText} variant="h6" align="center" gutterBottom>Arts and Culture</Typography>  
                    <Typography className={classes.bodyText} variant="body1" align="center">ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>  
                </Grid>    

                <Grid item>
                    <Typography align="center"><img className={classes.img} src="//source.unsplash.com/collection/1051/6" alt="" /> <span className={classes.iconBackgr}><LaptopMac className={classes.icon} /></span></Typography>
                    <Typography className={classes.headerText} variant="h6" align="center" gutterBottom>Travel and Tourism</Typography>  
                    <Typography className={classes.bodyText} variant="body1" align="center">ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>  
                </Grid>    

                <Grid item>
                    <Typography align="center"><div className={classes.textImageBackgr}><Typography className={classes.textImage} variant="body1">Just Read</Typography></div></Typography>
                    <Typography className={classes.headerText} variant="h6" align="center" gutterBottom>Ancient History</Typography>  
                    <Typography className={classes.bodyText} variant="body1" align="center">ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>  
                </Grid>    

                <Grid item>
                    <Typography align="center"><img className={classes.img} src="//source.unsplash.com/collection/1051/8" alt="" /> <span className={classes.iconBackgr}><Create className={classes.icon} /></span></Typography>
                    <Typography className={classes.headerText} variant="h6" align="center" gutterBottom>Food</Typography>  
                    <Typography className={classes.bodyText} variant="body1" align="center">ullam mollitia quaerat neque placeat et asperiores enim incidunt. Suscipit modi, quibusdam dignissimos ea quo in itaque fuga, molestias et.</Typography>  
                </Grid>    
            </Grid>
        </Container>
    </> );
}
 
export default LowerBody;