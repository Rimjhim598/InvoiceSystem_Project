import React from "react";
import Header from '../components/header';
import {Box,Typography,Button} from '@mui/material';
import AddInvoice from '../components/Addinvoice';
import { useState,useEffect } from 'react';
import Invoices from '../components/Invoices';
import {getAllInvoices,deleteInvoice} from '../services/api';

const Home=()=>{
    const[addInvoice,setAddInvoice]=useState(false);
    const[invoices,setInvoices]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const response=await getAllInvoices();
            response && response.data && setInvoices(response.data);
        }
        getData();
    },[addInvoice]);
    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoices = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoices);
    }
    const toggleInvoice=()=>{
        setAddInvoice(true);
    }
    return(
        <> 
        <Header/>
        <Box style={{margin:15}}> 
        <Typography variant="h4">Invoices Pending</Typography>
        {!addInvoice &&
        <Button variant="contained" style={{margin:15}}
        onClick={()=>toggleInvoice()}>Add Invoice</Button>
          }
        {addInvoice&&<AddInvoice  setAddInvoice={ setAddInvoice}/>}
        <Box>
            <Invoices
            invoices={invoices}
            removeInvoice={removeInvoice}/>
        </Box>
        </Box>
        </>
       
    )
}
export default Home;