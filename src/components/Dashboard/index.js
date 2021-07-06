import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/* <Orders /> */}
                        yayat<br/>
                        yayat<br/>
                        yayat<br/>
                        yayat<br/>
                        yayat<br/>
                        yayat<br/>
                        yayat<br/>
                    </Paper>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default Dashboard;