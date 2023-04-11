import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGameResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </>
    );
}

export default GameGrid;
