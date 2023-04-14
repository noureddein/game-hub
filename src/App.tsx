// ** React imports
import { useState } from "react";

// ** Chakra imports
import { Grid, GridItem, Show } from "@chakra-ui/react";

// ** Components imports
import { Navbar } from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

// ** Hooks imports
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/usePlatforms";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );

    const onSelectGenre = (genre: Genre | null) => setSelectedGenre(genre);
    const onSelectPlatform = (platform: Platform | null) =>
        setSelectedPlatform(platform);

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
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" padding="10px">
                <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform}/>
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
            </GridItem>
        </Grid>
    );
}

export default App;
