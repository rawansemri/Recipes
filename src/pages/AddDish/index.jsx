import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { AddNewDish } from "../../redux/actions";
import { useDispatch } from "react-redux";
export const AddDish = () => {
  const [ingrediants, setIngredients] = useState([]);
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myRef = useRef(
    {
      id: crypto.randomUUID().toString(),
      name: '',
      photo: '',
      recipe: [],
    }
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
   dispatch(AddNewDish(myRef , name));
  fetch(`https://${name}.free.beeceptor.com/${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myRef.current)
    })
  .then(() => {
    navigate("/");
  })
  .catch((error) => {
    console.error("Error adding dish:", error);
  });
  };

  const handleChange = (e) => {
    myRef.current = { ...myRef.current, [e.target.name]: e.target.value }
  }
  const handleChangeRecipe = (e) => {
      setIngredients((prevState) => ([ ...prevState, e.target.value ]));

    myRef.current = { ...myRef.current, [e.target.name]: ingrediants }
  }

  return (
    <div className={styles.formcontainer}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2>Add Dish</h2>
        <div className={styles.formgroup}>
          <label htmlFor="dish-name">Dish Name:</label>
          <input type="text" id="dish-name" placeholder="Enter dish name" name="name" onChange={handleChange} />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="dish-image">Dish Image:</label>
          <input type="file" id="dish-image" accept="image/png, image/jpeg" name="photo" onChange={handleChange} />
        </div>
        <div className={styles.formgroup}>
         
            <div className={styles.ingredientgroup}>
              <label htmlFor={`ingredient`}>
                Ingredient
              </label>
              <input type="text" id="1" placeholder="Enter ingrediant 1" name="recipe" onChange={handleChangeRecipe} />
              <input type="text" id="2" placeholder="Enter ingrediant 2" name="recipe" onChange={handleChangeRecipe} />
              <input type="text" id="3" placeholder="Enter ingrediant 3" name="recipe" onChange={handleChangeRecipe} />
              <input type="text" id="4" placeholder="Enter ingrediant 4" name="recipe" onChange={handleChangeRecipe} />
              <input type="text" id="5" placeholder="Enter ingrediant 5" name="recipe" onChange={handleChangeRecipe} />
            </div>
         
        </div>
        <button type="submit" className={styles.submitbutton}>Submit</button>
      </form>
    </div>
  );
};
