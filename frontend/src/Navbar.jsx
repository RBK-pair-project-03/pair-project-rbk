import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function ColorSchemesExample(props) {
  return (

      <Navbar style={{backgroundColor:"black"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color:"white",marginLeft:"-15%"}}>BichBich</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>props.c("Allcarts")} style={{color:"white",marginLeft:"10%"}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{props.c("category")}} style={{color:"white",marginLeft:"20%"}}>Category</Nav.Link>
            <Form className="d-flex">
            <input type="text" style={{borderRadius:"3px",marginLeft:"60%", paddingLeft:"180px"}} />
            <Button variant="outline-success" style={{marginLeft:"05px",marginTop:"01px"}}>Search</Button>
          </Form>
            <Nav.Link style={{color:"white",marginLeft:"130%"}} onClick={()=>props.c("cart")}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}



export default ColorSchemesExample;
