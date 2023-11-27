import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searchData));
    // eslint-disable-next-line
  }, [searchData]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid ">
          <h5 className="navbar-brand">EMS</h5>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Employees ({allUsers.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search by Employee Name"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
