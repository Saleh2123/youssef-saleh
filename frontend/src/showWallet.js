import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@mui/material';

export default function ViewWallet() {
  const [walletData, setWalletData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setWalletData((await axios.get(`http://localhost:5000/showWallet`,{params:{username:id}})).data);
    }
    fetchData();
  }, [id]);
console.log(walletData)
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Wallet</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Wallet Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableCell>{id}</TableCell>
                <TableCell>{walletData}</TableCell>
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
