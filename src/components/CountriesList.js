import CountryListItem from "./CountryListItem";

const CountriesList = ({countryNames,onClick}) => {
    return(
        <div className="countries">
            <h2>CountriesList!</h2>
            <ul>
                {
                countryNames.map((countryName,index)=>{
                    return (
                        <CountryListItem key={countryName + index} countryName={countryName} onClick={onClick}/>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default CountriesList;