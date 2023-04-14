import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const menuItems = [
    { id: 1, name: "Relevance" },
    { id: 2, name: "Date added" },
    { id: 3, name: "Name" },
    { id: 4, name: "Release date" },
    { id: 5, name: "Popularity" },
    { id: 6, name: "Average rating" },
];

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                {menuItems.map(({ id, name }) => (
                    <MenuItem key={id}>{name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
