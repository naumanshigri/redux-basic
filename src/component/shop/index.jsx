import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/index";

function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  return (
    <div className="d-flex text-center pt-5 pl-5 ml-5">
      <button onClick={() => dispatch(actionCreators.depositMoney(20))}>
        Increate Count{" "}
      </button>
      <div>Count:{amount}</div>
      <button onClick={() => dispatch(actionCreators.withDrawMoney(20))}>
        Decrease Count{" "}
      </button>
    </div>
  );
}

export default Shop;
