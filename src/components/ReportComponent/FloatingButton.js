const FloatingButton = ({ onClick }) => {
  const EditingIcon = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 9.00006L13 5.00006M1.5 20.5001L4.88437 20.124C5.29786 20.0781 5.5046 20.0551 5.69785 19.9925C5.86929 19.937 6.03245 19.8586 6.18289 19.7594C6.35245 19.6476 6.49955 19.5005 6.79373 19.2063L20 6.00006C21.1046 4.89549 21.1046 3.10463 20 2.00006C18.8955 0.895489 17.1046 0.895488 16 2.00006L2.79373 15.2063C2.49955 15.5005 2.35246 15.6476 2.24064 15.8172C2.14143 15.9676 2.06301 16.1308 2.00751 16.3022C1.94496 16.4955 1.92198 16.7022 1.87604 17.1157L1.5 20.5001Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  return (
    <div
      className="w-[56px] h-[56px] bg-primary-500 p-[12px] rounded-[48px] flex justify-center items-center fixed bottom-[17%] right-[7%] z-30"
      onClick={onClick}
    >
      <EditingIcon />
    </div>
  );
};
export default FloatingButton;
