/** @format */
import omit from "lodash/omit";

type UserType = string;

export type newValueType = {
    // depth: number;
    root: string | number;
    depthOptions: {
        [x: string]: {
            isResponce: boolean;
            haveResponce: boolean;
            avatar: boolean;
        };
    };
    id: string | number;
    user: string;
    text_content: string;
};

type IComment = {
    id: number | string;
    user: UserType;
    text_content: string;
    responces: IComment[];
};

type ICommentLineValue = {
    id: number | string;
    isResponse?: boolean;
    haveResponse?: boolean;
    depth: number;
    parent?: ICommentLineValue;
};

export const A: ICommentLineValue = {
    id: 1,
    depth: 1,
    haveResponse: true,
    isResponse: false,
};

export const B: ICommentLineValue = {
    parent: A,
    depth: 2,
    isResponse: true,
    id: 2,
    haveResponse: true,
};

export class CommentPreProcessor {
    private _commentPreProcess: newValueType[] = [];
    root: number | string = 0;

    constructor(comments: IComment[]) {
        this.depther(comments);
    }

    genDepthOption = (depth: number) => {
        let gen: newValueType["depthOptions"] = {};
        for (let index = 1; index < depth + 1; index++) {
            gen = {
                ...gen,
                [index]: {
                    haveResponce: false,
                    isResponce: false,
                    avatar: depth === index,
                },
            };
        }

        const key = depth - 1;
        return {
            ...gen,
            ...(depth > 1 && {
                [key]: {
                    ...(key in gen && gen[key]),
                    haveResponce: false,
                    isResponce: true,
                },
            }),
        };
    };

    depther = (comments: IComment[], depth: number = 1) => {
        for (let index = 0; index < comments.length; index++) {
            const c = comments[index];
            const _item = omit(c, "responces");

            this.root = depth === 1 ? c.id : this.root;
            const key = depth - 1;

            this._commentPreProcess = this._commentPreProcess.map((item) => {
                if (this.root === item.root) {
                    return {
                        ...item,
                        depthOptions: {
                            ...item.depthOptions,
                            ...(key in item.depthOptions && {
                                [key]: {
                                    ...item.depthOptions[key],
                                    haveResponce: true,
                                },
                            }),
                        },
                    };
                }
                return item;
            });

            this._commentPreProcess.push({
                ..._item,
                root: this.root,
                depthOptions: this.genDepthOption(depth),
            });

            if (c.responces.length > 0) {
                this.depther(c.responces, depth + 1);
            }
        }
    };

    detCommentPreProcessed = () => {
        return this._commentPreProcess;
    };
}
