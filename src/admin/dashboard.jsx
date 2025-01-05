import { useContext, useEffect, useState } from "react";
import Recentlysold from "../components/Recentlysold";
import Dashstats from "../components/dasStats";
import Chart1 from "../components/first";
import Topcostumers from "../components/topcostumers";
import { Appcontext } from "../App";
import Loader from "../components/loader";
import AdminLoader from "../components/adminloader";

export default function Dashboard() {
  const { products, orders, ispordersloading } = useContext(Appcontext);
  const delivered = orders?.filter((order) => order.OrderStatus == "received");
  const income = delivered
    ?.map((order) => order.fullprice)
    .reduce((acc, payment) => payment + acc, 0);
  console.log();
  if (ispordersloading) return <AdminLoader />;

  return (
    <div className="ml-10 ">
      <h1 className="text-2xl font-bold py-3">Dashboard</h1>

      <div>
        <Dashstats products={products} orders={orders} income={income} />
        <Recentlysold orders={orders} />
        <Chart1 orders={orders} />
        <Topcostumers orders={orders} />
      </div>
    </div>
  );
}
