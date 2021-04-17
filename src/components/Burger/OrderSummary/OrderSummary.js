import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igKey}
        </span>
        : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ margin: "25px 0 15px 25px" }}>{ingredientsSummary}</ul>
      <p style={{ marginButton: "20px" }}>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button clicked={props.cancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.proceed} btnType="Success">
        PROCEED
      </Button>
    </Aux>
  );
}
