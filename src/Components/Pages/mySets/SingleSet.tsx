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

    let timesPants = props.pants_timestamp;
    let timesShirt = props.shirt_timestamp;
    let timesShoes = props.shoes_timestamp;

    let date1 = new Date(timesPants);
    let date2 = new Date(timesShirt);
    let date3 = new Date(timesShoes);

    let timestamps = [timesPants, timesShirt, timesShoes];
    let timestampsInMs: number[] = [];

     timestamps.forEach(timestamp => {
     timestampsInMs.push(new Date(timestamp).getTime());
    });

     let minTimestamp = Math.min(...timestampsInMs);
     let maxTimestamp = Math.max(...timestampsInMs);

     let createdAt = new Date(minTimestamp); 
     let stringIt = createdAt.toString();
     let dateOnly = stringIt.match(/^.*?(?=\sGMT)/g);

     let makeSetTime = (maxTimestamp - minTimestamp);

     console.log(dateOnly)


    return (
        <div className="SingleSet">
               {!props && <div>Loading...</div>}
               {<Card  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
                    Set
                    </Text>
                     <CardHeader>
                     <Heading size='md'>set Creation :{dateOnly}</Heading>
                     <Heading size='md'>time for Creation :{makeSetTime}</Heading>
                   </CardHeader>
                   <CardBody>
                     <Text>{props.shirt_brand}{props.shirt_size}{props.shirt_color}</Text>
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
