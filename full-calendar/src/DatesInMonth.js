import React, { useState, useEffect } from "react";
import moment from "moment";

const today = moment().format("YYYY-MM-DD");

// 任何能以 4 整除的年份都是閏年：例如 1988 年、1992 年及 1996 年都是閏年。但是，西曆規定能以 100 (例如1900 年) 整除的年份，同時也要能以 400 整除，才算是閏年。因此，1700、1800、1900、2100不算閏年，1600、2000、2400是閏年。
// 判斷是否為閏年 (布林)
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
// 判斷某月有幾天 (字串)
function daysInMonth(year, month) {
  if (month === 0) month = 12;
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = days[month - 1];
  if (month === 2 && isLeapYear(year) === true) day = 29;
  return day;
}

//new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
// new Date(2021,11,1) => 中間的11其實是12月，因為month的格式是0-11，所以這邊先寫month-1，就可以讓我們之後在輸入時，直接輸入月份即可
//判斷某年某月1號星期幾 (字串)
function firstWeekday(year, month) {
  let myDate = new Date(year, month - 1, 1);
  return myDate.getDay();
}

//判斷本月1號前上個月有多少天並回傳陣列 (陣列)
const weekDayInLastMonth = (year, month) => {
  let lastMonth = month - 1;
  let yearForLastMonth = year;
  if (lastMonth === 0) {
    lastMonth = 12;
    yearForLastMonth -= 1;
  }
  // 上個月有幾天
  let daysInLastMonth = daysInMonth(yearForLastMonth, lastMonth);
  // 這個月1號是星期幾
  let firstDayInThisMonth = firstWeekday(year, month);
  // 本月要顯示幾天上個月的日期
  let days = [];
  for (let i = 0; i < firstDayInThisMonth; i++) {
    let day = daysInLastMonth - firstDayInThisMonth + 1;
    days.push({ y: Number(yearForLastMonth), m: Number(lastMonth), d: day });
    daysInLastMonth++;
  }
  return days;
};

// 本月天數的陣列 (陣列)
function daysInThisMonth(year, month) {
  let days = [];
  for (let i = 1; i <= daysInMonth(year, month); i++) {
    days.push({ y: Number(year), m: Number(month), d: i });
  }
  return days;
}

// 顯示次月的多出天數陣列 (陣列)
const daysInNextMonth = (daysThisLastMonth, month, year) => {
  let yearForNextMonth = Number(year);
  let nextMonth = Number(month) + 1;
  if (nextMonth >= 13) {
    yearForNextMonth += 1;
    nextMonth = 1;
  }
  let daysNextMonth = 7 - (daysThisLastMonth % 7);
  let days = [];
  for (let i = 1; i <= daysNextMonth; i++) {
    days.push({ y: Number(yearForNextMonth), m: Number(nextMonth), d: i });
  }
  return days;
};

function DatesInMonth() {
  return <></>;
}

export default DatesInMonth;
