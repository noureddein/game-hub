// ** React imports
import { useState } from "react";

// ** Chakra imports
import { Grid, GridItem, Show } from "@chakra-ui/react";

// ** Components imports
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

// ** Types imports
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";

// ** Hooks imports
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const onSelectGenre = (genre: Genre | null) =>
        setGameQuery({ ...gameQuery, genre });

    const onSelectPlatform = (platform: Platform | null) =>
        setGameQuery({ ...gameQuery, platform });

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
                <PlatformSelector
                    onSelectPlatform={onSelectPlatform}
                    selectedPlatform={gameQuery.platform}
                />
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
