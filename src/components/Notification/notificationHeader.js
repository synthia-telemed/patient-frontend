import BackArrowIcon from "../../Assets/back-arrow.svg";
const NotificationHeader = () => {
  return (
    <div className="typographyHeadingXsSemibold w-full mt-[61px] pb-[16px] flex justify-between items-center px-[16px] border-b-[1px] border-gray-300 border-solid">
      <div className="flex">
        <img src={BackArrowIcon} />
        <h1 className=" ml-[16px] ">Notification</h1>
      </div>
      <h1 className="typographyTextXsMedium text-gray-500">Read All</h1>
    </div>
  );
};
export default NotificationHeader;
