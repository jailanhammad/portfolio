import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TestState from './TestState';
import img from '../Assets/1.webp';
import './TestAPI.css';

const TestAPI = () => {

    // const callGetAPI = () => {

    //     const res = axios.get("https://dummyjson.com/products/1");
    //     console.log(res);

    // }

    const [resData , setresData] = useState("111");

    useEffect(() =>

    {
        const callGetAPI = async () =>
        {
            const res = await axios.get("https://dummyjson.com/products/1");
            setresData(res.data);
        };
    
        callGetAPI()

    },[]);

console.log(resData);


    return (  

        <>
<TestState />

<h1>
{resData.title}
</h1>
<p>
    {resData.description}
</p>
<p>
    {resData.availabilityStatus}
</p> 
<p>
    {resData.brand}
</p> 
<p>
    {resData.category}
</p> 
<p>
    {resData.dimentions}
</p>
<p>
    {resData.returnPolicy}
</p>
<p>
    {resData.shippingInformation}
</p>
<p>
    {resData.sku}
</p>
<p>
    {resData.stock}
</p>
<p>
    {resData.tags}
</p>
<p>
    {resData.warrantyInformation
}
</p>
<img src={img} className='imgwidth'/>



        </>
    );
}
 
export default TestAPI;