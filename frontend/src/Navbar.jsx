import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';



function ColorSchemesExample() {
  return (

      <Navbar style={{backgroundColor:"black"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color:"white",marginLeft:"-15%"}}>BichBich</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:"white",marginLeft:"10%"}}>Home</Nav.Link>
            <Nav.Link style={{color:"white",marginLeft:"10%"}}>Category</Nav.Link>
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{backgroundColor:"white",marginLeft:"290%",paddingLeft:"500%"}}
            />
            <Button variant="outline-success" style={{color:"white"}}>Search</Button>
          </Form>
            <Nav.Link style={{color:"white",marginLeft:"270%"}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}



export default ColorSchemesExample;
