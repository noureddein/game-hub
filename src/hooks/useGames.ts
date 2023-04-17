// ** Hooks imports
import useData from "./useData";

// ** Types imports
import { type GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
    const params = {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
        },
    };

    const deps = [
        gameQuery.genre?.id,
        gameQuery.platform?.id,
        gameQuery.sortOrder,
    ];

    return useData<Game>("/games", params, [...deps]);
};

export default useGames;
