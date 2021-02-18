import React from 'react'
import { useSelector } from 'react-redux';

export const Error = () => {
    
    const {error} = useSelector(state=>state.adoption);
    if(!error) return '';
    return (
        <div className="error">
            <h4>Error:</h4>
            {error}
        </div>
    )
}
