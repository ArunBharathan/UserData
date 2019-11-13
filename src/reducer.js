const initialState = {
    isLoged:false
}

const reducer = (state=initialState, action) => {
    const newState = {...state};
    if(action.type === 'SIGN_IN'){
        newState.isLoged=true
    }
    else if(action.type === 'SIGN_OUT')
    {
        newState.isLoged=false
    }

    return newState

}
export default reducer