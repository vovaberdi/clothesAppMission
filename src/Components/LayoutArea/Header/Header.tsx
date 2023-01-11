import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import {  Divider, IconButton, useColorMode, Stack, Box, Button } from "@chakra-ui/react";
import { FaAlignJustify, FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import React from "react";




function Header(): JSX.Element {

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const { colorMode, toggleColorMode } = useColorMode()

    const navigate = useNavigate();

   

    
    return (
        <div className="Header">
            <Button onClick={toggle}><FaAlignJustify/></Button>     <Button borderRadius={100} onClick={()=>navigate(-1)}><FaArrowLeft/></Button>
            <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
            <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
            <IconButton aria-label="toggle theme"rounded="full"size="xs"position="absolute"left={10}onClick={toggleColorMode}icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} />

            <NavLink onClick={toggle} className="myPages" to="/">Home</NavLink>
            <span> | </span>
            <NavLink onClick={toggle} className="myPages" to="/ClothesList">ClothesList</NavLink>
            <span> | </span>
            <NavLink onClick={toggle} className="myPages" to="/AddVication">AddVication</NavLink>
            <span> | </span> 
            <NavLink onClick={toggle} className="myPages" to="/AddVication">AddVication</NavLink>
            <br/>
            <Divider boxShadow='dark-lg' mt="1rem" orientation='horizontal' />
            </Stack>
            </Box>
        </div>
    );
}

export default Header;
