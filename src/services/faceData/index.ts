/** @format */

import { useEffect, useState } from "react";

export default function useFakeData<T extends { id: number | string }>(
    initialData: T,
    lenght: number = 10
) {
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        const _data: T[] = new Array(lenght)
            .fill(initialData)
            .map((item, index) => ({
                ...item,
                id: `id${index}`,
            }));
        setData(_data);
    }, []);
    return data;
}
