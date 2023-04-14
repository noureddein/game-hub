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

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder
            },
        },
        [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]
    );

export default useGames;
