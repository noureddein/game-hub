// ** Chakra components import
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

// ** Types import
import { type Game } from "../hooks/useGames";

// ** Components import
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game;
}

const truncateHeading = (title: string) => {
    const defaultLength = 17;
    const titleLength = title.length;

    if (titleLength <= defaultLength) return title;
    return `${title.substring(0, defaultLength)}...`;
};

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconsList
                        platforms={game.parent_platforms.map(
                            (p) => p?.platform
                        )}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl" title={game.name}>
                    {truncateHeading(game.name)} <Emoji rating={game.rating_top}/>
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
