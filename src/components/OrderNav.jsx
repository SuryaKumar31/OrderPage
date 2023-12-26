import React from "react";
import { styles } from "../style";

const OrderNav = () => {
  return (
    <section className="flex items-center justify-between p-2">
      <h1 className="font-extrabold text-3xl lg:text-4xl">Orders</h1>
      <button className={`${styles.button}`}>create new</button>
    </section>
  );
};

export default OrderNav;
