import React from "react";
// 開放三年內預約
const yearsCanSelect = (year) => {
  let yearsOption = [];
  for (let i = 0; i < 3; i++) {
    yearsOption.push(Number(year) + i);
  }
  return yearsOption;
};

function Header({
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
  year,
  months,
}) {
  // 點選左右箭頭後切換函式
  const selectOnLeftChange = () => {
    if (selectedMonth == 1) {
      setSelectedYear(Number(selectedYear) - 1);
      setSelectedMonth(12);
    } else {
      setSelectedMonth(Number(selectedMonth) - 1);
    }
  };
  const selectOnRightChange = () => {
    if (selectedMonth == 12) {
      setSelectedYear(Number(selectedYear) + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth(Number(selectedMonth) + 1);
    }
  };
  return (
    <>
      <div className="calendar-header">
        <i
          className="far fa-arrow-alt-circle-left"
          onClick={(e) => {
            e.stopPropagation();
            selectOnLeftChange();
          }}
        ></i>
        <div className="select_style">
          {/* 年份選單 */}
          <select
            name=""
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
            }}
          >
            {yearsCanSelect(year).map((v, i) => {
              return (
                <option value={v} key={v}>
                  {v}
                </option>
              );
            })}
          </select>

          {/* 月份選單 */}
          <select
            name=""
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
            }}
          >
            {months.map((v, i) => {
              return (
                <option value={v} key={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        <i
          className="far fa-arrow-alt-circle-right"
          onClick={(e) => {
            e.stopPropagation();
            selectOnRightChange();
          }}
        ></i>
      </div>
    </>
  );
}

export default Header;
