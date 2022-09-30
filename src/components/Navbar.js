import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const pathname = window.location.pathname;
  const ButtonNavbar = ({
    text,
    textStyle,
    bgStyle,
    icon,
    path,
    colorIcon,
  }) => {
    const navigate = useNavigate();

    const ProfileIcon = ({ color }) => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
            fill={color}
          />
        </svg>
      );
    };
    const ReportIcon = ({ color }) => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41ZM13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18976 10.9603C8.99076 10.9903 8.81076 11.0993 8.68976 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43976 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593ZM15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498Z"
            fill={color}
          />
        </svg>
      );
    };
    const HistoryIcon = ({ color }) => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.0001C6.48 22.0001 2 17.5301 2 12.0001C2 6.48012 6.48 2.00012 12 2.00012C17.53 2.00012 22 6.48012 22 12.0001C22 17.5301 17.53 22.0001 12 22.0001ZM15.19 15.7101C15.31 15.7801 15.44 15.8201 15.58 15.8201C15.83 15.8201 16.08 15.6901 16.22 15.4501C16.43 15.1001 16.32 14.6401 15.96 14.4201L12.4 12.3001V7.68012C12.4 7.26012 12.06 6.93012 11.65 6.93012C11.24 6.93012 10.9 7.26012 10.9 7.68012V12.7301C10.9 12.9901 11.04 13.2301 11.27 13.3701L15.19 15.7101Z"
            fill={color}
          />
        </svg>
      );
    };

    const HomeIcon = ({ color }) => {
      return (
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
              fill={color}
            />
          </svg>
        </div>
      );
    };

    return (
      <div className="" onClick={() => navigate(path)}>
        <div
          className={`flex flex-col justify-center items-center w-[64px] h-[64px] ${bgStyle} rounded-[16px]`}
        >
          {icon === "home" ? (
            <HomeIcon color={colorIcon} />
          ) : icon === "about" ? (
            <ProfileIcon color={colorIcon} />
          ) : icon === "history" ? (
            <HistoryIcon color={colorIcon} />
          ) : icon === "report" ? (
            <ReportIcon color={colorIcon} />
          ) : (
            <></>
          )}
          <h1 className={`typographyTextXsSemibold ${textStyle} mt-[8px]`}>
            {text}
          </h1>
        </div>
      </div>
    );
  };
  const componentNav = [
    { label: "Home", link: "/home", page: "Home", icon: "home" },
    { label: "History", link: "/history", page: "History", icon: "history" },
    { label: "Report", link: "/report", page: "Report", icon: "report" },
    { label: "About", link: "/setting", page: "About", icon: "about" },
  ];
  return (
    <div className="w-screen h-[100px] absolute bottom-[0%] px-[24px] py-[18px] border-t-[1px] border-solid border-gray-100 rounded-bl-[24px] rounded-br-[24px] bg-base-white">
      <div className="flex justify-between">
        {componentNav.map((item) => {
          return (
            <ButtonNavbar
              text={item.label}
              key={item.page}
              icon={item.icon}
              path={item.link}
              textStyle={
                item.link === pathname ? "text-primary-500" : "text-gray-500"
              }
              bgStyle={
                item.link === pathname ? "bg-primary-50" : "bg-base-white"
              }
              colorIcon={item.link === pathname ? "#303ED9" : "#667085"}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
