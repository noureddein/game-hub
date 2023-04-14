﻿import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data: platforms, error } = usePlatforms();

    if (error) return null;

    return (
        <Box marginBottom={3}>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || "Platforms"}
                </MenuButton>
                <MenuList>
                    {platforms.map((platform) => (
                        <MenuItem
                            key={platform.id}
                            onClick={() => onSelectPlatform(platform)}>
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default PlatformSelector;
