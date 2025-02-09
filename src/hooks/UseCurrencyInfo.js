import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; 

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                setData(res.rates); 
                console.log("Fetched data:", res.rates); 
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);

    return data;
}

export default UseCurrencyInfo;
