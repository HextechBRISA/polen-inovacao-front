import React from "react";

const PaymentContainer = ({ children }) => (
  <div className="bg-[#eadcd3] bg-opacity-50 mt-[130px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-1/2 sm:w-5/6 xs:w-[90%] mb-[50px]">
    {children}
  </div>
);

const PaymentCard = ({ children }) => (
  <div className="flex flex-col items-center mb-2">{children}</div>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full xs:w-[90%] h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400"
  />
);

const ExpiryInput = ({ ...props }) => (
  <input
    {...props}
    className="w-[166px] xs:w-[145px] h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400"
  />
);

const CVCInput = ({ ...props }) => (
  <input
    {...props}
    className="w-[110px] xs:w-[100px] h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400 ml-1"
  />
);

const PaymentPix = ({ children }) => <div className="mb-4 mt-4">{children}</div>;

const PaymentDeposit = () => (
  <div className="border border-gray-300 rounded-lg mb-4 text-left">
    <h3 className="font-normal text-base mb-2 uppercase">Dados bancários:</h3>
    <p className="mb-2"><strong>Banco:</strong> Itaú</p>
    <p className="mb-2"><strong>Agência:</strong> 1234</p>
    <p className="mb-2"><strong>Conta Corrente:</strong> 567890-1</p>
    <p className="mb-2"><strong>Nome do Titular:</strong> Pólen Inovação</p>
  </div>
);

export {
  PaymentContainer,
  PaymentCard,
  Input,
  ExpiryInput,
  CVCInput,
  PaymentPix,
  PaymentDeposit
};
