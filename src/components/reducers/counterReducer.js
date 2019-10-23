let initialState = {
    counterSum:0,
    counterArr:[]
};

function generateRandomId() {
    const id = new Date().getTime() + Math.random();
    console.log(id);
    return id;
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT_NUMBER":
            const incrementArr = state.counterArr.map((counterItem)=>{
                if(counterItem.id===action.payload){
                    return {...counterItem, number: counterItem.number + 1}
                } else{
                    return counterItem;
                }
            });
            return{...state, counterArr: incrementArr};
        case "DECREMENT_NUMBER":
            const decrementArr = state.counterArr.map((counterItem)=>{
                if(counterItem.id===action.payload){
                    return {...counterItem, number: counterItem.number - 1}
                } else{
                    return counterItem;
                }
            });
            return{...state, counterArr: decrementArr};
        case "GENERATE_COUNTERS":
            const generatedCounterArr = new Array(parseInt(action.payload))
                .fill(0)
                .map(()=>({id: generateRandomId(), number:0}));

            return {...state, counterArr: generatedCounterArr};
        case "COUNTER_SUM":
            return{...state, counterSum: state.counterSum + action.payload};
        case "CLEAR_SUM":
            return {...state, counterSum: 0};
        default:
            return state;
    }
};

export default counterReducer;