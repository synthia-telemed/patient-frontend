const AgreementDetail = ({
  title,
  detail,
  detail2,
  detail3,
  detail4,
  detail5,
}) => {
  return (
    <div className="text-gray-900">
      <h1 className="typographyTextMdSemibold text-center mt-[24px]">
        {title}
      </h1>
      <h2 className="typographyTextXsRegular mt-[16px] px-[16px]">{detail}</h2>
      <h2 className="typographyTextXsRegular mt-[7px] px-[16px]">{detail2}</h2>
      <h2 className="typographyTextXsRegular mt-[7px] px-[16px]">{detail3}</h2>
      <h2 className="typographyTextXsRegular mt-[7px] px-[16px]">{detail4}</h2>
      <h2 className="typographyTextXsRegular mt-[7px] px-[16px]">{detail5}</h2>
    </div>
  );
};
export default AgreementDetail;
