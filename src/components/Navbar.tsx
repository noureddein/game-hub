// ** Chakra imports
import { HStack, Image, Link, Button, Avatar } from "@chakra-ui/react";

// ** Third-party packages imports
import { Link as ReachLink } from "react-router-dom";

// ** Hooks imports
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";

// ** Components imports
import ColorModeSwitch from "./ColorModeSwitch";

// ** Assets imports
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import backendClient from "../services/backend-client";

interface Props {
    onSearch: (searchText: string) => void;
}

const getProfile = async () => {
    console.log("clicked");
    try {
        const res = await backendClient.get("/v1/user/profile/113", {
            withCredentials: true,
        });

        console.log("User profile data", res);
    } catch (error) {
        console.log("User profile data", error);
    }
};

const Navbar = ({ onSearch }: Props) => {
    const { auth } = useAuth();
    const refreshToken = useRefreshToken();
    return (
        <HStack padding="10px">
            <Link as={ReachLink} to="/">
                <Image src={logo} alt="logo" boxSize="60px" width="70px" />
            </Link>
            <SearchInput onSearch={onSearch} />
            <HStack>
                {auth?.accessToken ? (
                    <>
                        <Button onClick={() => refreshToken()}>Test</Button>
                        <Link
                            as={ReachLink}
                            to="/profile"
                            style={{ margin: ".25rem" }}
                            isExternal={false}
                        >
                            Profile
                        </Link>
                        <Avatar
                            size="md"
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                            onClick={() => getProfile()}
                        />
                    </>
                ) : (
                    <>
                        <Link
                            as={ReachLink}
                            to="/login"
                            style={{ margin: ".25rem" }}
                            isExternal={false}
                        >
                            Login
                        </Link>
                        
                        <Button
                            as={ReachLink}
                            to="/register"
                            style={{ margin: ".25rem" }}
                            variant="outline"
                            bg="green.500"
                        >
                            Register
                        </Button>
                    </>
                )}
            </HStack>
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
