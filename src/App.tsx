// ** React imports
import { useState } from "react";

// ** Chakra imports
import { Grid, GridItem } from "@chakra-ui/react";

// ** Third-party packages
import { Route, Routes } from "react-router-dom";

// ** Components imports
import Navbar from "./components/Navbar";

// ** Types imports
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";

// ** Pages imports 
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";

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
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`, // Wider than 992px
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area="nav">
                    <Navbar onSearch={onSearch} />
                </GridItem>
            </Grid>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            onSelectGenre={onSelectGenre}
                            onSelectPlatform={onSelectPlatform}
                            onSelectSortOrder={onSelectSortOrder}
                            gameQuery={gameQuery}
                        />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
