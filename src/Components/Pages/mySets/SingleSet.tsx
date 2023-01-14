import "./SingleSet.css";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";


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
    console.log("props:", props)
    return (
        <div className="SingleSet">
               {!props && <div>Loading...</div>}
               {<Card  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
                    Set
                    </Text>
                     <CardHeader>
                     <Heading size='md'>Heding</Heading>
                   </CardHeader>
                   <CardBody>
                     <Text><p>Shirt: </p> {props.shirt_brand}{props.shirt_size}{props.shirt_color}</Text>
                   </CardBody>
                    <CardBody>
                     <Text>{props.pants_brand}{props.pants_size}{props.pants_color}</Text>
                   </CardBody>
                   <CardBody>
                     <Text>{props.shoes_brand}{props.shoes_size}{props.shoes_color}</Text>
                   </CardBody>
                   <CardFooter>
                     <Button onClick={()=>window.localStorage.clear()}>View here</Button>
                   </CardFooter>
                 </Card>}
			
        </div>
    );
}

export default SingleSet;
