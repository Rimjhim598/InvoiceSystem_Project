import axios from 'axios';
//'Access-Control-Allow-Origin:*'

//app.use(cors());
const API_URL='http://localhost:8090' ;
export const saveInvoice=async(payload)=>{
    try{
        return await axios.post({API_URL}+'/invoice',payload);
    }catch(error){
        console.log('Error :',error);
        return null;
    }
}
export const getAllInvoices=async()=>{
    try{
          return await axios.get(API_URL+'/invoice');
    }catch(error){
        console.log('Error :',error);
        return null;
    }
}
export const deleteInvoice=async(id)=>{
    try{
        return await axios.delete({API_URL}+'/invoice/'+{id});
    }catch(error){
        console.log('Error :',error);
        return null;
    }
}