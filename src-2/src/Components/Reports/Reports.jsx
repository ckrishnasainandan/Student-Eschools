import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./reports.css";
import { Link } from "react-router-dom";
function Reports() {
  const reports_list = [
    {
      sub: "Sub1",
      overall_aggregate: 50,
      report_link: "#",
    },
    {
      sub: "Sub2",
      overall_aggregate: 50,
      report_link: "#",
    },
    {
      sub: "Sub3",
      overall_aggregate: 50,
      report_link: "#",
    },
    {
      sub: "Sub4",
      overall_aggregate: 60,
      report_link: "#",
    },
    {
      sub: "Sub5",
      overall_aggregate: 40,
      report_link: "#",
    },
  ];

  const overAll_performance = [
    {
      name: "Attendance Aggregate",
      progress: 40,
    },
    {
      name: "Assessment Aggregate",
      progress: 70,
    },
    {
      name: "Quizzes Aggregate",
      progress: 60,
    },
  ];

  return (
    <div className="Reports">
      <div className="reports-container">
        <div className="reports-container-main">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Overall Aggregate</th>
                <th>Report Generation</th>
              </tr>
            </thead>
            <tbody>
              {reports_list?.map((rep) => (
                <tr>
                  <td>
                    <Link to="subject">{rep.sub}</Link>
                  </td>
                  <td
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ProgressBar progress={rep.overall_aggregate} />{" "}
                    {`${rep.overall_aggregate}%`}
                  </td>
                  <td>
                    <a href={rep.report_link}>Generate Report</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="reports-bottom-container">
            <div className="reports-bottom">
              {overAll_performance?.map((ele) => (
                <div className="report-overall-perf">
                  {ele.name}
                  <ProgressBar progress={ele.progress} />
                  {`${ele.progress}%`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
