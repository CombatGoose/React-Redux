import { changeModalAC } from '../../redux/reducers/UIReducer'
import { connect } from 'react-redux'
import Modal from './Modal'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    changeModal: changeModalAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)