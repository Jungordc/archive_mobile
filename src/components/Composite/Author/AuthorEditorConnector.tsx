/** @format */

import React from "react";
import { FormStateOptions } from "mstform";
import { observer } from "mobx-react-lite";
import { AuthorEditionForm } from "../../../services/forms/author/authorFrom";
import { authorEditionIntance } from "../../../services/forms/author/authorModel";
import { getTargetValue } from "../../../utils/transformer";
import AuthorEditor, { ControllerTypeProps } from "./AuthorEditor";

export type EditorRefType = {
    handlerSubmit?(): void;
};

// form state controller of author
const formStateController = (options?: FormStateOptions<any>) =>
    AuthorEditionForm.state(authorEditionIntance, options);

export const MSTController: React.FC<
    ControllerTypeProps<ReturnType<typeof formStateController>>
> = ({ controller, name, render }) => {
    const valueField = controller.field(name);

    const onChange = React.useCallback(
        (value: typeof valueField.value) => {
            valueField?.inputProps?.onChange?.(getTargetValue({ name, value }));
        },
        [valueField]
    );
    return (
        <React.Fragment>
            {render({ value: valueField?.inputProps?.value, onChange })}
        </React.Fragment>
    );
};

export const MSTControllerObservered = observer(MSTController);

export type AuthorEditorConnectorProps = {};

const AuthorEditorConnector = React.forwardRef<
    EditorRefType,
    {
        onSubmit?(data: any): void;
    } & Partial<AuthorEditorConnectorProps>
>(({ onSubmit }, ref) => {
    const controller = formStateController();

    const handlerSubmit = React.useCallback(() => {
        const d: any = controller.value;
        onSubmit?.(d?.toJSON());
    }, []);

    React.useImperativeHandle(ref, () => ({
        handlerSubmit,
    }));
    return (
        <AuthorEditor
            controllerComponent={MSTControllerObservered}
            controller={controller}
        />
    );
});

export default observer(AuthorEditorConnector);
