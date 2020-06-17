import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import classes from './BillRecipe.module.css';

const billRecipe = (props) => {

    const btn = {
        fontSize: '2rem',
        color: '#3F51B5'
    }

console.log(props.subtotal)

    return(
        <div className={classes.BillContainer}>
        <div className={classes.BillDataContainer}>
           <h3 className={classes.Text}>subtotal: ${props.subtotal}</h3>
            <hr />
    <h3 className={classes.Text}>tax: ${props.tax}</h3>
            <hr />
           <h3 className={classes.Text}>delevery charge: $6</h3>
            <hr />
    <h3 className={classes.Text}>Total: ${props.total}</h3>
            <Button style={btn} variant="outlined" color="primary">
                Checkout
            </Button>
        </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        subtotal: state.subTotal,
        tax: state.tax,
        total: state.total,
    }
}

export default connect(mapStateToProps)(billRecipe);