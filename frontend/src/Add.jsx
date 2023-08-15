import React,{useEffect, useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Add(props) {
const [added,setAdded]= useState({
imageUrl:"",
name : "",
gender:"",
category:"",
price:""
})

const handleChange=(e)=>{
    setAdded({[e.target.name]:e.target.value})
}
const handleClick = ()=>{
axios.post("http://localhost:5000/api/products",added).then((result)=>console.log(result)).catch(err=>console.log(err))
}
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="name"
          name='name'
          onChange={(e)=>handleChange(e)}
        />
        <TextField
        required
        id="outlined-required"
        label="description"
        name='description'
        onChange={(e)=>handleChange(e)}
      />
      <TextField
          required
          id="outlined-required"
          label="category"
          name='category'
          onChange={(e)=>handleChange(e)}
        />
      <TextField
        required
        id="outlined-required"
        label="price"
        name='price'
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        required
        id="outlined-required"
        label="imageUrl"
        name='imageUrl'
        onChange={(e)=>handleChange(e)}
      />
      </div>
      <button
      onClick={()=>{
        handleClick()
      alert("added succesfully")
      }
      }
      >update</button>
    </Box>
  );
    }