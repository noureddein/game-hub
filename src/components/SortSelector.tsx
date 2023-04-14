import {
    Box,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface MenuItem {
    id: number;
    value: string;
    label: string;
}

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const menuItems: MenuItem[] = [
    { id: 1, value: "", label: "Relevance" },
    { id: 2, value: "-added", label: "Date added" },
    { id: 3, value: "name", label: "Name" },
    { id: 4, value: "-released", label: "Release date" },
    { id: 5, value: "-metacritic", label: "Popularity" },
    { id: 6, value: "-rating", label: "Average rating" },
];

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const currentSortOrder = menuItems.find(
        (e) => sortOrder === e.value
    );

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    <HStack>
                        <Text>Order by: </Text>
                        <Text fontWeight="bold">
                            {currentSortOrder?.label || "Relevance"}
                        </Text>
                    </HStack>
                </MenuButton>
                <MenuList>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            onClick={() => onSelectSortOrder(item.value)}>
                            {item.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default SortSelector;
