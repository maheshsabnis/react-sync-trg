// THis hook will be sued to make an ajax call

import React, {useEffect, useState} from "react";
import axios from 'axios';
 
// a custom hook
// this is a JavaScript Function
// this does not return any HTML 

export const useAjax=(url)=>{
    
    const [response, setResponse]=useState([]);
    
    // make a call
    useEffect(()=>{
        axios.get(url)
            .then((resp)=>{
                setResponse(resp.data);
            })
            .catch((error)=>{
                 setResponse([...response,error.message]);   
            });    
    },[]);

    return response;
};