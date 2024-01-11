const Modal = (props) => {
    return (
        <>
            {!props.isModal && (
                <button onClick={() => {props.changeModal()}}>Show</button>
            )}
            {props.isModal && (
                <div>
                    <p>Modal window</p>
                    <button onClick={() => {props.changeModal()}}>Close</button>
                </div>
            )}
        </>
    )
}

export default Modal