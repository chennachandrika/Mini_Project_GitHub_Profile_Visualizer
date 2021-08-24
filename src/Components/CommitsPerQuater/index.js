import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
// const Data = {
//   "2008-Q1": 0,
//   "2008-Q2": 47,
//   "2008-Q3": 25,
//   "2008-Q4": 84,
//   "2009-Q1": 8,
//   "2009-Q2": 0,
//   "2009-Q3": 0,
//   "2009-Q4": 0,
//   "2010-Q1": 0,
//   "2010-Q2": 0,
//   "2010-Q3": 0,
//   "2010-Q4": 0,
//   "2011-Q1": 0,
//   "2011-Q2": 0,
//   "2011-Q3": 0,
//   "2011-Q4": 0,
//   "2012-Q1": 0,
//   "2012-Q2": 0,
//   "2012-Q3": 0,
//   "2012-Q4": 0,
//   "2013-Q1": 0,
//   "2013-Q2": 0,
//   "2013-Q3": 0,
//   "2013-Q4": 0,
//   "2014-Q1": 0,
//   "2014-Q2": 0,
//   "2014-Q3": 0,
//   "2014-Q4": 0,
//   "2015-Q1": 0,
//   "2015-Q2": 0,
//   "2015-Q3": 0,
//   "2015-Q4": 0,
//   "2016-Q1": 0,
//   "2016-Q2": 0,
//   "2016-Q3": 0,
//   "2016-Q4": 0,
//   "2017-Q1": 0,
//   "2017-Q2": 0,
//   "2017-Q3": 0,
//   "2017-Q4": 0,
//   "2018-Q1": 0,
//   "2018-Q2": 0,
//   "2018-Q3": 0,
//   "2018-Q4": 0,
//   "2019-Q1": 0,
//   "2019-Q2": 0,
//   "2019-Q3": 0,
//   "2019-Q4": 0,
//   "2020-Q1": 0,
//   "2020-Q2": 10,
//   "2020-Q3": 0,
//   "2020-Q4": 0,
//   "2021-Q1": 0,
//   "2021-Q2": 0,
//   "2021-Q3": 0
// };
// const keysData = Object.keys(Data);
// console.log(
//   keysData.map((item) => ({
//     name: item,
//     commits: Data[item]
//   }))
// );
const data = [
  { name: "2008-Q1", commits: 0 },
  { name: "2008-Q2", commits: 47 },
  { name: "2008-Q3", commits: 25 },
  { name: "2008-Q4", commits: 84 },
  { name: "2009-Q1", commits: 8 },
  { name: "2009-Q2", commits: 0 },
  { name: "2009-Q3", commits: 0 },
  { name: "2009-Q4", commits: 0 },
  { name: "2010-Q1", commits: 0 },
  { name: "2010-Q2", commits: 0 },
  { name: "2010-Q3", commits: 0 },
  { name: "2010-Q4", commits: 0 },
  { name: "2011-Q1", commits: 0 },
  { name: "2011-Q2", commits: 0 },
  { name: "2011-Q3", commits: 0 },
  { name: "2011-Q4", commits: 0 },
  { name: "2012-Q1", commits: 0 },
  { name: "2012-Q2", commits: 0 },
  { name: "2012-Q3", commits: 0 },
  { name: "2012-Q4", commits: 0 },
  { name: "2013-Q1", commits: 0 },
  { name: "2013-Q2", commits: 0 },
  { name: "2013-Q3", commits: 0 },
  { name: "2013-Q4", commits: 0 },
  { name: "2014-Q1", commits: 0 },
  { name: "2014-Q2", commits: 0 },
  { name: "2014-Q3", commits: 0 },
  { name: "2014-Q4", commits: 0 },
  { name: "2015-Q1", commits: 0 },
  { name: "2015-Q2", commits: 0 },
  { name: "2015-Q3", commits: 0 },
  { name: "2015-Q4", commits: 0 },
  { name: "2016-Q1", commits: 0 },
  { name: "2016-Q2", commits: 0 },
  { name: "2016-Q3", commits: 0 },
  { name: "2016-Q4", commits: 0 },
  { name: "2017-Q1", commits: 0 },
  { name: "2017-Q2", commits: 0 },
  { name: "2017-Q3", commits: 0 },
  { name: "2017-Q4", commits: 0 },
  { name: "2018-Q1", commits: 0 },
  { name: "2018-Q2", commits: 0 },
  { name: "2018-Q3", commits: 0 },
  { name: "2018-Q4", commits: 0 },
  { name: "2019-Q1", commits: 0 },
  { name: "2019-Q2", commits: 0 },
  { name: "2019-Q3", commits: 0 },
  { name: "2019-Q4", commits: 0 },
  { name: "2020-Q1", commits: 0 },
  { name: "2020-Q2", commits: 10 },
  { name: "2020-Q3", commits: 0 },
  { name: "2020-Q4", commits: 0 },
  { name: "2021-Q1", commits: 0 },
  { name: "2021-Q2", commits: 0 },
  { name: "2021-Q3", commits: 0 }
];

export default function LinearChart() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="commits"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
