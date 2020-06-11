import React from 'react';

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
                <Typography style={typo} variant="h2" component="h2">
                    Lorem Ipsum Dummy Text
                </Typography>
            </div> 
        </div>

        <section>
            <ProductContainer />
        </section>        
    </React.Fragment>
    );
}

export default homePage;