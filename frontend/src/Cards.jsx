import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <div style={{paddingTop:"120px"
  ,paddingBottom:"180px"}}>
        {props.datas.map((e=>{
            return(
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={e.imageUrl} onClick={()=>props.one()} />  
   <Card.Body>
     <Card.Title>{e.name}</Card.Title>
     <Card.Text>{e.gender} {e.category}</Card.Text>
     <Card.Text>{e.state}</Card.Text>
     <Card.Text>price: {e.price}</Card.Text>
     <Button variant="primary">Buy</Button>
   </Card.Body>
 </Card>
 
            )}))
            }
    </div>
  );
}

export default Cards;