import { HStack, Switch, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="md"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />
            {/* <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
                colorScheme="green"
            />
            <Text whiteSpace="nowrap">Dark Mode</Text> */}
        </HStack>
    );
};

export default ColorModeSwitch;
