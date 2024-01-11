import ProductsContainer from "./Components/Products/ProductsContainer"
import Modal from './Components/UI/UIContainer'

const App = (props) => {
    console.log(props)
    return (
        <>
            <ProductsContainer/>
            <Modal/>
        </>
    )
}

export default App