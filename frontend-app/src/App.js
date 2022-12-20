import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import fileSlice, { selectItems } from './features/fileSlice';
import {useDispatch} from 'react-redux'
import { addItems} from './features/fileSlice'
import {useSelector} from 'react-redux'
function App() {
  const [dataTable, setDataTable] = useState([])
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  useEffect(() => {
    const fetchPostList = async () => {

      const { data } = await axios.get('http://localhost:3000/files/data');
      console.log(data)
      setDataTable(data)
      dispatch(addItems(data))
    }
    fetchPostList();
  }, [])

  useEffect(() => {
    console.log('=> items',items)
  }, [])
  
  return (
    <div className="App">
      <Navbar  expand="lg" style={{ backgroundColor: 'red' , color:'white'}}>
        <Container style={{ backgroundColor: 'red' }}>
          <Navbar.Brand href="#home" style={{color:'white', fontWeight:'bold'}}>Toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
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
