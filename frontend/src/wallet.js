import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@mui/material';

export default function ViewWallet() {
  const [walletData, setWalletData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setWalletData((await axios.get(`http://localhost:5000/showWallet?username=${id}`)).data);
    }
    fetchData();
  }, [id]);

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
            {walletData?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{id}</TableCell>
                <TableCell>{data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
