import { Container, makeStyles, Typography, Grid } from "@material-ui/core"
 
const useStyles = makeStyles(() => ({
    top: {
        background: '#6f9183',
        height: 40,
    },

    bottom: {
        background:'#444641',
        color:"#fff",
        padding:20
    },

    headingText: {
        fontWeight:'bold',
    }
}))

const Header = () => {
    const classes = useStyles();

    return ( 
        <>
            <Container className={classes.top}> </Container>

            <Container className={classes.bottom}>
              <Grid container justify="center">
                  <Grid item>
                        <Typography className={classes.headingText} variant="h4">Create Your Own Genuine Web Masterplace</Typography>
                        <Typography variant="body1" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, autem.</Typography>
                  </Grid>
              </Grid>
            </Container>
        </>
    );
}
 
export default Header;