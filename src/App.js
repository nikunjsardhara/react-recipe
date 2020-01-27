import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Recipe from './components/Recipe';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    height: "auto",
    width: "940px",
    margin: "30px",
    padding:"30px"
  },
  button:{
  	marginLeft:"10px"
  }
}));

function App() {
	const APP_ID = "a9c11689";
	const APP_KEY = "ec6791daabf87fb56e2efef074f2d0cf";
	const [recipes,setRecipes] = useState([]);
	const [search,setSearch] = useState("");
	const [query,setQuery] = useState("oats");

	useEffect(() => {
		getRecipes();
	},[query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`);
		const data = await response.json();
		setRecipes(data.hits);
	}

	const updateSearch = e =>{
		setSearch(e.target.value);
	}

	const startSearch = e =>{
		e.preventDefault();
		setQuery(search);
	}

const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Recipe Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} justify="center">
      	<Paper className={classes.paper}>
      	<form>
      	<FormGroup row>
      		<TextField id="outlined-basic" label="Recipe Name" variant="outlined" onChange={updateSearch}/>
      		<Button variant="contained" color="primary" className={classes.button} onClick={startSearch}>
			  Search
			</Button>
		</FormGroup>
    	</form>
      	</Paper>
      	{recipes.map(recipe => {
      		return(
      			<Recipe recipe={recipe}/>
      			)
      	})}
      </Grid>
    </div>
  );
}

export default App;
