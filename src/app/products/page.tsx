"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Footer } from "../components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Coworking",
    description:
      "O programa de incubação é direcionado para as startups que já atuam no mercado e possuem um MVP - Produto Mínimo Viável. Seu objetivo é orientar o processo de crescimento da marca, oferecendo mentorias nacionais e internacionais e todas as ferramentas necessárias para o empreendedor.",
    imgSrc:
      "https://poleninovacao.com.br/assets/images/home/icone-coworking.png",
    imgAlt: "Coworking",
    imgWidth: 80,
    imgHeight: 80,
  },
  {
    id: 2,
    name: "Mentorias",
    description:
      "As mentorias acontecem de forma online com profissionais que atuam em diversas ramificações do mercado tais como: formalização, notas fiscais, MEI, modelo de negócios, redes sociais, contabilidade, comunicação empresarial, gestão de mídias, identidade de marca, visual, assessoria de imprensa, registro de marca no INPI ou até mesmo gastronomia!",
    imgSrc:
      "https://poleninovacao.com.br/assets/images/home/icone-mentoria.png",
    imgAlt: "Mentorias",
    imgWidth: 80,
    imgHeight: 80,
  },
  {
    id: 3,
    name: "Produção de Podcasts",
    description:
      "O programa de germinação é direcionada para os empreendedores que possuem uma ideia e desejam implementá-la! Seu objetivo é orientar a formalização e estruturação da startup!",
    imgSrc:
      "https://poleninovacao.com.br/assets/images/home/icone-podcasts.png",
    imgAlt: "Produção de Podcasts",
    imgWidth: 50,
    imgHeight: 80,
  },
  {
    id: 4,
    name: "Imersões Internacionais",
    description:
      "A área internacional atua no desenvolvimento e expansão do processo de internacionalização do ecossistema, com o intuito de fomentar o ensino de qualidade, pesquisa e inovação através da imersão internacional.",
    imgSrc:
      "https://poleninovacao.com.br/assets/images/home/icone-imersoes.png",
    imgAlt: "Imersões Internacionais",
    imgWidth: 80,
    imgHeight: 80,
  },
  {
    id: 5,
    name: "Germinação e Incubação",
    description:
      "O programa de germinação é direcionada para os empreendedores que possuem uma ideia e desejam implementá-la! Seu objetivo é orientar a formalização e estruturação da startup! O programa de incubação é direcionado para as startups que já atuam no mercado e possuem um MVP - Produto Mínimo Viável. Seu objetivo é orientar o processo de crescimento da marca, oferecendo mentorias nacionais e internacionais e todas as ferramentas necessárias para o empreendedor.",
    imgSrc:
      "https://poleninovacao.com.br/assets/images/home/icone-germinacao.png",
    imgAlt: "Germinação e Incubação",
    imgWidth: 80,
    imgHeight: 80,
  },
];

const ProductSplash = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={onClose}
  >
    <div
      className="flex flex-col items-center bg-[#eadcd3] p-8 rounded-[20px] shadow-md max-w-md w-full xs:w-4/5 text-center relative"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-[20px] font-sans font-bold mb-5">{product.name}</h2>
      <p className="text-justify leading-tight">{product.description}</p>
      <IoClose
        onClick={onClose}
        className="mt-4 text-[27px] text-[#ee7a3c] absolute top-2 right-5 xs:right-2 cursor-pointer"
      />
    </div>
  </div>
);

export default function PolenProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="w-full min-h-screen flex-grow relative">
      <div className="w-full h-auto mb-[20px] sm:mb-[130px] mx-auto mt-[130px] flex flex-col justify-center items-center">
        <h1 className="text-[25px] xs:text-[23px] xs:w-[300px] font-sans font-bold text-center uppercase leading-tight">
          Conheça os nossos produtos:
        </h1>
        <div className="flex flex-wrap p-5 justify-center items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-32 flex flex-col items-center justify-center m-6 xs:m-4 text-center cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="bg-[#eadcd3] bg-opacity-70 shadow-md rounded-full w-32 h-32 flex justify-center items-center p-4 mb-4">
                <img
                  src={product.imgSrc}
                  alt={product.imgAlt}
                  width={product.imgWidth}
                  height={product.imgHeight}
                />
              </div>
              <h2 className="font-bold font-sans text-[20px] leading-tight">
                {product.name}
              </h2>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductSplash
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
