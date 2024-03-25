"use client";
import React, { useState } from "react";

const Companyacc = () => {
  const [Companydetails, setCompanydetails] = useState({
    Companyname: "",
    Address: "",
    City: "",
    State: "",
    Zipcode: "",
    Apartment: "",
    Support: "",
    Supportnum: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert to FormData for sending
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    // Add additional logic for form submission using formData
  };

  return (
    <>
      <div className="col-12">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Companyname"
                    placeholder="Company Name"
                    value={Companydetails.Companyname}
                    onChange={(e) =>
                      setCompanydetails({
                        ...Companydetails,
                        Companyname: e.target.value,
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
                    id="Address"
                    placeholder="Address"
                    value={Companydetails.Address}
                    onChange={(e) =>
                      setCompanydetails({
                        ...Companydetails,
                        Address: e.target.value,
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
                    id="City"
                    placeholder="City"
                    value={Companydetails.City}
                    onChange={(e) =>
                      setCompanydetails({
                        ...Companydetails,
                        City: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <select id="State" className="form-select mx-2">
                    <option selected>State</option>
                    <option>ACME</option>
                    <option>ACME</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Zipcode"
                    placeholder="Zip Code"
                    value={Companydetails.Zipcode}
                    onChange={(e) =>
                      setCompanydetails({
                        ...Companydetails,
                        Zipcode: e.target.value,
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
                    id="Apartment"
                    placeholder="Apartment"
                    value={Companydetails.Apartment}
                    onChange={(e) =>
                      setCompanydetails({
                        ...Companydetails,
                        Apartment: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <select id="Support" className="form-select mx-2">
                    <option selected>Support Email</option>
                    <option>ACME</option>
                    <option>ACME</option>
                  </select>
                </div>
                <br></br>
                <div className="form-group">
                  <select id="Supportnum" className="form-select mx-2">
                    <option selected>Support Phone Number</option>
                    <option>ACME</option>
                    <option>ACME</option>
                  </select>
                </div>
              </div>
              <br></br>
              <div className="text-center">
                <button
                  id="submitbut"
                  type="submit"
                  className="button button-a button-big button-rounded"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Companyacc;
