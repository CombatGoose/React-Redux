const CHANGE_MODAL = "CHANGE-MODAL"

const initialState = {
    isModal: false
}

const changeModalVisible = (state) => ({
    ...state,
    isModal: !state.isModal
})

const UIReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_MODAL: return changeModalVisible(state)
        default: return state
    }
}

export const changeModalAC = () => ({type: CHANGE_MODAL}) // Action Creator to open/close modal window

export default UIReducer