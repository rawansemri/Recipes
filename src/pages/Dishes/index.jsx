import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFood } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
const Dishes = () => {
  const dispatch = useDispatch();
  const { Dishes, loading } = useSelector((state) => state.foodReducer);
  const { name } = useParams();
  useEffect(() => {
    dispatch(FetchFood(name));
  }, []);

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <Link to={`/addDish/${name}`}>
        {/* <div className={styles.divAddbtn}>
          <button className={styles.addDish}>Add Dish</button>
        </div> */}
      </Link>
      <div className={styles.dishContainer}>
        {Dishes?.map((dish) => {
          return (
            <div key={dish.id} className={styles.dish}>
              <Link to={`/singledish/${name}/${dish.id}`}>
                <div>
                  <img
                    className={styles.image}
                    src={dish.photo}
                    width="250"
                    height="250"
                  />
                </div>
                <p>
                  {dish.name}
                  <br></br>
                  <span> Learn more about {dish.name}</span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dishes;
