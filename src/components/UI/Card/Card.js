import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Loader from '../Loader/Loader';


import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 345,
    margin: 20,
  },
  media: {
    //height: 0,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const btn = {
    fontSize: '1.8rem'
  } 

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        { props.loadingState === false ?  <CardMedia
        component="img"
          className={classes.media}
          image={props.img}
          width="100%"
          title="Contemplative Reptile"
        /> : <Loader /> }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography style={{textTransfonrm: 'uppercase', fontWeight: 'bold'}} gutterBottom variant="h5" component="h2">
           Price: ${props.price}
          </Typography>
          {/* <Typography style={{fontSize: '1.5rem'}} variant="body2" color="textSecondary" component="p">
            {props.description} 
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={props.click} style={btn}  size="small" color="primary">
         Add to cart <AddShoppingCartIcon fontSize="large" style={{margin: '.5rem'}}/> 
        </Button>
        
      </CardActions>
    </Card>
  );
}
