import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adoptPet } from '../store/adoptionSlice';
import loader from '../loader.gif';

export const PetCard = ({pet,index}) => {
    const dispatch = useDispatch();
    const {adopters,isLoading} = useSelector(state=>state.adoption);
    const [showLoader, setShowLoader] = useState(false);

    //Don't render if adopters not loaded
    if(!adopters) return '';
  
    if(isLoading) setShowLoader(true);

    const emptyAddress = "0x0000000000000000000000000000000000000000"; 
    
    const doAdoptPet = (index)=>{
        dispatch(adoptPet(index));
        setShowLoader(true);
    }
    //show button or adopted
    const showButton = () =>{
        return (
            adopters[index]===emptyAddress?
                //Nobody adopted it? show button
                <button onClick={doAdoptPet}>Adopt</button>: 
                //else remove button
                <b className="adopted">Adopted</b>
        );
    }

    return (
        <div>
            <div className="card">
                <img alt="140x140" src={`${pet.picture}`} />
                <div className="container">
                    <h4>{pet.name}</h4>
                    <div><b>Breed:</b> {pet.breed}</div>
                    <div>{pet.age} years old</div>
                    <div>{pet.location}</div>
                </div>
                {showLoader?<img src={loader} />:showButton()}
            </div>
        </div>
    )
}
