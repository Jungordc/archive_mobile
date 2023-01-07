/** @format */

import { QueryClient, QueryClientProvider } from "react-query";
import * as React from "react";

const queryClient = new QueryClient();

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
