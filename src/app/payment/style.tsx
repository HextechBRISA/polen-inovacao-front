import React from "react";

const PaymentContainer = ({ children }) => (
  <div className="bg-white bg-opacity-30 mt-[130px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-1/2 sm:w-5/6 xs:w-5/6 mb-[50px]">
    {children}
  </div>
);

const PaymentCard = ({ children }) => (
  <div className="b-8 flex-col md:mb-5">{children}</div>
);

const PaymentForm = ({ children }) => (
  <form className="w-72 mt-4">{children}</form>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400"
  />
);

const ExpiryInput = ({ ...props }) => (
  <input
    {...props}
    className="w-[166px] h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400"
  />
);

const CVCInput = ({ ...props }) => (
  <input
    {...props}
    className="w-[110px] h-9 mb-2 pl-5 rounded-[50px] text-lg placeholder-gray-400 ml-1"
  />
);

const PaymentPix = ({ children }) => (
  <div className="mb-8">
    {children}
  </div>
);

export {
  PaymentContainer,
  PaymentCard,
  PaymentForm,
  Input,
  ExpiryInput,
  CVCInput,
  PaymentPix,
};
