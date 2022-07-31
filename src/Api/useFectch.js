import { useEffect, useState } from "react";
import axios from "axios";

function useFectch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data.results);
                console.log("popular", response.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}

export default useFectch;
