const HeaderReport = () => {
  const CalendarIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.09265 9.40427H20.9166"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4421 13.3097H16.4514"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0046 13.3097H12.0139"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.55793 13.3097H7.5672"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4421 17.1962H16.4514"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0046 17.1962H12.0139"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.55793 17.1962H7.5672"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0438 2V5.29078"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.96552 2V5.29078"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  return (
    <div className=" flex justify-between mt-[56px] px-[17px]  w-full">
      <div className="w-[173px]">
        <h1 className="typographyHeadingXsSemibold">My Report ✨</h1>
        {/* <h1 className="typographyTextSmMedium text-gray-600">Today, 19 May 2022</h1> */}
      </div>
      {/* <div className="w-[45px] h-[45px] p-[5px] rounded-[15px] bg-primary-50 flex justify-center items-center ">
        <CalendarIcon />
      </div> */}
    </div>
  );
};
export default HeaderReport;
