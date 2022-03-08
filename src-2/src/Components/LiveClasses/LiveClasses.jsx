import React from "react";
import "./liveClasses.css";

function LiveClasses() {
  const classList = [
    {
      name: "Class 1",
      time: "10:00",
      link: "https://meet.google.com",
    },
    {
      name: "Class 2",
      time: "10:00",
      link: "https://meet.google.com",
    },
    {
      name: "Class 3",
      time: "10:00",
      link: "https://meet.google.com",
    },
    {
      name: "Class 4",
      time: "10:00",
      link: "https://meet.google.com",
    },
    {
      name: "Class 5",
      time: "10:00",
      link: "https://meet.google.com",
    },
    {
      name: "Class 6",
      time: "10:00",
      link: "https://meet.google.com",
    },
  ];

  return (
    <div className="LiveClasses">
      <div className="liveClasses-container">
        <div className="liveClasses-container-main">
          <table className="class-link-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Time</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {classList.map((_class) => (
                <tr>
                  <td>{_class.name}</td>
                  <td>{_class.time}</td>
                  <td>
                    <a href={_class.link} target="_blank">
                      Click here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="liveClasses-bottom">
            <button className="class-join-btn">Join Class by ID</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveClasses;
