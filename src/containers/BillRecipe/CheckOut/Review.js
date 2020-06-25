import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux'


// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    fontSize: '3rem'
  },
}));

 function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography style={{fontSize: '3rem'}} variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.products.map((product) => (
          <ListItem style={{fontSize: '3rem'}} className={classes.listItem} key={product.id}>
            <ListItemText >
              <Typography style={{fontSize: '2rem'}} variant="body2">{product.title}</Typography>
            </ListItemText>
            <Typography style={{fontSize: '2rem'}} variant="body2">${product.price}</Typography>
          </ListItem>
        ))}
         <ListItem className={classes.listItem}>
          <ListItemText>
            <Typography style={{fontSize: '2rem'}} variant="body2">Shipping</Typography>
          </ListItemText>
          <Typography style={{fontSize: '2rem'}} variant="subtitle1" className={classes.total}>
            Free
          </Typography>
        </ListItem>
          
        <ListItem className={classes.listItem}>
          <ListItemText>
            <Typography style={{fontSize: '2rem'}} variant="body2">Tax</Typography>
          </ListItemText>
          <Typography style={{fontSize: '2rem'}} variant="subtitle1" className={classes.total}>
            ${props.tax}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText>
            <Typography style={{fontSize: '2rem'}} variant="body2">Total</Typography>
          </ListItemText>
          <Typography style={{fontSize: '2rem'}} variant="subtitle1" className={classes.total}>
            ${props.total}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment> 
  );
}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total,
    tax: state.tax
  }
}

export default connect(mapStateToProps)(Review)