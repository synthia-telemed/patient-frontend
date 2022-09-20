const CreditCardBox = ({ icon, numberCard, expireDate }) => {
  return (
    <div className="border-[1px] border-solid border-gray-300 flex items-center p-[16px] mx-[16px] rounded-[8px] mt-[24px]">
      <img src={icon} alt="" />
      <div className="flex flex-col ml-[24px]">
        <h1 className="typographyTextSmMedium">{numberCard}</h1>
        <h2 className="typographyTextXsRegular text-gray-600 mt-[10px]">
          Expires on {expireDate}
        </h2>
      </div>
    </div>
  );
};
export default CreditCardBox;
