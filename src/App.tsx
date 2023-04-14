// ** React imports
import { useState } from "react";

// ** Chakra imports
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

// ** Components imports
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

// ** Types imports
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";
import { type MenuItem } from "./components/SortSelector";

// ** Hooks imports
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string ;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const onSelectGenre = (genre: Genre | null) =>
        setGameQuery({ ...gameQuery, genre });

    const onSelectPlatform = (platform: Platform | null) =>
        setGameQuery({ ...gameQuery, platform });

    const onSelectSortOrder = (sortOrder: string ) =>
        setGameQuery({ ...gameQuery, sortOrder });

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, // Wider than 992px
            }}
            templateColumns={{
                base: "1fr",
                lg: "1fr 6fr",
            }}>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={onSelectGenre}
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" padding="10px">
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
            </GridItem>
        </Grid>
    );
}

export default App;
