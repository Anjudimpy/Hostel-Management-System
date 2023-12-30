
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


function Footer() {

    // const [name,setName]=useState(" ");
    // const [email, setEmail] =useState(" ");
    const [form,setForm]=useState({});  //
    const [data,setData]=useState([]);

    const addData =()=>{
        // setData([...data,{name, email}]);
        // setName("");
        // setEmail("");
        setData([...data, form]);//
        setForm("form");//
    }
    const remove=(index)=>{
        let arr=data;
        arr.splice(index,1);
        setData([...arr]);
    }
    const handlePress =(event)=>{
      if(event.key ==='Enter'){
      addData();
      }
    }
 
  return (
  
<div>
<Stack direction="row" spacing={2}>
<TextField
onKeyPress={(e) => handlePress(e)}
// value={name} 
value={form.name}//
// onChange={(event)=>setName(event.target.value)}
onChange={(event)=>setForm({...form, name:event.target.value})}//
id="outlined-basic" 
label="name"
 variant="outlined" />
<TextField 
// value={email}
onKeyPress={(e) => handlePress(e)}
value={form.email}
id="outlined-basic" 
// onChange={(event)=>setEmail(event.target.value)}
onChange={(event)=>setForm({...form, email:event.target.value})}//
label="email"
 variant="outlined" />
      <Button onClick={addData} variant="contained" color="error">
        <AddIcon/>
      </Button>
      </Stack>

      <div className='data'>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
      </div>

      {data.map((element,index)=> {
        return(
            <div key={index} className='data'>
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <button onClick={()=>remove(index)}>DELETE</button>
            </div>
        );
      })
    }
</div>

  
  );
}

export default Footer;