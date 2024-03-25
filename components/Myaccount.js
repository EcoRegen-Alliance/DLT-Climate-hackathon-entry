"use client";
import React, { useState } from "react";
import Companyacc from "./Companyacc";

function Myaccount() {
  //  Change Email
  const [mail, setMail] = useState({
    Currentemail: "",
    Newemail: "",
    Confirmmail: "",
  });

  const handlemailSubmit = async (e) => {
    e.preventDefault();
  };

  // Change Password
  const [password, setPassword] = useState({
    Currentpassword: "",
    Newpassword: "",
    Confirmpass: "",
  });

  const handlepassSubmit = async (e) => {
    e.preventDefault();
  };

  // changephone
  const [phone, setPhone] = useState({
    Phonenum: "",
    Verification: "",
  });

  const handlephoneSubmit = async (e) => {
    e.preventDefault();
  };

  // Addteam
  const [team, setTeam] = useState({
    Entermail: "",
    Role: "",
  });

  const handleteamSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="col-12">
        <div className="pagetitle">
          <h1>My Account</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">My Account</li>
            </ol>
          </nav>
        </div>

        <div className="col-12">
          <div className="card p-4">
            <div className="row gy-4">
              <div className="col-md-6">
                <h2>Change Email</h2>
                <form onSubmit={handlemailSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Currentemail"
                      placeholder="Current Email"
                      value={mail.Currentemail}
                      onChange={(e) =>
                        setMail({
                          ...mail,
                          Currentemail: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Newemail"
                      placeholder="New Email"
                      value={mail.Newemail}
                      onChange={(e) =>
                        setMail({
                          ...mail,
                          Newemail: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Confirmmail"
                      placeholder="Confirm New Mail"
                      value={mail.Confirmmail}
                      onChange={(e) =>
                        setMail({
                          ...mail,
                          Confirmmail: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>
                  <div className="text-center">
                    <button
                      id="submitbut"
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Change Email
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <h2>Change Password</h2>
                <form onSubmit={handlepassSubmit}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="Currentpassword"
                      placeholder="Current Password"
                      value={password.Currentpassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          Currentpassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="Newpassword"
                      placeholder="Enter New Password"
                      value={password.Newpassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          Newpassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Confirmpass"
                      placeholder="Confirm New Password"
                      value={password.Confirmpass}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          Confirmpass: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br />
                  <div className="text-center">
                    <button
                      id="submitbut"
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Confirm Password
                    </button>
                  </div>
                </form>
              </div>

              {/* change phonenumber and add team */}

              <div className="col-md-6">
                <h2>Change Phone Number</h2>
                <form onSubmit={handlephoneSubmit}>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="Phonenum"
                      placeholder="New Phone Number"
                      value={phone.Phonenum}
                      onChange={(e) =>
                        setPhone({
                          ...phone,
                          Phonenum: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            id="Verification"
                            placeholder="Verification code"
                            value={phone.Verification}
                            onChange={(e) =>
                              setPhone({
                                ...phone,
                                Verification: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </span>
                    </div>
                    <div>
                      <span>
                        <button style={{ borderRadius: "5px" }}>
                          Get Code
                        </button>
                      </span>
                    </div>
                  </div>

                  <br></br>

                  <div className="text-center">
                    <button
                      id="submitbut"
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Change Phone Number
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <h2>Team Members</h2>
                <form onSubmit={handleteamSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="Entermail"
                      placeholder="Enter Mail"
                      value={team.Entermail}
                      onChange={(e) =>
                        setTeam({
                          ...team,
                          Entermail: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <select id="Role" className="form-select mx-2">
                      <option selected>Role</option>
                      <option>ACME</option>
                      <option>ACME</option>
                    </select>
                  </div>
                  <br></br>

                  <div className="text-center">
                    <button
                      id="submitbut"
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Add team Member
                    </button>
                  </div>
                </form>
              </div>

              <Companyacc />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myaccount;
