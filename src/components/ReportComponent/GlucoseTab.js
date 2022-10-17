import { useForm } from "react-hook-form";
import { useState } from "react";
import useAPIMeasureMent from "../../hooks/useApiMeasurement";
import BeforeMealIcon from "../../Assets/Report/before_meal.svg";
import AfterMealIcon from "../../Assets/Report/after_meal.svg";
import DinnerIcon from "../../Assets/Report/dinner.svg";
import LunchIcon from "../../Assets/Report/lunch-bag.svg";
import RamenIcon from "../../Assets/Report/ramen.svg";
const GlucoseTab = ({dateTime}) => {
  const [meal, setMeal] = useState("beforemeal");
  const [apiDefault] = useAPIMeasureMent();
  const [period, setPeriod] = useState("breakfast");
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const submitGlucose = async value => {
    const body = {
      dateTime: dateTime.toISOString(),
      value: parseInt(value.Glucose),
      isBeforeMeal: meal==="beforemeal"?true:false,
      meal: period
    };
    console.log(body);
    const res = await apiDefault.post(`/glucose`, body);
    console.log(res);
  };
  return (
    <div className="mt-[36px] bg-base-white">
      <form onSubmit={handleSubmit(submitGlucose)}>
        <h1 className="typographyTextSmMedium text-grey-700 mb-[6px]">Glucose</h1>
        <input
          {...register("Glucose", {
            required: "Invalid Glucose"
          })}
          type="number"
          className="border-[1px] border-solid border-gray-300 rounded-[4px] h-[40px] mt-[6px] px-[8px] w-[342px]"
        />
        <h1 className="typographyTextSmMedium text-grey-700 mt-[16px] mb-[8px]">Meal</h1>
        <div className="flex w-full justify-center px-[16px]">
          <div
            onClick={() => setMeal("beforemeal")}
            className={`p-[8px] ${
              meal === "beforemeal"
                ? "bg-gray-200 border-[1.5px] border-solid border-gray-300"
                : ""
            } w-[102px] h-[104px] flex justify-center items-center flex-col rounded-[8px]  mr-[64px]`}
          >
            <img src={BeforeMealIcon} alt="" />
            <h1 className="typographyTextSmMedium text-gray-800 mt-[20px]">
              Before Meal
            </h1>
          </div>
          <div
            onClick={() => setMeal("aftermeal")}
            className={`p-[8px] ${
              meal === "aftermeal"
                ? "bg-gray-200 border-[1.5px] border-solid border-gray-300"
                : ""
            } w-[102px] h-[104px] flex justify-center items-center flex-col rounded-[8px]`}
          >
            <img src={AfterMealIcon} alt="" />
            <h1 className="typographyTextSmMedium text-gray-800 mt-[20px]">After Meal</h1>
          </div>
        </div>

        <h1 className="typographyTextSmMedium text-grey-700 mt-[16px] mb-[8px]">
          Period
        </h1>
        <div className="flex w-full justify-between ">
          <div
            onClick={() => setPeriod("breakfast")}
            className={`p-[8px] ${
              period === "breakfast"
                ? "bg-gray-200 border-[1.5px] border-solid border-gray-300"
                : ""
            } w-[102px] h-[104px] flex justify-center items-center flex-col rounded-[8px]  `}
          >
            <img src={LunchIcon} alt="" />
            <h1 className="typographyTextSmMedium text-gray-800 mt-[20px]">Breakfast</h1>
          </div>
          <div
            onClick={() => setPeriod("lunch")}
            className={`p-[8px] ${
              period === "lunch"
                ? "bg-gray-200 border-[1.5px] border-solid border-gray-300"
                : ""
            } w-[102px] h-[104px] flex justify-center items-center flex-col rounded-[8px]  `}
          >
            <img src={RamenIcon} alt="" />
            <h1 className="typographyTextSmMedium text-gray-800 mt-[20px]">Lunch</h1>
          </div>
          <div
            onClick={() => setPeriod("dinner")}
            className={`p-[8px] ${
              period === "dinner"
                ? "bg-gray-200 border-[1.5px] border-solid border-gray-300"
                : ""
            } w-[102px] h-[104px] flex justify-center items-center flex-col rounded-[8px]`}
          >
            <img src={DinnerIcon} alt="" />
            <h1 className="typographyTextSmMedium text-gray-800 mt-[20px]">Dinner</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            value="submit"
            className="mt-[72px] bg-[#303ED9] typographyTextMdMedium text-base-white w-[235px] h-[44px] rounded-[8px] mb-[32px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default GlucoseTab;
