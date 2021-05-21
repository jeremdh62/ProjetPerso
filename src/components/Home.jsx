import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/Home.css'

import{useStyles} from '../styles/HomeCSS'

import Typography from '@material-ui/core/Typography';

import News from './News';

const Home = ({open}) => {

  const classes = useStyles();
  
    return (
           <div className="root"> 
           <main className={clsx(classes.content, {
             [classes.contentShift]: open,
           })}
         >
           <div className={classes.drawerHeader} />
           <Typography variant="h6" color="primary"> Rechercher vos Statistiques Fortnite </Typography>

           <Paper component="form" className={classes.paper}>
              <InputBase
                className={classes.input}
                placeholder="Entrer votre pseudo Fortnite"
                inputProps={{ 'aria-label': 'Entrer votre pseudo Fortnite' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <News/>
          
         </main></div>
    );
};

export default Home;