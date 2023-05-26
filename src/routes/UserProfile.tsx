import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();

    useEffect(() => {
        const controller = new AbortController();

        const getUserProfile = async () => {
            try {
                const res = await axiosPrivate.get(
                    `/v1/user/profile/${auth.user?.id}`,
                    {
                        signal: controller.signal,
                    }
                );
                setProfile(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUserProfile()

        return () => controller.abort();
    }, []);

    console.log({ profile });
    return <div>profile</div>;
};

export default UserProfile;
