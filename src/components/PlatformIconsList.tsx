// ** Chakra components import
import { HStack, Icon } from "@chakra-ui/react";

// ** Hooks import
import { Platform } from "../hooks/useGames";

// ** React icons import
import {
    FaWindows,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaXbox,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Pros {
    platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Pros) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    as={iconMap[platform.slug]}
                    key={platform.id}
                    color={"red.200"}
                />
            ))}
        </HStack>
    );
};

export default PlatformIconsList;
