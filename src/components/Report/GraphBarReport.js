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
  Cell
} from "recharts";
import dayjs from "dayjs";
import { useState } from "react";
import BadgeStatus from "../Appointment/BadgeStatus";
const GraphBarReport = ({
  data,
  name,
  isLegend,
  detailGraph,
  summaryValue,
  isHaveLastLabelList,
  isHaveTopLabelList,
  panel
}) => {
  const [valueGraph, setValueGraph] = useState("");
  const barColors = [
    "#3F6CCA",
    "#203B73",
    "#4F84F6",
    "#3F6CCA",
    "#203B73",
    "#4F84F6",
    "#3F6CCA",
    "#203B73",
    "#4F84F6"
  ];
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      setValueGraph(payload[0].value);
      return <div className=""></div>;
    }
    return null;
  };
  // console.log(data && data.data && data.length && data.data[0].values, "here");
  console.log(data.data, "here");

  return (
    <div className=" mt-[24px]">
      <h1 className="typographyTextXlSemibold">{name}</h1>
      <h1 className="typographyTextSmMedium text-gray-600">{detailGraph}</h1>
      <div className="flex items-center  mt-[5px]">
        <h1
          className={`typographyHeadingXsSemibold ${
            data?.summary?.status === "Normal"
              ? "text-success-700"
              : data?.summary?.status === "Abnormal"
              ? "text-error-700"
              : data?.summary?.status === "Warning"
              ? "text-warning-700"
              : "text-primary-700"
          } mr-[16px]`}
        >
          {summaryValue}
          <span className="typographyTextSmMedium text-gray-600">{data?.unit}</span>
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
      {data &&
      data.data &&
      data.data.length &&
      data?.data[0].values === parseInt(data?.data[0].values) ? (
        <div> {valueGraph ? valueGraph : ""}</div>
      ) : (
        <div>
          {valueGraph ? Math.round(valueGraph[0]) : ""}
          <br />
          {valueGraph ? Math.round(valueGraph[1]) : ""}
        </div>
      )}
      <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
        <BarChart
          width={830}
          height={250}
          data={
            name === "Glucose"
              ? data?.data?.beforeMeal
              : data?.data
          }
          className="mt-[5px]"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            // label={glucoseData.xLabel}
            ticks={data?.ticks}
            axisLine={false}
            domain={data?.domain}
            className="typographyTextXsMedium"
            tick={{ fontSize: 12 }}
            tickFormatter={
              panel === "Day"
                ? t => dayjs.unix(t).format("HH:mm")
                : panel === "Week"
                ? t => dayjs.unix(t).format("ddd")
                : t => dayjs.unix(t).format("DD MMM")
            }
            type={"number"}
            // type={bloodPressureData.isNumerical ? "number" : "category"}
          />
          <ReferenceLine y={150} stroke="red" />
          <ReferenceLine y={60} stroke="red" />
          <YAxis
            domain={[0, 200]}
            tick={{ fontSize: 12 }}
            axisLine={false}
            className="typographyTextXsMedium"
          />
          <Tooltip
            content={<CustomTooltip />}
            active={false}
            cursor={{ fill: "transparent" }}
          />
          {isLegend ? (
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              iconType="circle"
            />
          ) : (
            <></>
          )}
          <Bar barSize={10} dataKey={name === "Glucose" ? "value" : "values"} radius={30}>
            {name === "Glucose" &&
              data &&
              data.data &&
              data.data.beforeMeal &&
              data?.data?.beforeMeal.map((entry, index) => (
                <Cell
                  fill={
                    data &&
                    data.data &&
                    data.data.beforeMeal &&
                    data?.data?.beforeMeal[index].color
                  }
                />
              ))}
            {name !== "Glucose" &&
              data &&
              data?.data &&
              data?.data.map((entry, index) => <Cell fill={data?.data[index].color} />)}
            {isHaveTopLabelList ? (
              <LabelList
                className="typographyTextXsMedium"
                width={20}
                dataKey="values"
                formatter={
                  data &&
                  data?.data &&
                  data?.data.length &&
                  data?.data[0].values === parseInt(data?.data[0].values)
                    ? v => Math.round(v)
                    : v => `${Math.round(v[1])} ${data?.unit}`
                }
                position="top"
              />
            ) : (
              <></>
            )}
            {isHaveLastLabelList ? (
              <LabelList
                className="typographyTextXsMedium"
                width={20}
                dataKey="values"
                formatter={v => `${Math.round(v[0])} ${data?.unit}`}
                position="bottom"
              />
            ) : (
              <></>
            )}
          </Bar>
          ;
        </BarChart>
      </ResponsiveContainer>
      <h1 className="typographyTextXsMedium text-gray-500 text-center">{data?.xLabel}</h1>
    </div>
  );
};
export default GraphBarReport;
