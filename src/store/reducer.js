import * as actionTypes from './actions/actionTypes';

const initialState = {
    productsData: [],
    addedItems: [],
    total: 0,
    error: false
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

        case actionTypes.ADD_TO_CART:
            let addedItem = state.productsData.find( productData => productData.id === action.id);
                //console.log(addedItem)
            
                //check if the action id exists in the addedItems
            let existed_item= state.addedItems.find( item => action.id === item.id);
            //console.log(existed_item)

            if(existed_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            } else {
                addedItem.quantity = 1;
                //calculat the total
                let newTotal = state.total + addedItem.price;

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }

        default:
            return state;
    }
}

export default reducer;