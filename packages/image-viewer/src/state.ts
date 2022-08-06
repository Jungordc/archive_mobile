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
                state["hidden"] = clampHidden(state.hidden, hidden1);
                state["timer"] = timeSteper(state.timer);
                state["time"] = timerCallBackProcess(
                    state.stop,
                    timeOut
                )(state.time);
                return state;
            case Actions.START_STOPING:
                state["stop"] = true;
                return state;
            case Actions.END_STOPING:
                state["stop"] = false;
                return state;
            case Actions.TOOGLE_STOPING:
                // toogle state
                state.hidden ? hiddenBars() : showBars();
                state["hidden"] = !state.hidden;
                state["time"] = 0;
                return state;
            default:
                return state;
        }
    };
}
