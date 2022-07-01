/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { ArchiveEditionForm } from "../../../services/forms/editions/archiveForm";
import { ArchiveEditionModelInstance } from "../../../services/forms/editions/archiveModel";
import Editor, { ControllerTypeProps, EditorProps } from "./Editor";
import { getTargetValue } from "../../../utils/transformer";

export type EditorRefType = {
    handlerSubmit?(): void;
};

const formStateController = ArchiveEditionForm.state(
    ArchiveEditionModelInstance
);

export const MSTController: React.FC<
    ControllerTypeProps<typeof formStateController>
> = ({ controller, name, render }) => {
    const valueField = controller.field(name);

    const onChange = React.useCallback(
        (value: typeof valueField.value) => {
            valueField?.inputProps?.onChange?.(getTargetValue({ name, value }));
        },
        [valueField]
    );
    return render({ value: valueField?.inputProps?.value, onChange }); //as any;
};

export const MSTControllerObservered = observer(MSTController);

export const MSTEditor = React.forwardRef<
    EditorRefType,
    {
        onSubmit?(data: any): void;
    } & Partial<EditorProps>
>(({ onSubmit, ...restProps }, ref) => {
    const handlerSubmit = React.useCallback(() => {
        const d: any = formStateController.value;
        onSubmit?.(d?.toJSON());
    }, []);

    React.useImperativeHandle(ref, () => ({
        handlerSubmit,
    }));

    return (
        <Editor
            controller={formStateController}
            controllerComponent={MSTControllerObservered}
            {...restProps}
        />
    );
});

export default observer(MSTEditor);
