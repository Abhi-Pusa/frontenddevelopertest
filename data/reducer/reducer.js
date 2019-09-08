import store from '../store';

const reducer = (state=store,action) => {
    // console.log("its reaching to reducer",action);
    switch(action.type){
        case "UPDATE_ACTUALLIST": return Object.assign({},state,{"actualList":action.payload}); break;
        case "UPDATE_MODIFIEDLIST" : return Object.assign({},state,{"modifiedList":action.payload}); break;
        case "UPDATE_LOADING" : return Object.assign({},state,{"loading":action.payload}); break;
        case "UPDATE_ERROR" : return Object.assign({},state,{"error":action.payload}); break;
        default: return state;
    }
}

export default reducer;