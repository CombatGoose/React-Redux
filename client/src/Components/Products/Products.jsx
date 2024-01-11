const Products = (props) => {
    const handleClick = () => {
        props.addProducts()
    }

    const changeInputValue = (type, newValue) => {
        props.updateNewProduct(type, newValue)
    }

    const handleDelete = (candidateId) => {
        props.deleteProduct(candidateId)
    }

    const ProductsCollection = props.products.list.map(item => {
        return (
            <li key={item.id}>
                <p>{item.name}</p>
                <br />
                <p>{item.price}$</p>
                <br />
                <button onClick={() => {props.changeAmount(item.id, "remove")}}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => {props.changeAmount(item.id, "add")}}>+</button>
                <br />
                <button
                onClick={() => {handleDelete(item.id)}}
                >Delete</button>
            </li>
        )
    })

    return (
        <ul>
            <div>
                <input 
                onChange={(e) => changeInputValue("newProductName", e.target.value)} 
                type="text" 
                placeholder="Write product name"
                value={props.products.newProductName}
                 />
                <input 
                onChange={(e) => changeInputValue("newProductPrice",e.target.value)} 
                type="text" 
                placeholder="Write product price"
                value={props.products.newProductPrice}
                 />
                <button onClick={handleClick}>Add product</button>
            </div>
            {ProductsCollection}
        </ul>
    )
}

export default Products