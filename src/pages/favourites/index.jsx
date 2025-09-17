import { useContext } from "react"
import { GlobalContext } from "../../context"
import {Link} from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'


export default function Favourites(){

    const {favouriteList,handleRemoveFavourite} = useContext(GlobalContext);

    console.log(favouriteList,"favouritelist");
    return <div className="favourites">
        {
        favouriteList && favouriteList.length>0 ? (
        favouriteList.map((recipe,index) => (
          <div className="recipe-item" key={index}>
            <img src={recipe.image_url} alt={recipe.publisher} />
            <div className="category">{recipe.publisher}</div>
            <h2>
              {recipe.title.length > 25
                ? recipe.title.slice(0, 25) + "..."
                : recipe.title}
            </h2>
            <div className="favourite-buttons">
            <Link className="details-link" to={`/recipe-item/${recipe.id}`}>Recipe Details</Link>
            <span><button className="delete" onClick={() => handleRemoveFavourite(recipe.id)}><FaTrash/></button></span>
            </div>

          </div>
        ))
      ) : (
        <h1>No Favourites</h1>
      )}
    </div>
}
