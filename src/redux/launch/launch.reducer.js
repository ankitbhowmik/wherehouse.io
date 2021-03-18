import { FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAIL } from "./launch.type";

const initialState = {
    loading: true,
    error: "",
    launches: []
}

const launchReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_LAUNCH_REQUEST:
            return {loading: true, error:"", launches: []}
        case FETCH_LAUNCH_SUCCESS:
            return {loading: false, error:"", launches: action.payload}
        case FETCH_LAUNCH_FAIL :
            return {loading: false, error:action.payload, launches: []}
        default:
            return state;
    }
}
export default launchReducer;