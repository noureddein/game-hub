// ** Chakra imports
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

// ** Components imports
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

// ** Types imports
import { type Genre } from "../hooks/useGenres";
import { type Platform } from "../hooks/usePlatforms";
import { type GameQuery } from "../App";

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    onSelectPlatform: (platform: Platform | null) => void;
    onSelectSortOrder: (sortOrder: string) => void;
    gameQuery: GameQuery;
}

const Home = ({
    onSelectGenre,
    onSelectPlatform,
    onSelectSortOrder,
    gameQuery,
}: Props) => {
    return (
        <Grid
        templateAreas={{
            base: `"main"`,
            lg: `"aside main"`, // Wider than 992px
        }}
        templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
        }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={onSelectGenre}
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box padding="10px">
                    <GameHeading gameQuery={gameQuery} />
                    <HStack marginBottom={5} spacing={5}>
                        <PlatformSelector
                            onSelectPlatform={onSelectPlatform}
                            selectedPlatform={gameQuery.platform}
                        />
                        <SortSelector
                            onSelectSortOrder={onSelectSortOrder}
                            sortOrder={gameQuery.sortOrder}
                        />
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Home;
