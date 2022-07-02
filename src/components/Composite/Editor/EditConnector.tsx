/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { ArchiveEditionForm } from "../../../services/forms/editions/archiveForm";
import { ArchiveEditionModelInstance } from "../../../services/forms/editions/archiveModel";
import Editor, { ControllerTypeProps, EditorProps } from "./Editor";
import { getTargetValue } from "../../../utils/transformer";
import { FormStateOptions } from "mstform";

export type EditorRefType = {
    handlerSubmit?(): void;
};

const formStateController = (options?: FormStateOptions<any>) =>
    ArchiveEditionForm.state(ArchiveEditionModelInstance, options);

export const MSTController: React.FC<
    ControllerTypeProps<ReturnType<typeof formStateController>>
> = ({ controller, name, render }) => {
    const valueField = controller.field(name);

    const onChange = React.useCallback(
        (value: typeof valueField.value) => {
            console.log("onChange: ", value);
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

export const MSTEditor = React.forwardRef<
    EditorRefType,
    {
        onSubmit?(data: any): void;
    } & Partial<EditorProps>
>(({ onSubmit, ...restProps }, ref) => {
    const controller = formStateController({
        backend: {
            process: async (node, liveOnly) => {
                console.log("Process", node);
                return node;
            },
            processAll: async (node, liveOnly) => {
                console.log("ProcessAll", node);
                return node;
            },
        },
    });
    const handlerSubmit = React.useCallback(() => {
        const d: any = controller.value;
        onSubmit?.(d?.toJSON());
    }, []);

    React.useImperativeHandle(ref, () => ({
        handlerSubmit,
    }));

    return (
        <Editor
            controller={controller}
            controllerComponent={MSTControllerObservered}
            {...restProps}
        />
    );
});

export default observer(MSTEditor);
