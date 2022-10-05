import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({visitedCountries}) => {
    return(
        <div className="visited">
            <h2>All the countries I've visited!</h2>
            <ul>
                {
                    visitedCountries.map((countryName,index)=>{
                        return(
                            <li key={countryName+index}>{countryName}</li>
                        )
                    })
                }
            </ul>
            
            
        </div>
    );
}

export default VisitedCountriesList;