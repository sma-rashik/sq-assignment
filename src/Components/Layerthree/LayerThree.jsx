import React from "react";
import {
  FaChevronRight,
  FaChevronUp,
  FaCircleNotch,
  FaDesktop,
  FaEllipsisV,
  FaPencilAlt,
  FaRegSun,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LayerThree = () => {
  const data = [
    {
      name: "S",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "M",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "T",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "W",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "T",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "S",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="lg:flex gap-3 lg:px-4 mt-5">
      <div className="flex-grow border rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table max-w-sm">
            {/* head */}
            <thead className="bg-base-300">
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img
                          src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-2/images/avatars/1.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Hart@gmail.com</td>
                <td>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-500">
                      <FaDesktop></FaDesktop>
                    </span>
                    <span>Admin</span>
                  </div>
                </td>
                <th>
                  <span className="badge badge-xs badge-warning badge-outline p-2">
                    Pending
                  </span>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img
                          src="https://cdn.dribbble.com/users/2364329/screenshots/5930135/aa.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>Brice@gmail.com</td>
                <td>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-cyan-500">
                      <FaPencilAlt></FaPencilAlt>
                    </span>
                    <span>Editor</span>
                  </div>
                </td>
                <th>
                  <span className="badge badge-xs badge-info badge-outline p-2">
                    Active
                  </span>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img
                          src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462833.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>Marjy@gmail.com</td>
                <td>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">
                      <FaRegSun></FaRegSun>
                    </span>
                    <span>Author</span>
                  </div>
                </td>
                <th>
                  <span className="badge badge-xs badge-ghost badge-outline p-2">
                    inactive
                  </span>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img
                          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>Yancy@gmail.com</td>
                <td>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">
                      <FaCircleNotch></FaCircleNotch>
                    </span>
                    <span>Maintainor</span>
                  </div>
                </td>
                <th>
                  <span className="badge badge-xs badge-warning badge-outline p-2">
                    Pending
                  </span>
                </th>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
      <div className="lg:w-1/3  border rounded-lg p-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-500 text-xl">Visits By Day</h1>
            <p className="flex gap-4 items-center">
              <small className="text-gray-400">Total 24.5k Visits </small>
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
        <div className="my-6 w-full">
          <BarChart width={300} height={150} data={data}>
            <XAxis dataKey="name"></XAxis>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-500 text-lg">Most Visits By Day</h1>
            <p className="flex gap-4 items-center">
              <small className="text-gray-400">Total 24.5k Visits </small>
            </p>
          </div>
          <button className="text-blue-500 btn btn-sm">
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayerThree;
