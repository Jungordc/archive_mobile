/** @format */

import React from "react";
import { Share, ShareOptions, ShareContent } from "react-native";

export function useShare(options?: ShareOptions) {
    return React.useCallback(
        async ({
            content,
            option,
        }: {
            content: ShareContent;
            option?: ShareOptions;
        }) => {
            try {
                const result = await Share.share(content, {
                    ...options,
                    ...option,
                });
                if (result.action === Share.sharedAction) {
                    console.log(result);
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error: any) {
                alert(error.message);
            }
        },
        []
    );
}
