import { combineReducers, createStore } from 'redux'

import ProductsReducer from './reducers/productsReducer'
import UIReducer from './reducers/UIReducer'

const reducers = combineReducers({
    products: ProductsReducer,
    UI: UIReducer
})

const store = createStore(reducers)

export default store