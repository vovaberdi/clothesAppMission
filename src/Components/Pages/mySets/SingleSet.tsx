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
    return (
        <div className="SingleSet">
               <Card>
                     <CardHeader>
                     <Heading size='md'>{props.shirt_brand}{props.shirt_size}{props.shirt_color}</Heading>
                   </CardHeader>
                    <CardBody>
                     <Text>{props.pants_brand}{props.pants_size}{props.pants_color}</Text>
                   </CardBody>
                   <CardBody>
                     <Text>{props.shoes_brand}{props.shoes_size}{props.shoes_color}</Text>
                   </CardBody>
                   <CardFooter>
                     <Button onClick={()=>window.localStorage.clear()}>View here</Button>
                   </CardFooter>
                 </Card>
			
        </div>
    );
}

export default SingleSet;
