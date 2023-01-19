import "./SingleSet.css";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";


interface MyMerge {
    pants_brand: string;
    pants_color: string;
    pants_id: number;
    pants_selected?: true
    pants_size: number;
    pants_timestamp: string;
    pants_type?: string;
    selected?: boolean;
    shirt_brand: string;
    shirt_color: string;
    shirt_id: number;
    shirt_selected?: boolean;
    shirt_size: string;
    shirt_timestamp: string;
    shirt_type?: string;
    shoes_brand: string;
    shoes_color: string;
    shoes_id: number;
    shoes_selected?: boolean;
    shoes_size: number;
    shoes_timestamp: string;
    shoes_type?: string;
  }
  

function SingleSet(props:MyMerge): JSX.Element {

    const toast = useToast();

    const [active, setActive] = useState(true);
    
    const timesPants = props.pants_timestamp;
    const timesShirt = props.shirt_timestamp;
    const timesShoes = props.shoes_timestamp;

    const date1 = new Date(timesPants);
    const date2 = new Date(timesShirt);
    const date3 = new Date(timesShoes);

    const timestamps = [timesPants, timesShirt, timesShoes];
    const timestampsInMs: number[] = [];

     timestamps.forEach(timestamp => {
     timestampsInMs.push(new Date(timestamp).getTime());
    });

    const minTimestamp = Math.min(...timestampsInMs);
    const maxTimestamp = Math.max(...timestampsInMs);

    const createdAt = new Date(minTimestamp); 
    const stringIt = createdAt.toString();
    const dateOnly = stringIt.match(/^.*?(?=\sGMT)/g);

    const makeSetTime = (maxTimestamp - minTimestamp) / 1000;

    console.log(dateOnly)

    const deleteSet = (props:MyMerge) => {
        console.log(props)
        localStorage.removeItem(`shoes${props.shoes_id}`);
        toasti()
        setActive(!active);
     }

     const toasti = () => {
        toast({title: 'deleted successfully',status: 'success',isClosable: true,})
      }
    return (
        <div className="SingleSet">
               {!props && <div>Loading...</div>}
               {<Card  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
                    Set
                    </Text>
                     <CardHeader>
                     <Heading textAlign='start' size='md'><Badge borderRadius='full' px='2' colorScheme='teal'>Creation</Badge>{dateOnly}</Heading>
                     <Heading textAlign='start' size='md'><Badge borderRadius='full' px='2' colorScheme='teal'>pickTime</Badge>{makeSetTime} sec</Heading>
                   </CardHeader>
                   <CardBody>
                     <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>Shirt:</Badge> {props.shirt_brand}</Text>
                     <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>color:</Badge>{props.shirt_color}</Text>
                     <Text textAlign='start'> <Badge borderRadius='full' px='2' colorScheme='teal'>size:</Badge>{props.shirt_size}</Text>
                   </CardBody>
                    <CardBody>
                    <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>Pants:</Badge> {props.pants_brand}</Text>
                     <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>color:</Badge>{props.pants_color}</Text>
                     <Text textAlign='start'> <Badge borderRadius='full' px='2' colorScheme='teal'>size:</Badge>{props.pants_size}</Text>
                   </CardBody>
                   <CardBody>
                   <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>Shoes:</Badge> {props.shoes_brand}</Text>
                     <Text textAlign='start'><Badge borderRadius='full' px='2' colorScheme='teal'>color:</Badge>{props.shoes_color}</Text>
                     <Text textAlign='start'> <Badge borderRadius='full' px='2' colorScheme='teal'>size:</Badge>{props.shoes_size}</Text>
                   </CardBody>
                   <CardFooter>
                     <Button ml='12rem' onClick={()=>deleteSet(props)}>❌</Button>
                   </CardFooter>
                 </Card>}
			
        </div>
    );
}

export default SingleSet;
