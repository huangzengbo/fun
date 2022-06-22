/// <reference types="react-scripts" />

interface iStock{
    code: string;
    price: number;
    time?: number;
}

interface iStockSet{
    time: Date;
    stock: iStock[];
}

interface iSummaryItem {
    name: string;
    start: number;
    low: number;
    high: number;
    current: number;
}

interface State {
    stockSet: iStockSet[];
}

type ActionTypes = 'FETCH_STOCK_SUCCESS' | 'FETCH_STOCK_FAIL';

interface Action {
    type: ActionTypes;
    payload?: any;
}

type ReducerType = (state: State, action: Action) => State;

type ContextHook = () => {
    state: State,
    dispatch: (action: Action) => void;
}