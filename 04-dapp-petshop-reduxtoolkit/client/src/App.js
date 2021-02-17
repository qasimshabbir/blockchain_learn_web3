import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3 } from './store/adoptionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initWeb3());  
  }, [])
  const web3 = useSelector(state=>state.adoption.web3);
  console.log("In App",web3);
  return (
    <div>
      Hello Pet Shop
    </div>
  );
}

export default App;
