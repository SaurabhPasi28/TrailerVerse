import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api.jsx";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;

// import { fetchDataFromApi } from "../utils/api";
// import { useEffect, useState } from "react";

// const useFetch = (url = "") => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!url) return;

//         const controller = new AbortController();
//         const signal = controller.signal;

//         setLoading(true);
//         setData(null);
//         setError(null);

//         fetchDataFromApi(url, { signal })
//             .then((res) => {
//                 setLoading(false);
//                 setData(res);
//             })
//             .catch((err) => {
//                 if (err.name !== "AbortError") {
//                     setLoading(false);
//                     setError(err.message || "Something went wrong!");
//                 }
//             });

//         return () => controller.abort(); // Cleanup
//     }, [url]);

//     return { data, loading, error };
// };

// export default useFetch;
