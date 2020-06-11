import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, addToCart } from '../../store/actions/actions';

import Typography from '@material-ui/core/Typography';

import classes from './ProductContainer.module.css';
import Card from '../../components/UI/Card/Card';


const ProductContainer = (props) => {

    useEffect( () => {
        props.fetchProductData();
    }, []);

    const handleClick = (id) => {
        props.addToCart(id);
      }

    const product = props.productData.map( productsData => {
        return <Card click={() => handleClick(productsData.id)} key={productsData.id} img={productsData.image} title={productsData.title}
        description={productsData.description} price={productsData.price}/>
    });

    const text = {
        textTransform: 'uppercase',
        color: '#3F51B5',
    }


    return (
        <div className={classes.MainContainer}>
            <Typography style={text} variant="h2" component="h2">You should buy somthing that you like!</Typography>
            <div className={classes.ProductContainer}>
            {product}
            </div>
        </div>
       
    );
};

const mapStateToProps = state => {
    return {
        productData: state.productsData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductData: () => dispatch(fetchData()),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);