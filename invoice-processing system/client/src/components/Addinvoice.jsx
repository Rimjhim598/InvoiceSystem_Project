import {Box,Typography} from '@mui/material';
import {TextField,Button,styled} from'@mui/material';
import { useState } from 'react';
import {saveInvoice} from '../services/api';
const Component=styled(Box)({
    marginTop:20,
    '& > p':{
       fontsize:26,
       marginBottom:10
    },
    '&>div>div':{
        marginRight:20,
        minWidth:200
    }
})
const defaultObj={
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action:'pending'

}
const AddInvoice=({setAddInvoice})=>{
    const [invoice,setInvoice]=useState(defaultObj);
    const onValueChange=(e)=>{
      setInvoice({...invoice,[e.target.name]:e.target.value});
    }
    const addNewInvoice=async()=>{
     await saveInvoice({...invoice,amount:Number(invoice['amount'])});
     setAddInvoice(false)
    }
    return (
        <Component>
           <Typography>
            Add Invoice
           </Typography>
           <Box>
            <TextField
                variant="standard"
                placeholder='name of vendor'
                onChange={(e)=>onValueChange(e)}
                name="vendor"
            />
            <TextField
                variant="standard"
                placeholder='name of product'
                onChange={(e)=>onValueChange(e)}
                name="product"
            />
            <TextField
                variant="standard"
                placeholder='price of product'
                type="number"
                onChange={(e)=>onValueChange(e)}
                name="amount"
            />
            <TextField
                variant="standard"
                placeholder='Date'
                type="Date"
                onChange={(e)=>onValueChange(e)}
                name="date"
                
            />
            <Button variant="contained"
            onClick={()=>addNewInvoice()}>
                Add Invoices
                
            </Button>
           </Box>
        </Component>
    )
}
export default AddInvoice;