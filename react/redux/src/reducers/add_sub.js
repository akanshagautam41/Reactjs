

const firstvalue = 0;

const add_sub =(state = firstvalue,action)=>{
switch(action.type){
    case  "ADD" :
    return state + 1 ;
 case "SUB" :
    return state - 1 ;

    default : return state;
}
}

export default add_sub ;