/** @format */

import { observer as ObserverMbx } from "mobx-react-lite";

export function observer<T>(Component: T) {
    return ObserverMbx(Component);
}
