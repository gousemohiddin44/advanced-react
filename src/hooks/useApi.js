import { useState } from 'react';

export default (apiFunc) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const request = async (...args) => {
        setLoading(true);
        try {
            const res = await apiFunc(...args);
            setData(res.data);
        } catch(err) {
            setError(err.message || "Unexpected Error");
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        error,
        loading,
        request
    }
};
