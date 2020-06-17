import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart, addQuantity, subQuantity } from '../../store/actions/actions';

import Typography from '@material-ui/core/Typography';
import CardCart from './CartCard/CartCard';
import BillRecipe from '../../containers/BillRecipe/BillRecipe';


import classes from './Cart.module.css';

const Cart = (props) => {

    const text = {
        textTransform: 'uppercase',
        color: '#3F51B5',
    }

    //to remove the item competly
    const removeHandleClick = (id) => {
        props.removeFromCart(id);
    }

    // for adding quantity
    const addQuantityHandler = (id) => {
        console.log('addquantity', id)
        props.addQuantity(id)
    }

    //for subtractting quantity
    const subQuantityHandler = (id) => {
        props.subQuantity(id)
    }


    let items = props.items.length ? (
        props.items.map(item => {
        return  <CardCart
                    addQuantityClick={() => addQuantityHandler(item.id)}
                    subQuantityClick={() => subQuantityHandler(item.id)}
                    quantity={item.quantity}
                    removeClick={() => removeHandleClick(item.id)}
                    key={item.id} 
                    img={item.image} 
                    title={item.title} 
                    price={item.price} />
    })
    ) : 
    (
        <Typography style={text} variant="h3" component="h2">Your cart is empty</Typography>
    );
        

    return (
        <div className={classes.MainContainer}>
            <div className={classes.CartContainer}>
               {items} 
            </div>
          { props.items.length ? <BillRecipe/> : null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.addedItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addQuantity: (id) => dispatch(addQuantity(id)),
        subQuantity: (id) => dispatch(subQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);