import React from "react";
import DatesInMonth from "./DatesInMonth";
function Dates() {
  return (
    <>
      <table className="full_table">
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody>
          <DatesInMonth />
        </tbody>
      </table>
    </>
  );
}

export default Dates;
