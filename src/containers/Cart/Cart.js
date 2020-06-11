import React from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import CardCart from './CartCard/CartCard';

import classes from './Cart.module.css';

const Cart = (props) => {

    // const text = {
    //     textTransform: 'uppercase',
    //     color: '#3F51B5',
    // }

    const items = props.items.map(item => {
        console.log(item)
        return  <CardCart img={item.image} title={item.title} price={item.price} />
    });

    return (
        <div className={classes.MainContainer}>
            {/* <Typography style={text} variant="h3" component="h2">Your cart is emtpy</Typography> */}
            <div className={classes.CartContainer}>
               {items} 
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart);