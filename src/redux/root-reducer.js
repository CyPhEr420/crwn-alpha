import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import persistReducer from 'redux-persist/es/persistReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootreducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootreducer);