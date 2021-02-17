import imgLoader from '../loader.gif';
import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import {addError} from '../store/AppSlice';
import { pushTransaction } from '../middleware/asyncActions';

export const AddTransaction = () => {
    //getting redux dispatch
    const dispatch = useDispatch();

    //getting redux states
    //const contract  = useSelector(state => state.contract);
    //const accounts  = useSelector(state => state.accounts);

    //setup local stat vars
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState(false);

    function getRandomId(){
        return Math.round((Math.random()*100000)+1);
    }

    function onSubmit(e){
        e.preventDefault();
        
        if(text === '' || amount === '0'){
            dispatch(addError('Nothing added'));
            setError('Nothing added');
            return false;
        }

        const newTransaction = {
            id: getRandomId(),
            text: text,
            amount: +amount
        }
        setLoader(true);
        //calling async function
        dispatch(pushTransaction(newTransaction));
        setText('');
        setAmount(0);
        setError('');
        setLoader(false);
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit = {onSubmit}>
            <div className="form-control">
                <label >Text</label>
                <input type="text" onChange={(e)=>setText(e.target.value)} value={text}  />
            </div>
            <div className="form-control">
                <label 
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input 
                    type="number" 
                    style= {{
                        backgroundColor: (error?'red':'white')
                    }}
                    
                    onChange={(e)=>setAmount(e.target.value)}  value={amount} 
                />
            </div>
            {!loader && <button className="btn">Add transaction</button>}
            {loader && <img src={imgLoader} alt="Loading"></img>}
            
        </form>
        </>
    )
}
