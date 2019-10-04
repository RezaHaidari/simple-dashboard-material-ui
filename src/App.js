import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Sidebar from './components/sidebar';
import ActionHeader from './components/header';
import TopFilter from './components/top-filter';
import DataTable from './components/table';
import { connect } from 'react-redux'


const mapStateToProps = (state => ({
  ...state
}));
const mapDispatchToProps = dispatch => ({

});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={classes.paper} >
                <Box mb={1.5} mt={1.5}>
                  <TopFilter />
                </Box>
                <Divider />
                <Box mb={1.5} mt={1.5}>
                  <ActionHeader />
                </Box>
                <Divider />
                <Box mb={1.5} mt={1.5}>
                  <DataTable columns={props.table.columns} rows={props.table.rows} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);