import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
  Legend,
  Line
} from "recharts";
import { useState } from "react";
import BadgeStatus from "../Appointment/BadgeStatus";
const GraphBarReport = ({ bloodPressureData, name }) => {
  const [valueGraph, setValueGraph] = useState("");
  console.log(bloodPressureData)
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      setValueGraph(payload[0].value);
      return <div className=""></div>;
    }
    return null;
  };
  return (
    <div className="px-[16px] mt-[24px]">
      <h1 className="typographyTextXlSemibold">{name}</h1>
      <h1 className="typographyTextSmMedium text-gray-600">Current Level</h1>
      <div className="flex items-center  mt-[5px]">
        <h1 className="typographyHeadingXsSemibold text-success-700 mr-[16px]">
          120/80 <span className="typographyTextSmMedium text-gray-600">mmHg</span>
        </h1>
        <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
      </div>
      <div>
        {valueGraph ? parseFloat(valueGraph[0]).toFixed(2) : ""}
        <br />
        {valueGraph ? parseFloat(valueGraph[1]).toFixed(2) : ""}
      </div>
      <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
        <BarChart
          width={830}
          height={250}
          data={bloodPressureData.data}
          className="mt-[5px]"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            // label={glucoseData.xLabel}
            ticks={bloodPressureData.isNumerical ? [0, 360, 720, 1080, 1440] : null}
            axisLine={false}
            className="typographyTextXsMedium"
            tickFormatter={
              bloodPressureData.isNumerical ? t => `${Math.floor(t / 60)}:00` : t => t
            }
            type={bloodPressureData.isNumerical ? "number" : "category"}
          />
          <ReferenceLine y={150} stroke="red" />
          <ReferenceLine y={60} stroke="red" />

          <YAxis domain={[0, 200]} axisLine={false} className="typographyTextXsMedium" />
          <Tooltip
            content={<CustomTooltip />}
            active={false}
            cursor={{ fill: "transparent" }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
          />
          <Bar barSize={10} dataKey="values" fill="fill" radius={30}>
            <LabelList
              className="typographyTextXsMedium"
              width={20}
              dataKey="values"
              formatter={v => `${v[1].toFixed(2)} ${bloodPressureData.unit}`}
              position="top"
            />
            <LabelList
              className="typographyTextXsMedium"
              width={20}
              dataKey="values"
              formatter={v => `${v[0].toFixed(2)} ${bloodPressureData.unit}`}
              position="bottom"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <h1 className="typographyTextXsMedium text-gray-500 text-center">
        {bloodPressureData.xLabel}
      </h1>
    </div>
  );
};
export default GraphBarReport;
