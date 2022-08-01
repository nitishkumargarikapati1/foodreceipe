function Data({data}) {
    
    console.log(data);
    return(
        <div className="products">
        {
            data.map((d,index)=>
            <div key={index} className="product">
                    <img src={d.recipe.image} style={{"height": "25rem"}}></img>

                    <div>
                        <h2 >{d.recipe.label}</h2>

                     <div>
                       <h5>CuisineType: {d.recipe.cuisineType}</h5>
                       <h5>Calories: {Math.round(d.recipe.calories)}</h5>
                       <h5>DietLabels:  {d.recipe.dietLabels}</h5>  
                     </div>   
                        
                    </div>
                    
                </div>
                )
        }
    </div>)

}
export default Data;