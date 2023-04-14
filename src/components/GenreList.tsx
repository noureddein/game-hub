import {
    Image,
    HStack,
    List,
    ListItem,
    Spinner,
    Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <List>
            <ListItem paddingY="5px">
                <Button
                    onClick={() => onSelectGenre(null)}
                    fontSize="lg"
                    variant="link"
                    fontWeight={!selectedGenre ? "bolder" : "normal"}
                    color={!selectedGenre ? "green.400" : ""}>
                    All
                </Button>
            </ListItem>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack >
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            fontSize="lg"
                            variant="link"
                            fontWeight={
                                selectedGenre?.id === genre.id
                                    ? "bolder"
                                    : "normal"
                            }
                            colorScheme={
                                selectedGenre?.id === genre.id
                                    ? "green"
                                    : ""
                            }>
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
