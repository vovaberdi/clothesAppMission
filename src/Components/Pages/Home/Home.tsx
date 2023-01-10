import { Text, Box, Container, keyframes, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import "./Home.css";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

function Home(): JSX.Element {

  const animation = `${animationKeyframes} 4s ease-in-out infinite`;


   
    return (
        <div className="Home">
             <Container   alignItems="center" justifyContent="center">
             <Button  mt={12} onClick={()=>alert("8 sets")}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               8 sets
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>alert("8 sets")}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               11 shoes
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>alert("8 sets")}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               12 shirts
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>alert("8 sets")}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               12 pants
            </Text>
            </Button> 
      
     
            </Container>
        </div>
    );
}

export default Home;
