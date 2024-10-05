"use client";

import React, { useEffect } from "react";
import { makeStore } from "@/libs/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

function StoreProvider({ children }) {
  const storeRef = useRef(makeStore());
if(!storeRef.current){
  storeRef.current = makeStore();
}


// useEffect(() => {
//   storeRef.current.dispatch(addToCart({ id: 1, name: "Product 1" }));
// }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}

// Add PropTypes validation
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;

