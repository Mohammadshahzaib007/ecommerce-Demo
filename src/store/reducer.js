import * as actionTypes from './actions/actionTypes';

const initialState = {
    productsData: [],
    addedItems: [],
    subTotal: 0,
    error: false,
    tax: 0,
    total: 0
}


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                productsData: action.productsData,
                error: false
            };
        
        case actionTypes.FETCH_DATA_FAILED:
                return {
                    ...state,
                    error: true
                };

        case actionTypes.REMOVE_FROM_CART:
        const itemToRemove= state.addedItems.find(item=> action.id === item.id)
        const remainItems = state.addedItems.filter( item => action.id !== item.id );
       
        //calculating the total
        const remainSubTotal = (state.subTotal - itemToRemove.price).toFixed(2) ;
        const remainTax = (remainSubTotal * (5 / 100)).toFixed(2);
        // text for every single product
        const taxPerProduct = (itemToRemove.price  * (5 / 100)).toFixed(2);

        const remainTotal = (state.total - (itemToRemove.price * itemToRemove.quantity ) - taxPerProduct).toFixed(2);

        return {
            ...state,
            addedItems: remainItems,
            subTotal: remainSubTotal,
            tax: remainTax,
            total: remainTotal
        }

        case actionTypes.ADD_TO_CART:
            let addedItem = state.productsData.find( productData => productData.id === action.id);
            
                //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find( item => action.id === item.id);

            const newSubTotal = (state.subTotal + addedItem.price);
            const calculatedTax =  (newSubTotal * (5 / 100)).toFixed(2) ;
            const total = (newSubTotal + calculatedTax);

            if(existed_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    subTotal: newSubTotal,
                    tax: calculatedTax,
                    total: total
                }
            } else {
                addedItem.quantity = 1;
                //calculat the total
                let newTotal = (state.subTotal + addedItem.price);

                const calculatedtax = ((5 / 100) * newTotal).toFixed(2);

                let Total = (parseInt(newTotal) + parseInt(calculatedTax)).toFixed(2);

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    subTotal: newTotal,
                    tax: calculatedtax,
                    total: Total
                    
                }
            }

            case actionTypes.ADD_QUANTITY:
                const itmeToAdd = state.addedItems.findIndex( item => item.id === action.id);

                let newArray = [...state.addedItems];
                newArray[itmeToAdd] = { ...newArray[itmeToAdd], quantity: newArray[itmeToAdd].quantity + 1 };
                const newSubTotalForQuantity =  (parseInt(state.subTotal) + parseInt(newArray[itmeToAdd].price)).toFixed(2);
                const newTaxForQuantity = parseInt((5 / 100) * newSubTotalForQuantity).toFixed(2);
                const newTotalForQuantity = (parseInt(newSubTotalForQuantity) + parseInt(newTaxForQuantity)).toFixed(2);

                return {
                    ...state,
                    addedItems: newArray,
                    subTotal: newSubTotalForQuantity,
                    tax: newTaxForQuantity,
                    total: newTotalForQuantity
                }

            case actionTypes.SUB_QUANTITY:
            const itmeToSub = state.addedItems.findIndex( item => item.id === action.id);

            let newArraySub = [...state.addedItems];
            newArraySub[itmeToSub] = { ...newArraySub[itmeToSub], quantity: newArraySub[itmeToSub].quantity - 1 };
            const newSubTotalForSub =  (parseInt(state.subTotal) - parseInt(newArraySub[itmeToSub].price)).toFixed(2);
            const newTaxForSub = parseInt((5 / 100) * newSubTotalForSub).toFixed(2);
            const newTotalForSub = (parseInt(newSubTotalForSub) + parseInt(newTaxForSub)).toFixed(2);
            if(newArraySub[itmeToSub].quantity >= 1) {
         return {
                ...state,
                addedItems: newArraySub,
                subTotal: newSubTotalForSub,
                tax: newTaxForSub,
                total: newTotalForSub
            }}
   
            else {
                const remainItemsSub = state.addedItems.filter( item => action.id !== item.id );
                const removedItem = state.addedItems.find( item => item.id === action.id); 
                const newSubTotalSub = (state.subTotal -    removedItem.price).toFixed();
                const newTaxSub = (( 5 / 100) * newSubTotalSub).toFixed();
                const newTotalSub = (parseInt(newSubTotalSub) + parseInt(newTaxSub)).toFixed();
                
                return {
                    ...state,
                    addedItems: remainItemsSub,
                    subTotal: newSubTotalSub,
                    tax: newTaxSub,
                    total: newTotalSub
                }

            }

        default:
            return state;
    }
    }


export default reducer;