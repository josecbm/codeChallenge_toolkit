import logo from './logo.svg';
import './App.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import fileSlice, { selectItems } from './features/fileSlice';
import { useDispatch } from 'react-redux'
import { addItems } from './features/fileSlice'
import { useSelector } from 'react-redux'
function App() {
  const [dataTable, setDataTable] = useState([])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios.get('http://localhost:3000/files/data');
      setDataTable(data)
      dispatch(addItems(data))
    }
    fetchPostList();
  }, [])

  const handleSearch = () =>{
    setSearch("");
  }
  

  return (
    <div className="App">
      <Navbar expand="lg" style={{ backgroundColor: 'red', color: 'white' }}>
        <Container style={{ backgroundColor: 'red' }}>
          <Navbar.Brand href="#home" style={{ color: 'white', fontWeight: 'bold' }}>Toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => setSearch(e.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:'white'}} onClick={handleSearch}>Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Container>
        <h1>Toolkit Challenge</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>FileName</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {
              items.length > 0 && (
                items.map(item => (
                  item.lines.map((line, index) => (
                    <tr key={index}>
                      <td>{item.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  ))
                )
                )
              )
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
