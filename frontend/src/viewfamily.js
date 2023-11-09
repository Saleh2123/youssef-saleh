import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@mui/material';

export default function Family() {
  const [familyData, setFamilyData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setFamilyData((await axios.get(`http://localhost:5000/family?username=${id}`)).data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Family Members</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>National ID</TableCell>
              <TableCell>Relation</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {familyData?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.national_id}</TableCell>
                <TableCell>{data.relation}</TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
