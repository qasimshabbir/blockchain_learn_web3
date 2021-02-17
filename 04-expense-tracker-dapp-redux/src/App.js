import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Error } from './component/Error';
import { ETHAccountInfo } from './component/ETHAccountInfo';
import { Header } from './component/Header.js';
import { History } from './component/History.js';
import { loadBlockchain } from './middleware/asyncActions';


function App() {
    const status = useSelector( (state) => {
      console.log("Getting Status in App",state.appReducer.status);
      return state.appReducer.status;
    });
    const dispatch = useDispatch();

    console.log("In App",status);
    useEffect(() => {
      if(status==='idle'){
        console.log("Loading Blockchain");
        dispatch(loadBlockchain());        
      }
    }, [status]);

    if(status==='failed'){
      return <Error />
    } 
    if(status!=='succeeded'){
        return <div> Loading...</div>;
    }
    
  return (
    <>
      <Header></Header>
      <div className="container">
        <ETHAccountInfo />
        <Balance />
        <History />
        <Error />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;

