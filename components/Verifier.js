import React from "react";

function Dashboard() {
  const verify = [
    {
      id: 1,
      Eventid: 1,
      Date: "01/01/2024",
      Verifier: "ACME Verifier",
      Status: "Not Paid",
      Amount: "10.00",
      action: "Verify",
    },
    {
      id: 2,
      Eventid: 2,
      Date: "01/07/2024",
      Verifier: "ACME Verifier",
      Status: "Paid",
      Amount: "10.00",
      action: "Verify",
    },
  ];
  return (
    <>
      <div classNameName="col-12">
        <div className="pagetitle">
          <h1>Verifier</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Verifier</li>
            </ol>
          </nav>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">Verification Tokens</h5>
                  <div id="content">
                    <p>You've earned 0.0 tokens from verifying 0 events.</p>
                  </div>
                  <div className="col-12">
                    <div style={{ padding: "10px" }} className="info-box card">
                      <div className="d-flex justify-content-between align-items-center">
                        {/* First word with icon */}
                        <div style={{ marginRight: "10px" }}>
                          <h3>Carbon Sequestration Events to Verify</h3>
                        </div>
                        <div>
                          <i className="bi-globe"></i>
                        </div>
                      </div>
                      <p>Manual Verification</p>
                      <table className="table datatable">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Event ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Verifier</th>
                            <th scope="col">Status</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {verify &&
                            verify.length > 0 &&
                            verify.map((token) => (
                              <tr key={token.id}>
                                <td>{token.id}</td>
                                <td>{token.Eventid}</td>
                                <td>{token.Date}</td>
                                <td>{token.Verifier}</td>
                                <td>{token.Status}</td>
                                <td>{token.Amount}</td>
                                <td>
                                  <button className="btn btn-primary">
                                    {token.action}
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>

                      <br></br>
                      <p>Auto Verification</p>
                      <table className="table datatable">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Event ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Verifier</th>
                            <th scope="col">Status</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {verify &&
                            verify.length > 0 &&
                            verify.map((token) => (
                              <tr key={token.id}>
                                <td>{token.id}</td>
                                <td>{token.Eventid}</td>
                                <td>{token.Date}</td>
                                <td>{token.Verifier}</td>
                                <td>{token.Status}</td>
                                <td>{token.Amount}</td>
                                <td>
                                  <button className="btn btn-primary">
                                    {token.action}
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
