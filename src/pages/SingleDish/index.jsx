import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleDish } from "../../redux/actions";
import styles from "./styles.module.css";

export const SingleDish = () => {
  const { name, id } = useParams();
  const { Dishes } = useSelector((state) => state.foodReducer);
  const [comment, setComment] = useState(""); // add state to hold comment input
  console.log(Dishes.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleDish(name, id));
  }, []);
  
  function handleAddComment(){
    // add comment input to Dishes.comments array
    Dishes.comments.push(comment);
    setComment(""); // reset comment input
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
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
            />
            <button onClick={handleAddComment}>➕</button>
          </div>
        </div>

        <div>
          {Dishes.recipe?.map((rec, index) => {
            return <p key={index}>• {rec}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
