import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
    onSearch: (searchText: string) => void;
}

const Layout = ({ onSearch }: Props) => {
    return (
        <main>
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
            <Outlet />
        </main>
    );
};

export default Layout;
