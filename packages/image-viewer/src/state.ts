/** @format */

import { hiddenBars, showBars } from "./status";
import { clampHidden, timeSteper, timerCallBackProcess } from "./utils";

export enum Actions {
    START_STOPING,
    END_STOPING,
    TOOGLE_STOPING,
    TIMMER,
    HIDDEN,
    SHOW,
}

export type StateType = {
    timer: number;
    time: number;
    stop: boolean;
    hidden: boolean;
};

export const initialState: StateType = {
    hidden: false,
    stop: false,
    time: 0,
    timer: 0,
};

export function reducer(timeOut: number) {
    return (state: StateType, action: Actions): StateType => {
        switch (action) {
            case Actions.TIMMER:
                const hidden1 = state.time >= timeOut;
                hidden1 && !state.hidden && hiddenBars();
                return {
                    ...state,
                    hidden: clampHidden(state.hidden, hidden1),
                    timer: timeSteper(state.timer),
                    time: timerCallBackProcess(state.stop, timeOut)(state.time),
                };
            case Actions.START_STOPING:
                return {
                    ...state,
                    stop: true,
                };
            case Actions.END_STOPING:
                return {
                    ...state,
                    stop: false,
                };
            case Actions.TOOGLE_STOPING:
                const hidden = !state.hidden;
                hidden ? showBars() : hiddenBars();
                return {
                    ...state,
                    time: 0,
                    hidden,
                };
            default:
                return state;
        }
    };
}
