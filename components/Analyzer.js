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
            <div className="col-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <br></br>
                  {/* <h5 className="card-title">ECO Token Analyzer</h5>
                  <div id="content">
                    <p>Pay for real-time satellite analysis</p>
                  </div> */}
                  <div className="col-12">
                    <Map />
                  </div>
                  <br></br>
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
                                <div className="d-flex justify-content-between align-items-center">
                                  {/* First word with icon */}
                                  <div style={{ marginRight: "10px" }}>
                                    <span>
                                      <p>Created:</p>
                                      <p>Location:</p>
                                      <p>Carbon in situ</p>
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <p>1 Minutes ago</p>
                                      <p>0x4a30</p>
                                      <p>Yes</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{ padding: "10px" }}
                                className="info-box card"
                              >
                                <div className="d-flex justify-content-between align-items-center">
                                  {/* First word with icon */}
                                  <div style={{ marginRight: "10px" }}>
                                    <span>
                                      <p>Transferred:</p>
                                      <p>From:</p>
                                      <p>To</p>
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <p>1 Minutes ago</p>
                                      <p>0x4a30</p>
                                      <p>0x4a30</p>
                                    </span>
                                  </div>
                                </div>
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
                            <div className="d-flex justify-content-between align-items-center">
                              {/* First word with icon */}
                              <div style={{ marginRight: "10px" }}>
                                <span>
                                  <button className="btn btn-primary">
                                    Real Time
                                  </button>
                                </span>
                              </div>
                              <div>
                                <span>
                                  <button className="btn btn-primary">
                                    Pay for analysis
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="realtime">
                              <br></br>

                              <div style={{ marginRight: "10px" }}>
                                <h3>Pay for real-time satellite analysis</h3>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                {/* First word with icon */}

                                <div style={{ marginRight: "10px" }}>
                                  <span>
                                    <p>Price:</p>
                                    <p>Carbon in situ:</p>
                                  </span>
                                </div>
                                <div>
                                  <span>
                                    <p>0.1 Hbar</p>
                                    <p>Yes</p>
                                  </span>
                                </div>
                              </div>
                              <button className="btn btn-primary">Pay</button>
                            </div>
                            <div className="realtime">
                              <br></br>

                              <div style={{ marginRight: "10px" }}>
                                <h3>Data feed from hosting organization</h3>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                {/* First word with icon */}

                                <div style={{ marginRight: "10px" }}>
                                  <span>
                                    <p>Price:</p>
                                    <p>Carbon in situ:</p>
                                  </span>
                                </div>
                                <div>
                                  <span>
                                    <p>0.1 Hbar</p>
                                    <p>Yes</p>
                                  </span>
                                </div>
                              </div>
                              <button className="btn btn-primary">Pay</button>
                            </div>
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
