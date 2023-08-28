import React from "react";
import {
  FaBeer,
  FaChartBar,
  FaChartLine,
  FaChevronUp,
  FaDesktop,
  FaEllipsisV,
  FaFilePdf,
  FaGrinHearts,
  FaMobile,
  FaPlusSquare,
  FaRegUser,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { Cell } from "recharts";
import { LineChart } from "recharts";
import { Line } from "recharts";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Layerone = () => {
  const data = [
    { name: "Group A", value: 67.5 },
    { name: "Group B", value: 23.5 },
  ];
  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:px-4">
      <div className="border rounded-lg p-2">
        {/* -------------------one------------------ */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-500 text-xl">Sales Overview</h1>
            <p className="flex gap-4 items-center">
              <small className="text-gray-400">Last 42.5k Sales </small>
              <p className="text-green-500 flex items-center">
                <span>+18%</span> <FaChevronUp></FaChevronUp>
              </p>
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <FaEllipsisV></FaEllipsisV>
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
        <div className="flex justify-evenly items-center mt-4">
          <div className="flex items-center gap-3">
            <span className="text-blue-600">
              <FaRegUser></FaRegUser>
            </span>
            <p className="">
              <span>8,548</span> <br />
              <small className="text-gray-400">Customers</small>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <FaChartBar></FaChartBar>
            </span>
            <p className="">
              <span>$28.5k</span> <br />
              <small className="text-gray-400">Total Profit</small>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-teal-500">
              <FaChartLine></FaChartLine>
            </span>
            <p className="">
              <span>2,350k</span> <br />
              <small className="text-gray-400">Transaction</small>
            </p>
          </div>
        </div>
      </div>

      {/* ----------------two----------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="flex gap-3 items-center border rounded-lg px-2">
          <div className="">
            <h1>Ratings</h1>
            <span className="bg-blue-300 rounded-lg px-1 ml-3">
              <small>Year of 2023</small>
            </span>
            <h1>
              8.14k <small className="text-green-400">+15.6%</small>
            </h1>
          </div>
          <div>
            <img
              className="h-24 rounded-full"
              src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-2/images/cards/card-stats-img-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-3 items-center border rounded-lg px-2">
          <div className="">
            <h1>Sessions</h1>
            <span className="badge badge-sm badge-success ml-3">
              Last Month
            </span>
            <h1>
              12.2k <small className="text-red-500">-25.5%</small>
            </h1>
          </div>
          <div>
            <img
              className="h-24"
              src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-2/images/cards/card-stats-img-2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* -------------------three------------------ */}

      <div className="bg-blue-500">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-between p-2 text-white">
              <div className="">
                <h1 className="text-white text-xl">Weekly Sales</h1>
                <p className="flex gap-4 items-center">
                  <small className="">Last 42.5k Sales </small>
                  <p className="text-green-500 flex items-center">
                    <span>+18%</span> <FaChevronUp></FaChevronUp>
                  </p>
                </p>
                <h1>Fashion</h1>
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    <span className="badge badge-primary">16</span>
                    <small>T-shirts</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">43</span>
                    <small>Shoes</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">8</span>
                    <small>Sunglasses</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">7</span>
                    <small>Watches</small>
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-44"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkedRbW2kzO9FrBPJwPY8hk9vrXQhLOeiZFw&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between p-2 text-white">
              <div className="">
                <h1 className="text-white text-xl">Weekly Sales</h1>
                <p className="flex gap-4 items-center">
                  <small className="">Last 42.5k Sales </small>
                  <p className="text-green-500 flex items-center">
                    <span>+18%</span> <FaChevronUp></FaChevronUp>
                  </p>
                </p>
                <h1>Mobiles</h1>
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    <span className="badge badge-primary">16</span>
                    <small>Mobiles</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">44</span>
                    <small>Accessories</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">8</span>
                    <small>Tablets</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">7</span>
                    <small>Computers</small>
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-44"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1yFv9BsEZ-6fihZE5NtZVldyZoY1M2BJEA&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between p-2 text-white">
              <div className="">
                <h1 className="text-white text-xl">Weekly Sales</h1>
                <p className="flex gap-4 items-center">
                  <small className="">Last 42.5k Sales </small>
                  <p className="text-green-500 flex items-center">
                    <span>+18%</span> <FaChevronUp></FaChevronUp>
                  </p>
                </p>
                <h1>Appliances</h1>
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    <span className="badge badge-primary">16</span>
                    <small>TV's</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">44</span>
                    <small>Camera</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">8</span>
                    <small>Consoles</small>
                  </p>
                  <p>
                    {" "}
                    <span className="badge badge-primary">7</span>
                    <small>gadgets</small>
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-44"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtjbeyPe9POxYY709GG5-77grtt5XYcGC-jJxcx2XsqVtPcVtnP-pOCHmZLK2M6Tk_UA&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className=" border rounded-lg px-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-400 ">
                {" "}
                <small>Total Visits</small>
              </h1>
              <p className="flex gap-4 items-center">
                <span className="text-gray-500 text-xl"> 42.5k </span>
              </p>
            </div>
            <p className="text-green-500 flex items-center">
              <span>+18.4%</span> <FaChevronUp></FaChevronUp>
            </p>
          </div>
          <div className="flex mt-5 flex-col w-full lg:flex-row">
            <div className="">
              <p className="flex items-center gap-3 justify-center">
                <span className="text-orange-500">
                  <FaMobile></FaMobile>{" "}
                </span>
                <small className="text-gray-400">Mobile</small>
              </p>{" "}
              <br />
              <span>23.5%</span> <br />
              <small className="text-gray-400">2,860</small>
            </div>
            <div className="divider lg:divider-horizontal">
              <small>vs</small>
            </div>
            <div className="">
              <p className="flex items-center gap-3 justify-center">
                {" "}
                <span className="text-blue-500">
                  <FaDesktop></FaDesktop>
                </span>
                <small className="text-gray-400">Desktop</small>
              </p>{" "}
              <br />
              <span>67.5%</span> <br />
              <small className="text-gray-400">2,860</small>
            </div>
          </div>
          {/* <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart> */}
        </div>
        <div className=" border rounded-lg px-2 py-4">
          <div>
            <h1>Sales This Month</h1>
            <small className="text-gray-400 mt-3">Total Sales This Month</small>
            <h1 className="text-2xl">$28,450</h1>
          </div>
          <span className="flex text-blue-600 mt-6 justify-center items-center text-7xl">
            <FaChartLine></FaChartLine>
          </span>
        </div>
      </div>
      <div className="border rounded-lg p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-xl">Activity</h1>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <FaEllipsisV></FaEllipsisV>
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
        <div>
          <div className="flex mt-5 items-center gap-2 justify-center">
            <span className="badge badge-error badge-xs"></span>
            <p> 8 Invoices had been paid</p>
            <p className="text-gray-400 ml-auto">
              <small>WednesDay</small>
            </p>
          </div>
          <div className=" border-l-2 ml-1 pl-2">
            <p>
              <small className="text-gray-400">
                Invoices had been paid to the company
              </small>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-red-500">
                <FaFilePdf></FaFilePdf>
              </span>{" "}
              <span>invoices.pdf</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-3 items-center gap-2 justify-center">
            <span className="badge badge-primary badge-xs"></span>
            <p> Create new project for clients</p>
            <span className="text-yellow-500">
              <FaGrinHearts></FaGrinHearts>
            </span>
            <p className="text-gray-400 ml-auto">
              <small>April 18</small>
            </p>
          </div>
          <div className=" border-l-2 ml-1 pl-2">
            <p>
              <small className="text-gray-400">
                Invoices had been paid to the company
              </small>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-500">
                <FaUser></FaUser>
              </span>{" "}
              <span>John Doe(Client)</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-3 items-center gap-2 justify-center">
            <span className="badge badge-info badge-xs"></span>
            <p> Order # 34244 from September</p>

            <p className="text-gray-400 ml-auto">
              <small>January 10</small>
            </p>
          </div>
          <div className=" border-l-2 ml-1 pl-2">
            <p>
              <small className="text-gray-400">
                Invoices had been paid to the company
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-xl">
            Top Referral Sources <br />
            <small className="text-gray-400">82% Activity Growth</small>
          </h1>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <FaEllipsisV></FaEllipsisV>
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
        <div>
          <Tabs className="border-none">
            <TabList className="border-none">
              <Tab>
                <img
                  className="h-20 w-20"
                  src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png"
                  alt=""
                />
              </Tab>
              <Tab>
                <img
                  className="h-20 w-20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I8xgA9IZQ8RKAl5G62aQAXol72obedJu6BkYiJ7J2yR0w5QR8UOpJF2bRSetg0B90Co&usqp=CAU"
                  alt=""
                />
              </Tab>
              <Tab>
                <img
                  className="h-20 w-20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU4d2NWQG3jNLvOsQWJGTzGeePxb2jxABLw&usqp=CAU"
                  alt=""
                />
              </Tab>
            </TabList>

            <TabPanel>
              <div className="overflow-x-auto w-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Status</th>
                      <th>Revenue</th>
                      <th>Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">Iphone 13</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$23k</td>
                      <td>
                        <span className="text-green-500">18.4%</span>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone 12</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-success badge-outline">
                          In stock
                        </span>
                      </td>
                      <td>$24k</td>
                      <td>
                        <span className="text-red-500">13.2%</span>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone-11</div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$26k</td>
                      <td>
                        <span className="text-green-500">19.4%</span>
                      </td>
                    </tr>
                    {/* row 4 */}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Status</th>
                      <th>Revenue</th>
                      <th>Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I8xgA9IZQ8RKAl5G62aQAXol72obedJu6BkYiJ7J2yR0w5QR8UOpJF2bRSetg0B90Co&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">Apple mini</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$23k</td>
                      <td>
                        <span className="text-green-500">18.4%</span>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I8xgA9IZQ8RKAl5G62aQAXol72obedJu6BkYiJ7J2yR0w5QR8UOpJF2bRSetg0B90Co&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone 12</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-success badge-outline">
                          In stock
                        </span>
                      </td>
                      <td>$24k</td>
                      <td>
                        <span className="text-red-500">13.2%</span>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I8xgA9IZQ8RKAl5G62aQAXol72obedJu6BkYiJ7J2yR0w5QR8UOpJF2bRSetg0B90Co&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone-11</div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$26k</td>
                      <td>
                        <span className="text-green-500">19.4%</span>
                      </td>
                    </tr>
                    {/* row 4 */}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Status</th>
                      <th>Revenue</th>
                      <th>Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU4d2NWQG3jNLvOsQWJGTzGeePxb2jxABLw&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">Apple mini</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$23k</td>
                      <td>
                        <span className="text-green-500">18.4%</span>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU4d2NWQG3jNLvOsQWJGTzGeePxb2jxABLw&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone 12</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-sm badge-success badge-outline">
                          In stock
                        </span>
                      </td>
                      <td>$24k</td>
                      <td>
                        <span className="text-red-500">13.2%</span>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU4d2NWQG3jNLvOsQWJGTzGeePxb2jxABLw&usqp=CAU"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">iphone-11</div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge-sm badge-info badge-outline">
                          Out of stock
                        </span>
                      </td>
                      <td>$26k</td>
                      <td>
                        <span className="text-green-500">19.4%</span>
                      </td>
                    </tr>
                    {/* row 4 */}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Layerone;
