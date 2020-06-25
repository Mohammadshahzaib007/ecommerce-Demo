import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, addToCart, } from '../../store/actions/actions';

import Typography from '@material-ui/core/Typography';

import classes from './ProductContainer.module.css';
import Card from '../../components/UI/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import Pagination from  './Pagination';

const ProductContainer = (props) => {

    const  [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(10);



    useEffect( () => {
        props.fetchProductData();
    }, []);

    // get current products
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFistProduct = indexOfLastProduct - productPerPage;
    const currentProducts = props.productData.slice(indexOfFistProduct, indexOfLastProduct);

    const handleClick = (id) => {
        props.addToCart(id);
      }

    let product = currentProducts.map( productsData => {
        return <Card
        loadingState={props.loading}
         click={() => handleClick(productsData.id)}
          key={productsData.id} 
          img={productsData.image} 
          title={productsData.title}
        description={productsData.description} 
        price={productsData.price}/>
    });

    if(props.loading) {
        product = <Loader /> 
    }
    

    const text = {
        textTransform: 'uppercase',
        color: '#3F51B5',
    }

    // change page
    const paginateHandler = (pageNumber) => {
      return  setCurrentPage(pageNumber);
    }

    return (
        <div className={classes.MainContainer}>
            <Typography style={text} variant="h2" component="h2">You should buy somthing that you like!</Typography>
            <div className={classes.ProductContainer}>
            {product}
            <Pagination productPerPage={productPerPage} totalProducts={props.productData.length} paginate={paginateHandler}/>
            </div>
        </div>
       
    );

};


const mapStateToProps = state => {
    return {
        productData: state.productsData,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductData: () => dispatch(fetchData()),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);