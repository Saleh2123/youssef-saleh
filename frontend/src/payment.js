import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Payment() {

    return(
        <Container
      style={{
        backgroundColor: 'gray',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    ><Box
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    }}
    >
        <Typography variant="h4" align="center">
          Please Select Payment Method
        </Typography>
        <Button variant="contained" color="primary">
          Credit Card
        </Button>
        <Button variant="contained" color="primary">
          Wallet
        </Button>
  </Box>
  </Container>
    )
}

export default Payment;