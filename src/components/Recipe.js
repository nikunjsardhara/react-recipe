import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    height: "auto",
    width: "940px",
    margin: "10px",
    padding:"30px"
  }
}));

const Recipe = (props) => {
	const classes = useStyles();
	return(
		<Paper className={classes.paper}>
		<Grid container spacing={3}>
		<Grid item xs={12} sm={12}>
		<h1>{props.recipe.recipe.label}</h1>
		</Grid>
			<Grid item xs={12} sm={6} >
					<img src={props.recipe.recipe.image} />
			</Grid>
			<Grid item xs={12} sm={6}>
				<ul>
					{props.recipe.recipe.ingredients.map(ingr => {
						return(
							<li>{ingr.text}</li>
							)
					})}
				</ul>
			</Grid>
		</Grid>
		</Paper>
	);
}

export default Recipe;