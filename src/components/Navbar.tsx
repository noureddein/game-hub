// ** Chakra imports
import { HStack, Image, Link  } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

// ** Components imports
import ColorModeSwitch from "./ColorModeSwitch";

// ** Assets imports
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
// import { Link } from "react-router-dom";

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <div>
                <Link
                    as={ReachLink}
                    to="/login"
                    style={{ margin: ".25rem" }}
                    isExternal={false}>
                    Login
                </Link>
                <Link as={ReachLink} to="/register" style={{ margin: ".25rem" }}>
                    Register
                </Link>
            </div>
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
