import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Text, Divider, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";




function Header(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()

    const [currUser, setCurrUser] = useState("");
    const navigate = useNavigate();

   

    
    return (
        <div className="Header">
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
        </div>
    );
}

export default Header;
