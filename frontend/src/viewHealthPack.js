import { useState,useEffect } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,TableHead} from "@mui/material";
import { Link } from "react-router-dom";
function ViewHealthPack(){


    const healthPack  = [
        {
            id:1,
            name: "Pack ",
            provider: "pfizer",
            price: 300,
            duration: "3 years"
        },
        {
            id:2,
            name: "Pack can",
            provider: "Lfizer",
            price: 200,
            duration: "2 years"
        },
        {
            id:3,
            name: "Heart Pack",
            provider: "trefizer",
            price: 400,
            duration: "4 years"
        }
    ];

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
              <TableCell>Company/Provider</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Subscription</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {healthPack?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.provider}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.duration}</TableCell>
                <TableCell>
                     <Link to="/payment">

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