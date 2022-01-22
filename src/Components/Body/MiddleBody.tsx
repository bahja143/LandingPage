import { Container, Typography, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    container: {
        background: "#f5f9f8",
        padding: 30
    },

    headingText: {
        fontWeight:'bolder'
    },

    img: {
        width:200,
        height:200,
        objectFit:"cover"
    },

    imgContainer: {
        marginTop:20
    }
}))

const MiddleBody = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
               <Grid container justify="center">
                    <Grid item>
                         <Typography className={classes.headingText} variant="h4" align="center">Let Them Know Why you're the Best</Typography>
                         <Typography variant="body1" align="center" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut at?</Typography>
                    </Grid>
               </Grid>

               <Grid container justify="center" spacing={2} className={classes.imgContainer}>
                  <Grid item>
                       <img className={classes.img} src="//source.unsplash.com/collection/1051/1" alt="Random"/>
                  </Grid>

                   <Grid item>
                       <img className={classes.img} src="//source.unsplash.com/collection/1051/2" alt="Random"/>
                  </Grid>

                   <Grid item>
                       <img className={classes.img} src="//source.unsplash.com/collection/1051/3" alt="Random"/>
                  </Grid>

                   <Grid item>
                       <img className={classes.img} src="//source.unsplash.com/collection/1051/4" alt="Random"/>
                  </Grid>
               </Grid>
            </Container>
        </>
      );
}
 
export default MiddleBody;