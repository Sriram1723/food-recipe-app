import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Details() {
  const params = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    setSearchParam,
    handleAddFavourite,
    favouriteList,
    handleRemoveFavourite,
    setLoading,
    loading
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        setLoading(true);
        setSearchParam("");
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
        );
        const data = await res.json();
        setRecipeDetails(data?.data?.recipe);
        console.log(data?.data?.recipe)
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getRecipeDetails();
    //eslint-disable-next-line
  }, [params.id]);

  const isFavourite = favouriteList.some((item) => item.id === recipeDetails.id);
  return (
    <div>
      {
        loading ? <p>loading ...</p> :
        <div className="details"><div className="recipe-info">
        <div className="name">{recipeDetails?.title}</div>
        <img src={recipeDetails?.image_url} alt={recipeDetails?.title}></img>
      </div>
      <div className="ingredients">
        {!isFavourite ? (
            <button
              className="add-favourite"
              onClick={() => handleAddFavourite(recipeDetails.id)}
            >
              Add to Favourites
            </button>
          ) : (
            <button
              className="remove-favourite"
              onClick={() => handleRemoveFavourite(recipeDetails.id)}
            >
              Remove from Favourites
            </button>
          )
        }
        <h1>Ingredients : </h1>
        <ul>
          {recipeDetails?.ingredients?.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </div></div>
      }
    </div>
  );
}
