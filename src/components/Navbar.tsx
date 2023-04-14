// ** Chakra imports
import { HStack, Image } from "@chakra-ui/react";

// ** Components imports
import ColorModeSwitch from "./ColorModeSwitch";

// ** Assets imports
import logo from "../assets/logo.webp";

const Navbar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} alt="logo" boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar
