import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// const subreddit = "hello fucking redux thunk";

function selectSubreddit(subreddit) {
    return {
      type: 'SELECT_SUBREDDIT',
      subreddit
    }
}

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
      case 'SELECT_SUBREDDIT':
        return action.subreddit
      default:
        return state
    }
}

const func1 = ()=>{
    return {
        type : "func1",
        payload : "action for first reducer"
    }
}

const firstReducer = (state={}, action) => {
    console.log(action)
    switch(action.type){
        case "func1" : 
            return action.payload
        default:
            return "first reducer"
    }
}
const secondReducer = (state={}, action) => {
    return "Second reducer";
}

const rootReducer = combineReducers({firstReducer, secondReducer, selectedSubreddit})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

store.dispatch(func1());
store.dispatch(selectSubreddit('reactjs modified'));


export default store;