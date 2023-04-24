import React, {useState} from "react";
import PetCard from "./Pet";
const PersonCard = (props) => {
    const {lastName, firstName, personAge, hairColor,macet} = props
    const [age, setAge] = useState(personAge)
    
    return ( 
        <>
    <h2>name: {lastName}{firstName}</h2>
    <p>age : {age}</p>
    <p>hair color : {hairColor}</p>
    <button type="button" onClick={(event) => setAge (age + 1)}>Birthday Button for {firstName}</button>
    {macet ? macet.map((e,index)=> <PetCard key={index} firstName = {e.firstName} lastName = {e.lastName}  />) : "" }
   
    
    </>
    )
}

export default PersonCard;