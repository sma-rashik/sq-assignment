import React from "react";
import {
  FaEnvelope,
  FaHome,
  FaRegEnvelope,
  FaRegCommentAlt,
  FaRegCalendar,
  FaRegFileAlt,
  FaUserAlt,
  FaUser,
  FaRegUser,
  FaShieldAlt,
  FaLock,
  FaEllipsisH,
  FaRegClone,
  FaAcquisitionsIncorporated,
  FaCalendar,
  FaBox,
  FaCheckCircle,
  FaQrcode,
  FaCircleNotch,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side h-auto">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-4 pr-12 pl-4  h-full border border-r-2 text-base-content">
          {/* Sidebar content here */}
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12"
              src="https://as2.ftcdn.net/v2/jpg/01/90/72/61/1000_F_190726113_cHmhaGnofjE3caijWuj9xlzr45zqVNby.jpg"
              alt=""
            />
            <h2 className=" font-medium text-xl text-gray-600">Materialize</h2>
          </div>
          <ul className="menu bg-base-200 w-56 list-disc duration-75 transform ease-linear rounded-box">
            <li>
              <details>
                <summary>
                  <FaHome></FaHome> DashBoar..
                  <span className="badge badge-error">New</span>
                </summary>
                <ul className="">
                  <li>
                    <a href="">CRM</a>
                  </li>
                  <li>
                    <a href="">Analytics</a>
                  </li>
                  <li>
                    <a href="">eCommerce</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <div className="lg:mt-4">
            <li>
              <input type="text" placeholder="Apps and Pages" />
            </li>
            <li>
              <a>
                <FaRegEnvelope></FaRegEnvelope> Email
              </a>
            </li>
            <li>
              <a>
                <FaRegCommentAlt></FaRegCommentAlt> Chat
              </a>
            </li>
            <li>
              <a>
                {" "}
                <FaRegCalendar></FaRegCalendar>
                Calender
              </a>
            </li>
            <ul className="menu list-disc duration-75 transform ease-linear -ml-2 rounded-box">
              <li>
                <details>
                  <summary>
                    <FaRegFileAlt></FaRegFileAlt> InVoice
                  </summary>
                  <ul className="">
                    <li>
                      <a href="">List</a>
                    </li>
                    <li>
                      <a href="">Preview</a>
                    </li>
                    <li>
                      <a href="">Edit</a>
                    </li>
                    <li>
                      <a href="">Add</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu list-disc duration-75 transform ease-linear -ml-2 rounded-box">
              <li>
                <details>
                  <summary>
                    <FaRegUser></FaRegUser> User
                  </summary>
                  <ul className="list-decimal">
                    <li>
                      <a href="">List</a>
                    </li>
                    <li>
                      <a href="">View</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu list-disc duration-75 transform ease-linear -ml-2 rounded-box">
              <li>
                <details>
                  <summary>
                    <FaShieldAlt></FaShieldAlt> Roles and Permissi...
                  </summary>
                  <ul className="list-decimal">
                    <li>
                      <a href="">Roles</a>
                    </li>
                    <li>
                      <a href="">Permission</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu -ml-2 bg-transparent">
              <li>
                <details>
                  <summary>
                    <FaRegFileAlt></FaRegFileAlt> Pages
                  </summary>
                  <ul className="list-decimal  menu ">
                    <li>
                      <details>
                        <summary>User Profile</summary>
                        <ul className="z-10">
                          <li>
                            <a href="">Profile</a>
                          </li>
                          <li>
                            <a href="">Teams</a>
                          </li>
                          <li>
                            <a href="">Projects</a>
                          </li>
                          <li>
                            <a href="">Connections</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Accounts Settings</summary>
                        <ul className="z-10 menu">
                          <li>
                            <a href=""> Accounts</a>
                          </li>
                          <li>
                            <a href="">Security</a>
                          </li>

                          <li>
                            <a href="">Notifications</a>
                          </li>
                          <li>
                            <a href="">Connections</a>
                          </li>
                          <li>
                            <a href="">Billing </a>
                          </li>
                        </ul>
                      </details>
                      <li>
                        <a href=""> FAQ</a>
                      </li>
                      <li>
                        <a href=""> Help</a>
                      </li>
                      <li>
                        <a href=""> Pricing</a>
                      </li>
                      <li>
                        <details>
                          <summary>Miscellaneous</summary>
                          <ul className="z-10 menu">
                            <li>
                              <a href=""> Coming Soon</a>
                            </li>
                            <li>
                              <a href="">under maintainace</a>
                            </li>

                            <li>
                              <a href="">404</a>
                            </li>
                            <li>
                              <a href="">401</a>
                            </li>
                            <li>
                              <a href="">500 </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </li>
                  </ul>
                </details>
              </li>

              <li></li>
            </ul>
            <ul className="menu -ml-2  bg-transparent">
              <li>
                <details>
                  <summary>
                    <FaLock></FaLock> Auth Pages
                  </summary>
                  <ul className="list-decimal z-20  menu ">
                    <li>
                      <details>
                        <summary>Login</summary>
                        <ul className="z-10">
                          <li>
                            <a href="">Login v1</a>
                          </li>
                          <li>
                            <a href="">Login v2</a>
                          </li>
                          <li>
                            <a href="">Login with AppBar</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Register</summary>
                        <ul className="z-10 menu ">
                          <li>
                            <a href="">Register V1</a>
                          </li>
                          <li>
                            <a href="">Register V2</a>
                          </li>

                          <li>
                            <a href="">Reg with multi steps</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Verify Email</summary>
                        <ul className="z-10 menu ">
                          <li>
                            <a href="">Verify V1</a>
                          </li>
                          <li>
                            <a href="">Verify V2</a>
                          </li>

                          <li>
                            <a href="">Verify multi steps</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Forgot Pass</summary>
                        <ul className="z-10 menu ">
                          <li>
                            <a href="">PAssword V1</a>
                          </li>
                          <li>
                            <a href="">Password V2</a>
                          </li>

                          <li>
                            <a href="">Password multi steps</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Reset Pass</summary>
                        <ul className="z-10 menu ">
                          <li>
                            <a href="">Reset V1</a>
                          </li>
                          <li>
                            <a href="">Reset V2</a>
                          </li>

                          <li>
                            <a href="">Password multi steps</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Two Steps</summary>
                        <ul className="z-10 menu ">
                          <li>
                            <a href="">Step V1</a>
                          </li>
                          <li>
                            <a href="">Step V2</a>
                          </li>

                          <li>
                            <a href="">Password multi steps</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
            <li>
              <details>
                <summary>
                  <FaEllipsisH></FaEllipsisH> Wizard
                </summary>
                <ul className="list-decimal">
                  <li>
                    <a href="">Checkout</a>
                  </li>
                  <li>
                    <a href="">Property</a>
                  </li>
                  <li>
                    <a href="">dial</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <li>
            <a href="">
              {" "}
              <FaRegClone></FaRegClone> Examples
            </a>
          </li>
          <div className="mt-5">
            <input type="text" placeholder="User Interface" />
            <ul>
              <li>
                <a href="">
                  <FaAcquisitionsIncorporated></FaAcquisitionsIncorporated>{" "}
                  TypoGraphy
                </a>
              </li>
              <li>
                <a href="">
                  <FaEllipsisH>s</FaEllipsisH>
                  Icons
                </a>
              </li>
              <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
                <li>
                  <details>
                    <summary>
                      <FaCalendar></FaCalendar> Cards
                    </summary>
                    <ul className="list-decimal">
                      <li>
                        <a href="">Checkout</a>
                      </li>
                      <li>
                        <a href="">Property</a>
                      </li>
                      <li>
                        <a href="">dial</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
                <li>
                  <details>
                    <summary>
                      <FaCalendar></FaCalendar> Components{" "}
                      <span className="badge badge-primary badge-sm">19</span>
                    </summary>
                    <ul className="list-decimal">
                      <li>
                        <a href="">Checkout</a>
                      </li>
                      <li>
                        <a href="">Property</a>
                      </li>
                      <li>
                        <a href="">dial</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </ul>
          </div>
          <div className="mt-5">
            <input type="text" placeholder="Forms And Tables" />
            <ul>
              <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
                <li>
                  <details>
                    <summary>
                      <FaRegFileAlt></FaRegFileAlt> Form Elements
                    </summary>
                    <ul className="list-decimal">
                      <li>
                        <a href="">Checkout</a>
                      </li>
                      <li>
                        <a href="">Property</a>
                      </li>
                      <li>
                        <a href="">dial</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <li>
                <a href="">
                  <FaBox></FaBox>
                  Form Layouts
                </a>
              </li>
              <li>
                <a href="">
                  <FaCheckCircle></FaCheckCircle>
                  Form Validation
                </a>
              </li>
              <li>
                <a href="">
                  <FaEllipsisH></FaEllipsisH>
                  Form Wizard
                </a>
              </li>
              <li>
                <a href="">
                  <FaQrcode></FaQrcode>
                  Form Table
                </a>
              </li>
              <li>
                <a href="">
                  <FaQrcode></FaQrcode>
                  Mui DataGrid
                </a>
              </li>
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Charts and Misc" />
            <ul>
              <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
                <li>
                  <details>
                    <summary>
                      <FaCircleNotch></FaCircleNotch> Charts
                    </summary>
                    <ul className="list-decimal">
                      <li>
                        <a href="">ChartJS</a>
                      </li>
                      <li>
                        <a href="">ApexJs</a>
                      </li>
                      <li>
                        <a href="">Chart</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <li>
                <a href="">
                  <FaShieldAlt></FaShieldAlt> Access Control
                </a>
              </li>
              <ul className="menu z-20 list-disc duration-75 transform ease-linear -ml-2 rounded-box">
                <li>
                  <details>
                    <summary>
                      <FaEllipsisH></FaEllipsisH> Others
                    </summary>
                    <ul className="list-decimal">
                      <li>
                        <a href="">ChartJS</a>
                      </li>
                      <li>
                        <a href="">ApexJs</a>
                      </li>
                      <li>
                        <a href="">Chart</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
