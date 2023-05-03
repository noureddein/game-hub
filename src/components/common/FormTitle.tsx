import { Box, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

const FormTitle = ({ title }: Props) => {
    return (
        <Box w="100%">
            <Text
                paddingY="2rem"
                textAlign="center"
                fontSize="5xl"
                fontWeight="bold"
            >
                {title}
            </Text>
        </Box>
    );
};

export default FormTitle;
