import { Grid, GridItem,  Box,  VStack } from "@chakra-ui/react";
import FormTitle from "./FormTitle";

interface Props {
    children: React.ReactNode;
    formTitle: string;
}

const FormLayout = ({ children, formTitle }: Props) => {
    return (
        <Grid
            templateColumns={{
                base: "repeat(6, 1fr)",
                md: "repeat(6, 1fr)",
            }}
            gap={0}
            marginTop={7}
        >
            <GridItem
                colStart={{
                    base: 2,
                    xl: 3,
                }}
                colEnd={{
                    base: 6,
                    xl: 5,
                }}
            >
                <VStack border="2px" borderColor="gray.400" borderRadius={5}>
                    <FormTitle title={formTitle} />
                    <Box w="100%" margin="0px" padding={7}>
                        {children}
                    </Box>
                </VStack>
            </GridItem>
        </Grid>
    );
};

export default FormLayout;
