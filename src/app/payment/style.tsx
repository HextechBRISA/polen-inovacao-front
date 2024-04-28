import styled from "styled-components";

const PaymentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h1,
  h2,
  h3,
  label {
    font-weight: 700;
    font-size: 24px;
    color: #635a56;
    text-align: center;
    margin-bottom: 40px;
  }

  h3,
  label {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
  }

  button {
    width: 200px;
    height: 30px;
    background-color: #ea5e53;
    color: white;
    border: 0px;
    border-radius: 20px;
  }

  @media (max-width: 400px) {
    width: 90%;
    padding: 10px;
    div {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 570px) {
    width: 90%;
    padding: 20px;
    div {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1054px) {
    width: 80%;
  }

  input[type="checkbox"] {
    display: none;
  }

  label.checkbox {
    position: relative;
    display: inline-block;
    padding-left: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  label.checkbox::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border: 2px solid #635a56;
    border-radius: 50%;
  }

  input[type="checkbox"]:checked + label.checkbox::before {
    background-color: #635a56;
  }

  label.checkbox::after {
    content: attr(data-label);
    font-weight: 500;
    display: block;
    font-size: 18px;
    margin: 0px;
    color: #635a56;
  }
`;

const PaymentCard = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const PaymentForm = styled.form`
  width: 290px;
  margin: 0px 0px 0px 20px;

  @media (max-width: 790px) {
    width: 290px;
    margin: 10px 0px 0px 0px;
  }

  div {
    display: flex;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #8e8e8e;
  font-size: 17px;
  &::placeholder {
    color: #8e8e8e;
  }
`;

const ExpiryInput = styled(Input)`
  width: 100%;
`;
const CVCInput = styled(Input)`
  width: 50%;
  margin-left: 15px;
`;

const PaymentPix = styled.div`
  margin-bottom: 30px;
`;

const PaymentSuccessContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: #635a56;
    text-align: center;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .check-icon {
    color: green;
    font-size: 30px;
    margin: 20px 0px;
  }

  @media (max-width: 500px) {
    width: 80%;
    padding: 20px;
  }
`;

export {
  PaymentContainer,
  PaymentCard,
  PaymentForm,
  Input,
  ExpiryInput,
  CVCInput,
  PaymentPix,
  PaymentSuccessContainer,
};
