import { useState, React } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import {useParams} from"react-router-dom"
function His(){


  const [requests,setr] =useState([]);
const {id}=useParams()
  useEffect(()=>{
    async function get(){
setr((await axios.post(`http://localhost:5000/his`,{username:id})).data)
    }
    get()
},[])



  return(<div className="flex flex-col min-h-screen">
    <div className="mt-2">
        <h4>health record</h4>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="List of Requests">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                
                  <TableCell>download</TableCell>
                  <TableCell>delete</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((row) => (
                  <TableRow key={row.id}>
                   <TableCell>{row}</TableCell>
                   <TableCell> <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ 



                            axios({
                                url: `http://localhost:5000/file?file=${row}`, // Replace with your server URL
                                method: 'GET',
                                responseType: 'blob', // Important
                                
                              }).then((response) => {
                                // Create a file link in the browser's memory
                                const href = URL.createObjectURL(response.data);
                              
                                // Create an <a> HTML element with href to the file & click it
                                const link = document.createElement('a');
                                link.href = href;
                                link.setAttribute('download', row); // Replace with the desired filename or extension
                                document.body.appendChild(link);
                                link.click();
                              
                                // Clean up the dynamically created file link and remove ObjectURL
                                document.body.removeChild(link);
                                URL.revokeObjectURL(href);
                              });





                            
                        }
                      }
                      > view</button>
                      </TableCell>
                      <TableCell>
                        <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ await axios.post('http://localhost:5000/remove',{username:id,file:row});
                   
                      
setr((await axios.post(`http://localhost:5000/his`,{username:id})).data)
                      }}
                      > delete</button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

  </div>);


}


export default His;