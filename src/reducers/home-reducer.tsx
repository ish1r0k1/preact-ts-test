import * as HomeActions from '../actions/home';

export type State = {
    count: number;
};

export const initialState: State = {
    count: 0
};

export default (state = initialState, action: HomeActions.Action) => {
    switch (action.type) {
        case HomeActions.ActionTypes.INCREMENT_COUNTER:
            return Object.assign({}, state, { count: state.count + 1 });
        case HomeActions.ActionTypes.DECREMENT_COUNTER:
            return Object.assign({}, state, { count: state.count - 1 });
        default:
            return state;
    }
};
