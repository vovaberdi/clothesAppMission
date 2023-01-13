// import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { MySet } from "../../../models/Types";



export const Sets: React.FC<{ objects: MySet[] }> = ({ objects }) => {
  console.log("setCheack:", objects)
  return (
    <div>
      {objects.map((object) => (
        <div key={object.id}>
          <h1>{object.brand}</h1>
          <p>{object.type}</p>
          <h1>{object.size}</h1>
          <p>{object.color}</p>
        </div>
      ))}
    </div>
  );
}
// function Sets(props:MySet): JSX.Element {


//   return (
//     <div className="set">

           
//     </div>
//   );
// }

// export default Sets;










        {/* <Card>
                     <CardHeader>
                     <Heading size='md'>{props.brand}{props.type}</Heading>
                   </CardHeader>
                    <CardBody>
                     <Text>{props.color}{props.size}</Text>
                   </CardBody>
                   <CardFooter>
                     <Button onClick={()=>window.localStorage.clear()}>View here</Button>
                   </CardFooter>
                 </Card>  */}
