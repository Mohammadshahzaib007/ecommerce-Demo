import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

import classes from './CartCard.module.css';

const cartCard = (props) => {

const icons = {
        fontSize: '3rem',
        color: '#3F51B5',
        margin: '.5rem'
    }

    return (
        <div className={classes.CardContainer}>
            <div className={classes.ImgContainer}>
                <img className={classes.ProductImg} src={props.img} alt="product"/>
            </div>
            
            <div className={classes.ProductNameContainer}>
                <Typography variant="h4" component="h2">{props.title}</Typography>
            </div>

            <div className={classes.ProductPriceContainer}>
    <Typography style={{fontWeight: 'bold'}} variant="h4" component="h2">${props.price}</Typography>
            </div>

            <div className={classes.ProductQuantityContainer}>
                <IconButton onClick={props.addQuantityClick} aria-label="delete">
            <AddCircleOutlineRoundedIcon  style={icons} />
                </IconButton>
                <h2>{props.quantity}</h2>
                <IconButton onClick={props.subQuantityClick} aria-label="delete">
                    <RemoveCircleOutlineRoundedIcon style={icons} />
                </IconButton>
            </div>

            <div className={classes.ProductRemoveContainer}>
                <IconButton onClick={props.removeClick} aria-label="delete">
                    <DeleteIcon style={icons}/>
                </IconButton>
            </div>
        </div>
    );
}

export default cartCard;