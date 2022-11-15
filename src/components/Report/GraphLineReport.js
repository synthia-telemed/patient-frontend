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
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import BadgeStatus from "../Appointment/BadgeStatus";
const GraphLineReport = ({ data, name, panel, summaryValue, detailGraph }) => {
  const [valueGraph, setValueGraph] = useState("");
  const [valueGraphBeforeMeal, setValueGraphBeforeMeal] = useState("-");
  const [valueGraphFasting, setValueGraphFasting] = useState("-");
  const [valueGraphAfterMeal, setValueGraphAfterMeal] = useState("-");
  const [onClick, setOnClick] = useState(false);
  useEffect(() => {}, [onClick]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      if (name === "Glucose") {
        setOnClick(true);
        setValueGraphFasting(
          payload[0]?.name === "Fasting"
            ? Math.round(parseFloat(payload[0].payload.value))
            : "-"
        );
        setValueGraphBeforeMeal(
          payload[1]?.name === "BeforeMeal"
            ? Math.round(parseFloat(payload[1].payload.value))
            : "-"
        );
        setValueGraphAfterMeal(
          payload[2]?.name === "AfterMeal"
            ? Math.round(parseFloat(payload[2].payload.value))
            : "-"
        );
      } else {
        setOnClick(true);
        setValueGraph(payload[0].payload.values);
      }
      return <div></div>;
    }
    return null;
  };
  const CheckGlucoseStatus = ({ valueGraph }) => {
    if (typeof valueGraph !== "number") return <></>;
    return (
      <>
        {valueGraph >= 70 && valueGraph <= 99 ? (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        ) : valueGraph >= 100 && valueGraph <= 125 && valueGraph <= 69 ? (
          <BadgeStatus text="Abnormal" style="bg-error-50 text-error-700" />
        ) : valueGraph >= 126 ? (
          <BadgeStatus text="Warning" style="bg-warning-50 text-warning-700" />
        ) : (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        )}
      </>
    );
  };
  const CheckBeforeMealStatus = ({ valueGraph }) => {
    if (typeof valueGraph !== "number") return <></>;
    return (
      <>
        {valueGraph >= 80 && valueGraph <= 130 ? (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        ) : valueGraph >= 240 && valueGraph <= 70 ? (
          <BadgeStatus text="Abnormal" style="bg-error-50 text-error-700" />
        ) : (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        )}
      </>
    );
  };
  const CheckAfterMealStatus = ({ valueGraph }) => {
    if (typeof valueGraph !== "number") return <></>;
    return (
      <>
        {valueGraph <= 180 ? (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        ) : valueGraph >= 240 && valueGraph <= 70 ? (
          <BadgeStatus text="Abnormal" style="bg-error-50 text-error-700" />
        ) : (
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        )}
      </>
    );
  };
  return (
    <div className="px-[16px] mt-[24px]">
      <h1 className="typographyTextXlSemibold">{name}</h1>
      {name === "Pulse" ? (
        <>
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
        </>
      ) : (
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
      )}
      {data && data.data && data.data.length && data?.data[0].values ? (
        valueGraph && onClick ? (
          <div className="flex items-center">
            <div className="w-[16px] h-[16px] bg-[#4F84F6] rounded-[16px]"></div>
            <h1 className="typographyTextXsRegular ml-[4px] text-gray-600">Pulse</h1>{" "}
            <h1 className="typographyHeadingXsSemibold text-success-700 ml-[8px]">
              {valueGraph ? Math.round(valueGraph) : ""}
            </h1>
            <h1 className="typographyTextXsRegular ml-[8px] text-gray-600">bpm</h1>
          </div>
        ) : (
          <></>
        )
      ) : (
        <div>
          <div className="flex items-center">
            <div className="w-[16px] h-[16px] bg-[#131957] rounded-[16px]"></div>{" "}
            <h1 className="typographyTextXsRegular ml-[4px] text-gray-600">Fasting</h1>
            <h1 className="typographyHeadingXsSemibold text-success-700 ml-[8px]">
              {valueGraphFasting}
            </h1>
            <h1 className="typographyTextXsRegular ml-[8px] text-gray-600">mg/dL</h1>
            <CheckGlucoseStatus valueGraph={valueGraphFasting} />
          </div>
          <div className="flex items-center">
            <div className="w-[16px] h-[16px] bg-[#303ed9] rounded-[16px]"></div>{" "}
            <h1 className="typographyTextXsRegular ml-[4px] text-gray-600">BeforeMeal</h1>
            <h1 className="typographyHeadingXsSemibold text-success-700 ml-[8px]">
              {valueGraphBeforeMeal}
            </h1>
            <h1 className="typographyTextXsRegular ml-[8px] text-gray-600">mg/dL</h1>
            <CheckBeforeMealStatus valueGraph={valueGraphBeforeMeal} />
          </div>
          <div className="flex items-center">
            <div className="w-[16px] h-[16px] bg-[#4F84F6] rounded-[16px]"></div>{" "}
            <h1 className="typographyTextXsRegular ml-[4px] text-gray-600">AfterMeal</h1>
            <h1 className="typographyHeadingXsSemibold text-success-700 ml-[8px]">
              {valueGraphAfterMeal}
            </h1>
            <h1 className="typographyTextXsRegular ml-[8px] text-gray-600">mg/dL</h1>
            <CheckAfterMealStatus valueGraph={valueGraphAfterMeal} />
          </div>
        </div>
      )}
      <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
        <LineChart width="100%" height={250} className="mt-[5px]">
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            allowDuplicatedCategory={false}
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

          <YAxis domain={[0, 200]} axisLine={false} className="typographyTextXsMedium" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
          />
          {name === "Pulse" ? (
            <>
              <Line
                data={data.data}
                name="Pulse"
                dataKey="values"
                stroke="#4F84F6"
              ></Line>
            </>
          ) : (
            <>
              <Line
                name="Fasting"
                data={data.data.fasting}
                dataKey="value"
                stroke="#131957"
                fill="#131957"
                radius={30}
              ></Line>
              <Line
                name="BeforeMeal"
                data={data.data.beforeMeal}
                dataKey="value"
                stroke="#303ed9"
                fill="#303ed9"
                radius={30}
              ></Line>
              <Line
                name="AfterMeal"
                data={data.data.afterMeal}
                dataKey="value"
                stroke="#4F84F6"
                fill="#4F84F6"
                radius={30}
              ></Line>
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
      <h1 className="typographyTextXsMedium text-gray-500 text-center">{data.xLabel}</h1>
    </div>
  );
};
export default GraphLineReport;
