import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetReducer } from "../../redux/actions";
const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(resetReducer());
  },[])
  return (
    <div>
      <h1>Recipes</h1>
      <p className="read-the-docs">What would you like to cook today?</p>
      <Link to={"/dishes/turkish"}>
        <button>Turkish food</button>
      </Link>
      <Link to={"/dishes/arabic"}>
        <button>Arabic food</button>
      </Link>
      <Link to={"/dishes/sea"}>
        <button>Sea food</button>
      </Link>
    </div>
  );
};

export default Home;
