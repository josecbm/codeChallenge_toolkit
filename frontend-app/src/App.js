import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dataTable, setDataTable] = useState([])
  useEffect(() => {
    const fetchPostList = async () => {

      const { data } = await axios.get('http://localhost:3000/files/data');
      console.log(data)
      setDataTable(data)
    }
    fetchPostList();
  }, [])

  return (
    <div className="App">
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
              dataTable.length > 0 && (
                dataTable.map(item => (
                  
                    item.lines.map((line,index) => (
              
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
