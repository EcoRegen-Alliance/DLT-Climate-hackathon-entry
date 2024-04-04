import React from "react";
import Map from "./Map";

function Analyzer() {
  return (
    <>
      <div classNameName="col-12">
        <div className="pagetitle">
          <h1>ECO Token Analyzer</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Analyzer</li>
            </ol>
          </nav>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">ECO Token Analyzer</h5>
                  <div id="content">
                    <p>Pay for real-time satellite analysis</p>
                  </div>
                  <div className="col-12">
                    <Map />
                  </div>
                  <section className="section contact">
                    <div className="row gy-4">
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="col-12">
                              <div
                                style={{ padding: "10px" }}
                                className="info-box card"
                              >
                                <h3>Verification Fees Balance</h3>
                                <p>$0.00</p>
                                <p>
                                  List of the last payment to ACME Verifiers
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6">
                        <div className="col-12">
                          <div
                            style={{ padding: "10px" }}
                            className="info-box card"
                          >
                            <h3>Profit Per Verification Token</h3>
                            <p>$0.00</p>
                            <p>To date total</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analyzer;
