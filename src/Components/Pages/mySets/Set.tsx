import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { MySet } from "../../../models/Types";


function Sets(props:MySet): JSX.Element {


  return (
    <div className="set">

                  <Card>
                     <CardHeader>
                     <Heading size='md'>{props.brand}{props.type}</Heading>
                   </CardHeader>
                    <CardBody>
                     <Text>{props.color}{props.size}</Text>
                   </CardBody>
                   <CardFooter>
                     <Button onClick={()=>window.localStorage.clear()}>View here</Button>
                   </CardFooter>
                 </Card>
    </div>
  );
}

export default Sets;
