import styled from 'styled-components';

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

  h1, h2, label {
    font-weight: 700;
    font-size: 24px;
    color: #635A56;
    text-align: center;
    margin-bottom: 40px;
  }

  h2, label {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  button {
    width: 200px;
    height: 30px;
    background-color: #EA5E53;
    color: white;
    border: 0px;
    border-radius: 20px;
  }

  .pix-container {
    margin-bottom: 30px;
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

  h1, h2 {
    font-weight: 700;
    font-size: 24px;
    color: #635A56;
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
  PaymentSuccessContainer,
};