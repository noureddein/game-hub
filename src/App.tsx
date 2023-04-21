// ** React imports
import { useState } from "react";

// ** Chakra imports
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

// ** Components imports
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

// ** Types imports
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";

// ** Hooks imports
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const onSelectGenre = (genre: Genre | null) =>
        setGameQuery({ ...gameQuery, genre });

    const onSelectPlatform = (platform: Platform | null) =>
        setGameQuery({ ...gameQuery, platform });

    const onSelectSortOrder = (sortOrder: string) =>
        setGameQuery({ ...gameQuery, sortOrder });

    const onSearch = (searchText: string) =>
        setGameQuery({ ...gameQuery, searchText });

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, // Wider than 992px
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}>
            <GridItem area="nav">
                <Navbar onSearch={onSearch} />
            </GridItem>
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
}

export default App;
