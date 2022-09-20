import HeaderWithBack from "../../components/HeaderWithBack";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { css } from "styled-components";
import images from "react-payment-inputs/images";
import LogoCreditcard from "../../components/SettingPanel/LogoCreditcard";
import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";
const AddCardPage = () => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const handleChangeCVC = (value) => {
    return console.log(value.target);
  };
  return (
    <div className="px-[16px]">
      <HeaderWithBack textHeader="Add Card" />
      <div className="flex justify-between w-full mt-[24px]">
        <h1 className="typographyTextMdSemibold">Card detail</h1>
        <div className="flex w-[118px] justify-between">
          <LogoCreditcard icon={VisaIcon} />
          <LogoCreditcard icon={MasterCardIcon} />
          <LogoCreditcard icon={JCBIcon} />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="typographyTextSmMedium text-gray-700 mt-[16px]">
          Name Card
        </h1>
        <input type="text" />
        <h1 className="mb-[6px] typographyTextSmMedium text-gray-700">
          Card Number
        </h1>
        <PaymentInputsWrapper
          {...wrapperProps}
          styles={{
            inputWrapper: {
              base: css`
                border-radius: 8px;
              `,
            },
          }}
        >
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps()} />
        </PaymentInputsWrapper>
        <div className="flex mt-[16px]">
          <div className="w-[30vw]">
            <h1 className="mb-[6px] typographyTextSmMedium text-gray-700">
              Expiry
            </h1>
            <PaymentInputsWrapper
              {...wrapperProps}
              styles={{
                inputWrapper: {
                  base: css`
                    border-radius: 8px;
                  `,
                },
                input: {
                  expiryDate: css`
                    width: 5rem;
                  `,
                },
              }}
            >
              <input {...getExpiryDateProps()} />
            </PaymentInputsWrapper>
          </div>
          <div className="w-[30vw] ml-[16px] ">
            <h1 className="mb-[6px] typographyTextSmMedium text-gray-700">
              CVV
            </h1>
            <PaymentInputsWrapper
              {...wrapperProps}
              styles={{
                inputWrapper: {
                  base: css`
                    border-radius: 8px;
                  `,
                },
                input: {
                  cvc: css`
                    width: 5rem;
                  `,
                },
              }}
            >
              <input {...getCVCProps({ onChange: handleChangeCVC })} />
            </PaymentInputsWrapper>
          </div>
        </div>
      </div>
      <div className="flex mt-[39px]">
        <h1 className="text-primary-500 typographyTextXsMedium">
          Set as default bank account
        </h1>
      </div>
      <div className="absolute bottom-[20%] left-[25%]">
      <div className="flex justify-center ">
      <button className="bg-primary-500 text-base-white typographyTextMdMedium rounded-[8px] w-[238px] h-[48px]">
        Send
      </button>
      </div>
      </div>
    </div>
  );
};
export default AddCardPage;
