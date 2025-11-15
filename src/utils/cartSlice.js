import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {

        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            let index;

            for(let i=0;i<state.items.length;i++){
                if(state.items[i]==action.payload){
                    index=i;
                    break;
                }
            }
            state.items.splice(index,1);
        },

        clearCart : (state) => {
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;