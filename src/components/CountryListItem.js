import { useState } from "react";

const CountryListItem = ({countryName, onClick}) => {

    const [hasVisited,setHasVisited]=useState(false)
    
    const handleClick = ()=>{
        const name = countryName
        onClick(name)
        setHasVisited(true)
    }
    
    return (

        hasVisited ? <li style={{textDecoration: "line-through"}}> {countryName}</li> :
        <li>
            {countryName}
            <button onClick={handleClick}>Select</button>
        </li>
    );
}

export default CountryListItem;