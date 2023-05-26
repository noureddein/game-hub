// ** React imports
import { useState } from "react";

// ** Third-party packages
import { Route, Routes } from "react-router-dom";

// ** Types imports
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";

// ** Components imports
import RequireAuth from "./components/RequireAuth";

// ** Routes imports
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Layout from "./components/Layout";
import UserProfile from "./routes/UserProfile";
import NotFound from "./routes/NotFound";

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
        <Routes>
            <Route path="/" element={<Layout onSearch={onSearch} />}>
                {/* Public Routes */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route element={<RequireAuth />}>
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
                    <Route path="/profile" element={<UserProfile />} />
                </Route>

                {/* Catch all unregistered routes */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
