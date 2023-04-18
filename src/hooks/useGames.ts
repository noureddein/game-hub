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
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
    const params = {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        },
    };

    const deps = [
        gameQuery.genre?.id,
        gameQuery.platform?.id,
        gameQuery.sortOrder,
        gameQuery.searchText,
    ];

    return useData<Game>("/games", params, [...deps]);
};

export default useGames;
