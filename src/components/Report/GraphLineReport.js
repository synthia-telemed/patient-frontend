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
import dayjs from "dayjs";
import BadgeStatus from "../Appointment/BadgeStatus";
const GraphLineReport = ({ data, name, panel }) => {
  console.log(data, "graph");
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
      <div className="flex items-center mt-[5px]">
        <h1 className="typographyTextXsMedium text-gray-600">
          Your Glucose in this week :
        </h1>
        {data?.summary?.status === "Normal" ? (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        ) : data?.summary?.status === "Abnormal" ? (
          <BadgeStatus text="Abnormal" style="bg-error-50 text-error-700" />
        ) : data?.summary?.status === "Warning" ? (
          <BadgeStatus text="Warning" style="bg-warning-50 text-warning-700" />
        ) : (
          <BadgeStatus text="New" style="bg-primary-50 text-primary-700" />
        )}
      </div>
      <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
        <LineChart width="100%" height={250} className="mt-[5px]">
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            // label={glucoseData.xLabel}
            interval="preserveStartEnd"
            ticks={data?.ticks}
            axisLine={false}
            // domain={data?.domain}
            domain={data?.domain}
            type="number"
            className="typographyTextXsMedium"
            tick={{ fontSize: 12 }}
            width="100%"
            tickFormatter={
              panel === "Day"
                ? t => dayjs.unix(t).format("HH:mm")
                : panel === "Week"
                ? t => dayjs.unix(t).format("ddd")
                : t => dayjs.unix(t).format("DD MMM")
            }
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
          <Line data={data.data.fasting} dataKey="value" radius={30}></Line>
          <Line data={data.data.beforeMeal} dataKey="value" radius={30}></Line>
          <Line data={data.data.afterMeal} dataKey="value" radius={30}></Line>
        </LineChart>
      </ResponsiveContainer>
      <h1 className="typographyTextXsMedium text-gray-500 text-center">{data.xLabel}</h1>
    </div>
  );
};
export default GraphLineReport;
