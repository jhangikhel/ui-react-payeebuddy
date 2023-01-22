import axios from "axios";
import { useState } from "react";
const useHttp = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios({
                method: requestConfig.method ? requestConfig.method : 'GET',
                url: requestConfig.url,
                body: requestConfig.body ? requestConfig.body : null
            });
            if (response.status !== 200) {
                throw new Error("Request Failed");
            }
        }
        catch (err) {
            setError(err);
        }
        finally {
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        error,
        sendRequest
    }
};
export default useHttp;