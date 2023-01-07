/** @format */

import * as React from "react";
import { QueryClient, QueryClientProvider, onlineManager } from "react-query";
// import NetInfo from '@react-native-community/netinfo'
const queryClient = new QueryClient();

//  onlineManager.setEventListener(setOnline => {
//    return NetInfo.addEventListener(state => {
//      setOnline(state.isConnected)
//    })
//  })

type QueryProvidersProps = {
    children: React.ReactNode;
};

const QueryProviders: React.FC<QueryProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProviders;
