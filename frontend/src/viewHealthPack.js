import { useState,useEffect } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,TableHead} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
function ViewHealthPack(){

const [healthPack,seth]=useState([])
useEffect(()=>{


  async function get(){
   seth( (await axios.get("http://localhost:5000/hp")).data)
  }
  get()
})
    const handleSubscribe = () => {

    };

    return(
        <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Health Packages</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
        
            </TableRow>
          </TableHead>
          <TableBody>
            {healthPack?.map((data) => (
              <TableRow key={data._id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
             
                <TableCell>
                     <Link to={`payment/${data.name}`}>

                      <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "}
                        onClick={() => handleSubscribe()}
                      > Subscribe</button>
                    </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    );
}

export default ViewHealthPack;