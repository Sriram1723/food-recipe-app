import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate();

  const handleAddFavourite = async (id) => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      const arr = [...favouriteList];
      if(!arr.some((item) => item.id === id)){
        arr.push(data?.data?.recipe);
      }
      setFavouriteList(arr);
    } catch (e) {
      console.log(e);
    }
  };

  function handleRemoveFavourite(id){
    setFavouriteList(favouriteList.filter((item) => item.id !== id));
  }

  const handleSubmit = async (e) => {
    try {
      navigate("/");
      setLoading(true);
      e.preventDefault();
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      setRecipeData(data?.data?.recipes);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeData,
        loading,
        recipeDetails,
        setRecipeDetails,
        handleAddFavourite,
        favouriteList,
        handleRemoveFavourite,
        setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
