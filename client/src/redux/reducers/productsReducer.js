const PRODUCT_CREATE = 'PRODUCT-CREATE'
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT'
const DELETE_PRODUCT = 'DELETE-PRODUCT'
const CHANGE_AMOUNT = "CHANGE-AMOUNT"

const initialState = {
    list: [
        {
            id: 1,
            name: "Phone",
            price: 12000,
            amount: 1
        },
        {
            id: 2,
            name: "TV",
            price: 40000,
            amount: 1
        }
    ],
    newProductName: "",
    newProductPrice: null
}

const productAdd = (state) => {
    return (
        {
            ...state,
            list: [
                ...state.list,
                {
                    id: state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1,
                    name: state.newProductName,
                    price: state.newProductPrice,
                }
            ],
            newProductName: "",
            newProductPrice: null
        }
    )
}

const updateNewProduct = (state, action) => {
    return (
        {
            ...state,
            [action.typeForm]: action.newValue
        }
    )
}

const deleteProduct = (state, action) => ({
            ...state,
            list: state.list.filter((item) => item.id !== action.candidateId)
        })

const changeAmount = (state, action) => {
    const updatedList = state.list.map(item => {
        if (item.id === action.candidateId) {
            let newAmount
            if (item.amount === 1) {
                    newAmount = action.typeChange === "add" ? item.amount + 1 : item.amount
            } else {
                    newAmount = action.typeChange === "add" ? item.amount + 1 : item.amount - 1
            }

            return {
                ...item,
                amount: newAmount
            }

        }
        return item
    })

    return {
        ...state,
        list: updatedList
    }
}


const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_CREATE: return productAdd(state)
        case UPDATE_NEW_PRODUCT: return updateNewProduct(state, action)
        case DELETE_PRODUCT: return deleteProduct(state, action)
        case CHANGE_AMOUNT: return changeAmount(state, action)
        default: return state 
    }
}

// ProductsReducer - Local dispatch

export const productCreateAC = () => ({type: PRODUCT_CREATE}) // Action Creator to add new product
// Action - {type: "PRODUCT-CREATE", name: "PC"}

export const updateNewProductAC = (typeForm, newValue) => ({type: UPDATE_NEW_PRODUCT, typeForm, newValue}) // Action Creator to update

export const deleteProductAC = (candidateId) => ({type: DELETE_PRODUCT, candidateId}) // Action Creator to delete 

export const changeAmountAC = (candidateId, typeChange) => ({type: CHANGE_AMOUNT, candidateId, typeChange}) // Action Creator to change amount

export default ProductsReducer