import { useContext } from "react";
import { GlobalContext } from "../../context";
import {Link} from 'react-router-dom'

export default function Home() {
  const { recipeData, loading } = useContext(GlobalContext);
  return (
    <div className="home">
      { loading ? <div>Loading please wait ...</div> : recipeData && recipeData.length > 0 ? (
        recipeData.map((recipe,index) => (
          <div className="recipe-item" key={index}>
            <img src={recipe.image_url} alt={recipe.publisher} />
            <div className="category">{recipe.publisher}</div>
            <h2>
              {recipe.title.length > 25
                ? recipe.title.slice(0, 25) + "..."
                : recipe.title}
            </h2>
            <Link className="details-link" to={`/recipe-item/${recipe.id}`}>Recipe Details</Link>
          </div>
        ))
      ) : (
        <h1>Find your favourite food recipe now ...</h1>
      )}
    </div>
  );
}
