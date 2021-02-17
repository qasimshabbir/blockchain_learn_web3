import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export const ETHAccountInfo = () => {
    const web3 = useSelector(state => state.appReducer.web3);
    const accounts = useSelector(state => state.appReducer.accounts);
    
    const [accountBalance, setAccountBalance] = useState(0);
       
    
    useEffect(()=>{
        (async ()=>{
            console.log("in usEffect = ",web3);
            if(web3 && accounts[0]){
                const balance = await web3.eth.getBalance(accounts[0]);
                setAccountBalance(web3.utils.fromWei(balance,"ether"));
            }
        })();
    },[web3,accounts])

    function accountDisplay(){
        if(accounts && accounts[0]){
            return (
                <div>
                    <h4>Address: </h4>
                    <div>{accounts[0]}</div>
                    <h4>Balance: </h4>
                    <span className="money plus">{accountBalance} Ether</span>
                </div>);
        }
        else {
            return <div>Loading Web3 and Account Details</div>
        }
    }
    return (
        <>
        <h3>Ethereum Account Details</h3>
       <div className="eth-account-info-container">
            {
                accountDisplay()
            }
            
        </div>
        </>
    )
}
