import React, { Fragment } from "react";
import Cartcomponent from "./cartComponant";
import Productlist from "./productList";

function defaultComponent() {
  return (
    <Fragment>
      <Productlist/>
      <Cartcomponent/>
    </Fragment>
  );
}

export default defaultComponent;
