import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Text, Divider, IconButton, useColorMode, Stack, Box, MenuIcon, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import React from "react";
import ToggleBtn from "../../toggleBtn/toggleBtn";




function Header(): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const { colorMode, toggleColorMode } = useColorMode()

    const [currUser, setCurrUser] = useState("");
    const navigate = useNavigate();

   

    
    return (
        <div className="Header">
            <Button onClick={toggle} />
            <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
            <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]}
                   direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
            <IconButton aria-label="toggle theme"rounded="full"size="xs"position="absolute"left={10}onClick={toggleColorMode}icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} />
            <NavLink className="myPages" to="/">Home</NavLink>
            <span> | </span>
            <NavLink className="myPages" to="/ListPlaces">ListPlaces</NavLink>
            <span> | </span>
            <NavLink className="myPages" to="/AddVication">AddVication</NavLink>
            <span> | </span> 
            <NavLink className="myPages" to="/AddVication">AddVication</NavLink>
            <br/>
            <Divider boxShadow='dark-lg' mt="1rem" orientation='horizontal' />
            </Stack>
            </Box>
        </div>
    );
}

export default Header;
