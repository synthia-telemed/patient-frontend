import HeaderWithBack from "../../components/HeaderWithBack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Formik, Field as FormikField } from "formik";
import { css } from "styled-components";
import Script from "react-load-script";
import images from "react-payment-inputs/images";
import LogoCreditcard from "../../components/SettingPanel/LogoCreditcard";
import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";
import Switch from "react-switch";
import useAPI from "../../hooks/useAPI";

let Omise;
const AddCardPage = () => {
  const {
    meta,
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [apiDefault] = useAPI();
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const handleLoadScript = () => {
    Omise = window.Omise;
    Omise.setPublicKey("pkey_test_5stb95e6pqzxz4rrift");
  };
  const createToken = data => {
    Omise = window.Omise;
    let tokenParameters = {
      expiration_month: data.expiryDate.substr(0, 2),
      expiration_year: data.expiryDate.substr(4, 6),
      name: data.name,
      number: data.cardNumber.trim(),
      security_code: data.cvc
    };
    Omise.createToken("card", tokenParameters, async function (statusCode, response) {
      // response["id"] is token identifier
      let body = {
        card_token: response["id"],
        is_default: checked,
        name: data.name
      };
      const res = await apiDefault.post("/payment/credit-card", body);
    });
  };
  const handleSubmit = async data => {
    createToken(data);
    navigate(-1);
  };

  return (
    <div>
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <HeaderWithBack textHeader="Add Card" path={-1} />
      <div className="px-[16px]">
        <div className="flex justify-between w-full mt-[24px]">
          <h1 className="typographyTextMdSemibold">Card detail</h1>
          <div className="flex w-[118px] justify-between">
            <LogoCreditcard icon={VisaIcon} />
            <LogoCreditcard icon={MasterCardIcon} />
            <LogoCreditcard icon={JCBIcon} />
          </div>
        </div>
        <Formik
          initialValues={{
            cardNumber: "",
            expiryDate: "",
            cvc: "",
            name: ""
          }}
          onSubmit={data => handleSubmit(data)}
          validate={() => {
            let errors = {};
            if (meta.erroredInputs.cardNumber) {
              errors.cardNumber = meta.erroredInputs.cardNumber;
            }
            if (meta.erroredInputs.expiryDate) {
              errors.expiryDate = meta.erroredInputs.expiryDate;
            }
            if (meta.erroredInputs.cvc) {
              errors.cvc = meta.erroredInputs.cvc;
            }
            if (meta.erroredInputs.name) {
              errors.name = meta.erroredInputs.name;
            }
            return errors;
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <h1 className="typographyTextSmMedium text-gray-700 mt-[16px]">
                  Name on Card
                </h1>
                <FormikField name="name">
                  {({ field }) => (
                    <input
                      className="mt-[6px] border-[1px] border-solid border-gray-300 px-[8px] py-[10px] rounded-[8px]"
                      id="name"
                      name="name"
                      {...field}
                    />
                  )}
                </FormikField>
                <h1 className="mt-[16px] mb-[6px] typographyTextSmMedium text-gray-700">
                  Card Number
                </h1>
                <PaymentInputsWrapper
                  {...wrapperProps}
                  styles={{
                    inputWrapper: {
                      base: css`
                        border-radius: 8px;
                      `
                    }
                  }}
                >
                  <svg {...getCardImageProps({ images })} />
                  <FormikField name="cardNumber">
                    {({ field }) => (
                      <input
                        id="cardnumber"
                        name="cardnumber"
                        {...getCardNumberProps({
                          onBlur: field.onBlur,
                          onChange: field.onChange
                        })}
                        maxLength={19}
                      />
                    )}
                  </FormikField>
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
                          `
                        },
                        input: {
                          expiryDate: css`
                            width: 5rem;
                          `
                        }
                      }}
                    >
                      <FormikField name="expiryDate">
                        {({ field }) => (
                          <input
                            id="expiredate"
                            name="expiredate"
                            {...getExpiryDateProps({
                              onBlur: field.onBlur,
                              onChange: field.onChange
                            })}
                          />
                        )}
                      </FormikField>
                    </PaymentInputsWrapper>
                  </div>
                  <div className="w-[30vw] ml-[16px] ">
                    <h1 className="mb-[6px] typographyTextSmMedium text-gray-700">CVV</h1>
                    <PaymentInputsWrapper
                      {...wrapperProps}
                      styles={{
                        inputWrapper: {
                          base: css`
                            border-radius: 8px;
                          `
                        },
                        input: {
                          cvc: css`
                            width: 5rem;
                          `
                        }
                      }}
                    >
                      <FormikField name="cvc">
                        {({ field }) => (
                          <input
                            id="cvc"
                            name="cvc"
                            {...getCVCProps({
                              onBlur: field.onBlur,
                              onChange: field.onChange
                            })}
                          />
                        )}
                      </FormikField>
                    </PaymentInputsWrapper>
                  </div>
                </div>
              </div>
              <div className="flex mt-[39px] items-center">
                <h1 className="text-primary-500 typographyTextXsMedium mr-[16px]">
                  Set as default bank account
                </h1>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onColor="#303ED9"
                  offColor="#EAECF0"
                />
              </div>
              <div className="absolute bottom-[20%] left-[25%]">
                <div className="flex justify-center ">
                  <button
                    className="bg-primary-500 text-base-white typographyTextMdMedium rounded-[8px] w-[238px] h-[48px]"
                    type="submit"
                    value="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddCardPage;
