import React from 'react'
import { useSelector } from 'react-redux';


export const Error = () => {
    const  errors  = useSelector(state => state.appReducer.errors);
    console.log('errors: ', errors);
    
    if(!errors){
        return('');
    }
    else{
        return (
            errors.map( (error) => (
                 <div className="error"> { error } </div> 
            ))
        )
    }
}

