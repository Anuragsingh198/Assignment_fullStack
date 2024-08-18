export  const  reducer =(state , action)=>{
    switch(action.type){
        case "GET_CARDS":
            return {...state ,  Cards:action.payload };
        case "GET_ONE_CARD":
            return {...state , card:action.payload};
        case "LOADING_START":
            return {...state , Loading:true}
        case "LOADING_END":
            return {...state , Loading:false}
        case "LOADING_ERROR":
            return {...state , error:action.payload}
        case 'SET_SEARCH':
            return {...state , search:action.payload}
        default:
            return  state;
    }
}