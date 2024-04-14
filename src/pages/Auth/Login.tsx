import React from 'react';
import Box from '@mui/material/Box';
import { Hidden } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { display, fontSize, height, margin, textAlign } from '@mui/system';
const backgroundLogin = {
 height:'100vh',
 backgroundColor:'red',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',

    
  };
const botaoLogin ={
    marginTop: 2,
    width: '70%',
    height: 45,
    borderRadius: 50,
    fontFamily: "Markazi Text",
  
    border:'none',
    backgroundColor: 'red',
    color:'white', 
    fontSize: 24,
    ':hover': {
        backgroundColor: '#b81414',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      

}
const botaoCadastro ={
    marginTop: 2,
    width: '70%',
    height: 45,
    borderRadius: 50,
    fontFamily: "Markazi Text",
  
    border:2,
    backgroundColor: 'transparent',
    color:'red', 
    fontSize: 24,
    ':hover': {
        backgroundColor: '#b81414',
        border:'none',
        color:'white', 
      },
      

}
  const subLogin ={

    fontSize:30,
    fontWeight: '600'
  }
  const titleLogin = {
  
    fontSize:50,
    fontWeight: 'bold'
    
   
       
     };
     
  
const PicLogin = {
    
    position: 'absolute',
    bottom: '0',
    
    };
    const estiloBox = {
        marginTop: 3,
        float: 'left',
        textAlign:'center',
        width: '50%',
        height:550,
        padding: '10px',
      };
function Login() {
  return (
    <div style={backgroundLogin}>
     
      <Box
      height={500}
      width={900}
    bgcolor={'white'}
    margin="auto"
    borderRadius={2}
     position={'relative'}
    >
     <Box sx={estiloBox}> 
        <h3 style={titleLogin}>Poupa Fácil!</h3>
        <h5 style={subLogin}>Tenha total controle sobre suas finanças!</h5>
       <Box position={'absolute'} bottom={-6} marginLeft={7}>
        <img  src="mulher_Dinheiro.png"></img>
        </Box>
     </Box>
     
     <Box   sx={estiloBox}>
        <Box fontSize={30} fontWeight={600}>Entre com sua conta!</Box>
        <Box 
        marginTop={5}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70%' },
      }}
      noValidate
      autoComplete="off"
    >
     
     <TextField id="standard-basic" label="Insira seu email" type='email'  variant="standard" />
   
    </Box>
    <Box 
       
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70%',fontFamily: "Markazi Text", },
        
      }}
      noValidate
      autoComplete="off"
    >
     
     <TextField   id="standard-basic" label="Insira sua senha" type='password' variant="standard" />
   
    </Box>
      <Button   sx={botaoLogin}>Login</Button >
      <Box fontSize={20} marginTop={2} fontWeight={500}>Não tem conta?</Box>
      <Button   sx={botaoCadastro}>Cadastre-se</Button >
     </Box>
    </Box>
    
    </div>
  );
}

export default Login;