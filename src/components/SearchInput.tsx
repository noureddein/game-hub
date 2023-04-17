import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={inputRef}
                    placeholder="Search games..."
                    borderRadius={20}
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
