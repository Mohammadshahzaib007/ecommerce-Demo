import React from 'react';
import Footer from '../UI/Footer/Footer';
import Typography from '@material-ui/core/Typography';

import ProductContainer from '../../containers/ProductContainer/ProductContainer';
import classes from './HomePage.module.css';

const homePage = () => {

    const typo = {
        color: '#fff',
        textTransform: 'uppercase',
    }

    return (
    <React.Fragment>
         <div className={classes.Container}>
            <div className={classes.TextContainer}>
                <Typography id="toFirstProduct" style={typo} variant="h2" component="h2">
                Save money, without thinking about it
                </Typography>
            </div> 
        </div>

        <section>
            <ProductContainer />
        </section>
        <Footer />        
    </React.Fragment>
    );
}

export default homePage;