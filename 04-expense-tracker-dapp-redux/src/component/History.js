import React from 'react'
import { useSelector } from 'react-redux';


export const History = () => {

    const transactions  = useSelector(state => state.appReducer.transactions);
    

    return (
        <>
        <h3>History</h3>
        <ul  className="list">
            {transactions.map( ({id,text,amount}) => (
                <li  key={id} className={` money ${(amount < 0)? 'minus':'plus'} `}>
                    {text}
                    <span>$ {amount} </span>
                </li>
            ))}
        </ul>
        </>
    )
}
