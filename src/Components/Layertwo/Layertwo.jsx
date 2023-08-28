import React from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaDesktop,
  FaEllipsisH,
  FaShoppingBag,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Layertwo = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:px-4 mt-4">
      <div className="lg:flex gap-3 ">
        <div className=" border rounded-lg py-2">
          <div className="flex items-center justify-center gap-2">
            <div
              className="radial-progress text-primary "
              style={{ "--value": 70 }}
            >
              <FaDesktop></FaDesktop>
            </div>
            <h1 className="">84.5k</h1>
            <small className="text-red-500 flex items-center">
              <span>-24% </span>
              <FaChevronDown></FaChevronDown>{" "}
            </small>
          </div>
          <p className="text-gray-400">
            <small>Total Impressions</small>
          </p>
          <div className="flex items-center border-t-2 mt-2 pt-2  justify-center gap-2">
            <div
              className="radial-progress text-warning "
              style={{ "--value": 30 }}
            >
              <FaShoppingBag></FaShoppingBag>
            </div>
            <h1 className="">22k</h1>
            <small className="text-green-500 flex items-center">
              <span>+15% </span>
              <FaChevronDown></FaChevronDown>{" "}
            </small>
          </div>
          <p className="text-gray-400">
            <small>Total Impressions</small>
          </p>
        </div>
        <div className="border rounded-lg w-full p-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-500 text-xl">Marketing & Sales</h1>
              <p className="flex gap-4 items-center">
                <small className="text-gray-400">Total 24.5k Sales </small>
                <p className="text-green-500 flex items-center">
                  <span>+25%</span> <FaChevronUp></FaChevronUp>
                </p>
              </p>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">
                <FaEllipsisH></FaEllipsisH>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Last 28 Days</a>
                </li>
                <li>
                  <a>Last Year</a>
                </li>
                <li>
                  <a>Last Month</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3 my-5 ">
            <div>
              <img
                className="w-20 h-auto"
                src="https://as2.ftcdn.net/v2/jpg/01/90/72/61/1000_F_190726113_cHmhaGnofjE3caijWuj9xlzr45zqVNby.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-500">
                Marketing Expense
              </h1>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="flex items-center gap-3 ">
                  <span className="badge badge-ghost badge-xs">5k</span>
                  <small className="text-gray-400">Operating</small>
                </div>
                <div className="flex items-center gap-3 ">
                  <span className="badge badge-ghost badge-xs">3k</span>
                  <small className="text-gray-400">Financial</small>
                </div>
                <div className="flex items-center gap-3 ">
                  <span className="badge badge-ghost badge-xs">2k</span>
                  <small className="text-gray-400">COGF</small>
                </div>
                <div className="flex items-center gap-3 ">
                  <span className="badge badge-ghost badge-xs">1k</span>
                  <small className="text-gray-400">Expense</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary btn-outline btn-sm mr-4">
              Details
            </button>
            <button className="btn btn-primary btn-sm">Close</button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-full p-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-500 text-xl">Live Visitors</h1>
            <p className="flex gap-4 items-center">
              <small className="text-gray-400">
                Total 890 visitors are live
              </small>
            </p>
          </div>
          <div>
            <p className="text-green-500 flex items-center">
              <span>+72.7%</span> <FaChevronUp></FaChevronUp>
            </p>
          </div>
        </div>
        <div className="w-full mt-5">
          <BarChart width={300} height={150} data={data}>
            <Bar dataKey="uv" fill="#90EE90" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Layertwo;
