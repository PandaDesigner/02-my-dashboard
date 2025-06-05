import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 2,
    isReady: false
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCountState: (state, action: PayloadAction<number>) => {
            if (state.isReady) return;
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
            state.isReady = true;
        },

        addOne: (state) => {
            state.count++;
        },
        subtractOne: (state) => {
            if (state.count === 0) return;
            state.count--;
        },
        resetCount: (state, action: PayloadAction<number>) => {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    }
});

export const {
    initCountState,
    addOne,
    subtractOne,
    resetCount,
    incrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;