import { Badge, Box, Button, Image, } from "@chakra-ui/react";
import "./Card2.css";
import {Clothing} from "../../models/Types";






function Cards2(props:Clothing): JSX.Element {


  
  
    const checkType = (props:any) => {
      if (props == "shoes") {
        return (
         "https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      } else if (props == "shirt") {
        return (
          "https://images.pexels.com/photos/6461400/pexels-photo-6461400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      } else {
        return (
          "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      }
    }

  const property = {
    imageUrl: `${checkType(props.type)}`,
    type: `${props.type}`,
    color: ` color : ${props.color}`,
    size: ` size : ${props.size}`,
  }
    return (
        <div className='card-container'>
        <Box  boxShadow='dark-lg' maxW='sm' borderWidth='1px' borderRadius='lg'>
          <Image  overflow='hidden' src={property.imageUrl} />
        <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {props.brand}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
           {property.type}
       
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={4}
        >
          {property.color}
        </Box>

        <Box>
          {property.size}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          <Button colorScheme='green' size='xs'> Add </Button>

            {/* {property.followers} followers */}
          </Box>
          <Box>
           <Box display="grid" gridGap={3} gridAutoFlow="row dense">
            </Box>
          </Box>
          
        </Box>
        
      </Box>
    </Box>
   
       </div>
    );
}

export default Cards2;
