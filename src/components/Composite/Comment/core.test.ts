/** @format */
import { CommentPreProcessor } from "./core";
import { comments } from "./commet.data.json";

test("preProcess data", () => {
    const pr = new CommentPreProcessor(comments);
    console.log(JSON.stringify(pr.detCommentPreProcessed(), null, 4));
    expect(0).toBe(0);
});
