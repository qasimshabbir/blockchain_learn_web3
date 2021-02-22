import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { adoptPet, initWeb3 } from './store/adoptionSlice';
import imgLoader from './loader.gif';
import { Error } from './components/Error';

function App() {
  const {web3,pets,adopters,isLoading} = useSelector(state=>state.adoption);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!isLoading)  
      dispatch(initWeb3());  
  }, []);
 
  
  
  //Don't render if adopters not loaded
  if(!adopters) return '';

  
  const emptyAddress = "0x0000000000000000000000000000000000000000"; 
  console.log("In App",pets);


  return (
    <>
    <div className="header">
      Hello Pet Shop 
    </div>
    <Error />
    <div>
    {pets.map((pet,index)=>(
        <div className="card">
          <img alt="140x140" src={`${pet.picture}`} />
          <div className="container">
            <h4>{pet.name}</h4>
            <div><b>Breed:</b> {pet.breed}</div>
            <div>{pet.age} years old</div>
            <div>{pet.location}</div>
            
          </div>
          {adopters[index]===emptyAddress?
            isLoading?<img className="loader" src={imgLoader} />:
              <button onClick={()=>{
                dispatch(adoptPet(index));
              }}>Adopt</button>:
            <b className="adopted">Adopted</b>
          }
        </div>
    )
    )}
    </div>
      
    </>
  );
}

export default App;
