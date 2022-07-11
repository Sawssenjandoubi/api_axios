import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../../index.css'
export default function Exp() {
    const [data, setData] = useState('');
    const getAllData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
        console.log(response.data);
        setData(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
        };
        useEffect(() => {
            getAllData();
           }, []);
  return (
    <div>
{data ? ( data.map((data) => {
return (
<div className="data" key={data.id}>
    
  <ul >    
<h3 >Nom:{data.name}</h3> 

<h4>Email:{data.email}</h4>
<h5>Phone:{data.phone}</h5>
</ul> 

</div>
); })) : (
<h3>No data yet</h3>
)}
    </div>
  )
}
