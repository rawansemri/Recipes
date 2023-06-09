import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleDish } from "../../redux/actions";
import styles from "./styles.module.css";

export const SingleDish = () => {
  const { name, id } = useParams();
  const { Dishes } = useSelector((state) => state.foodReducer);
  const [comment, setComment] = useState("");
  console.log(Dishes.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleDish(name, id));
  }, []);
  
  function handleAddComment(){
    Dishes.comments.push(comment);
    setComment(""); 
  }

  return (
    <div key={Dishes.id}>
      <p className={styles.dishName}>{Dishes.name}</p>
      <div className={styles.dish}>
        <div className={styles.divImage}>
          <img
            className={styles.image}
            src={Dishes.photo}
            width="300"
            height="300"
          />
          <div className={styles.comments}>
            <br></br>
           
            Comments: 
            {Dishes.comments?.map((comment, index) => {
              return <p key={index} className={styles.comment}>{comment}</p>;
            })}
            <input 
              type="text" 
              placeholder="Comment..."
              value={comment} // bind input value to comment state
              onChange={(e) => setComment(e.target.value)} // update comment state on input change
            />
            <button onClick={handleAddComment}>➕</button>
          </div>
        </div>

        <div className={styles.recipes}>
          {Dishes.recipe?.map((rec, index) => {
            return <p key={index} className={styles.recipe}>• {rec}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
