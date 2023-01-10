import "./toggleBtn.css";
import { Box, MenuIcon } from "@chakra-ui/react"

function ToggleBtn({ toggle, isOpen }:any): JSX.Element {
    return (
        <div className="toggleBtn">
             <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                 {isOpen ? <MenuIcon /> : <MenuIcon />}
             </Box>
			
        </div>
    );
}

export default ToggleBtn;





