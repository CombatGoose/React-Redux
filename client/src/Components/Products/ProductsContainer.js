import { connect } from 'react-redux'
import { productCreateAC, updateNewProductAC, deleteProductAC, changeAmountAC } from '../../redux/reducers/productsReducer'
import Products from './Products'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    addProducts: productCreateAC,
    updateNewProduct: updateNewProductAC,
    deleteProduct: deleteProductAC,
    changeAmount : changeAmountAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)