import {
  LineChart,
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
import BadgeStatus from "../Appointment/BadgeStatus";
const GraphLineReport = ({ bloodPressureData,name }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          {/* {payload[0].name} */}
          Blood Pressure
          <br />
          {payload[0].value[0].toFixed(2)}
          <br />
          {payload[0].value[1].toFixed(2)}
        </div>
      );
    }
    return null;
  };
  return (
    <div className="px-[16px] mt-[24px]">
      <h1 className="typographyTextXlSemibold">{name}</h1>
      <h1 className="typographyTextSmMedium text-gray-600">Current Level</h1>
      <div className="flex items-center mt-[5px]">
        <h1 className="typographyHeadingXsSemibold text-success-700 mr-[16px]">
          120/80 <span className="typographyTextSmMedium text-gray-600">mmHg</span>
        </h1>
        <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
      </div>
      <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
        <LineChart
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
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
          />
          <Line dataKey="values" fill="fill" radius={30}>
            <LabelList
              className="typographyTextXsMedium"
              width={20}
              dataKey="values"
              formatter={v => `${v[1]} ${bloodPressureData.unit}`}
              position="top"
            />
            <LabelList
              className="typographyTextXsMedium"
              width={20}
              dataKey="values"
              formatter={v => `${v[0]} ${bloodPressureData.unit}`}
              position="bottom"
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
      <h1 className="typographyTextXsMedium text-gray-500 text-center">
        {bloodPressureData.xLabel}
      </h1>
    </div>
  );
};
export default GraphLineReport;
