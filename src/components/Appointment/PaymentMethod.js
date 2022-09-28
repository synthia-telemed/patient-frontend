const PaymentMethod = ({
  icon,
  numberCard,
  isDefault,
  expireDate,
  onChange,
  id,
  onSelect,
  onClick,
}) => {
  return (
    <div
      className="border-[1px] border-solid border-gray-300 flex items-center p-[16px] mx-[16px] rounded-[8px] mt-[24px]"
      onClick={() => onClick(id)}
    >
      <input
        checked={onSelect===id ? true : false}
        type="checkbox"
        value={id}
        onChange={() => {}}
        className="mr-[24px] text-blue-600 bg-gray-100 w-6 h-6 rounded-full"
      />
      <img src={icon} alt="" />
      <div className="flex flex-col ml-[24px]">
        <div className="flex">
          <h1 className="typographyTextSmMedium">{numberCard}</h1>
          {isDefault ? (
            <h1 className="typographyTextSmMedium text-primary-500 ml-[8px]">
              (Default)
            </h1>
          ) : (
            <></>
          )}
        </div>
        <h2 className="typographyTextXsRegular text-gray-600 mt-[10px]">
          Expires on {expireDate}
        </h2>
      </div>
    </div>
  );
};

export default PaymentMethod;
