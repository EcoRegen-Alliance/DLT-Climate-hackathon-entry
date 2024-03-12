import React from "react";

function Dashboard() {
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Welcome to the EcoReGen Alliance
                  </h5>
                  <div id="content">
                    <p>
                      The EcoReGen Alliance is a group of companies and
                      organizations that have come together to build a better
                      future, naturally. You are part of a community committed
                      to net zero and beyond
                    </p>
                  </div>
                  <section className="section contact">
                    <div className="row gy-4">
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="info-box card">
                              <h3>Role</h3>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="info-box card">
                              <h3>Organization</h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6">
                        <div className="info-box card">
                          <h3>Analytics</h3>
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

export default Dashboard;
