import "./App.css";
import { useState } from "react";
import moment from "moment";
import Header from "./Header";
import Dates from "./Dates";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const year = moment().format("YYYY");
const month = moment().format("MM");
const day = moment().format("DD");
function App() {
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  return (
    <>
      <div className="calendar">
        <Header
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          year={year}
          months={months}
        />
        <Dates />
      </div>
    </>
  );
}

export default App;
