// ** Chakra imports
import { HStack, Image } from "@chakra-ui/react";

// ** Components imports
import ColorModeSwitch from "./ColorModeSwitch";

// ** Assets imports
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize="60px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar
