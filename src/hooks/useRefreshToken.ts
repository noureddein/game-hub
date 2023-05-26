import useAuth from "./useAuth";
import axios from "axios";
import Cookies from "js-cookie";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refreshToken = async () => {
        const response = await axios.get("/v1/refreshToken", {
            baseURL: 'http://localhost:3030',
            withCredentials: true,
        });

        setAuth((prev: any) => {
            console.log("Prev", {prev});
            console.log('From useRefreshToken hook', {newAccessToken: response?.data.accessToken});

            return {
                ...prev,
                accessToken: response?.data.accessToken,
            };
        });

        return response.data.accessToken
    };

    return refreshToken
};

export default useRefreshToken;
