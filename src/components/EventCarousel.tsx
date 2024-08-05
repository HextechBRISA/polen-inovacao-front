import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Event1Image from "../../public/Event1Image.jpg";
import Event2Image from "../../public/Event2Image.jpg";
import Event3Image from "../../public/Event3Image.jpg";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  {
    src: Event1Image,
    alt: "Evento 1",
    title: "Café com Investidores",
    text: "25/09/24 às 9h",
  },
  {
    src: Event2Image,
    alt: "Evento 2",
    title: "Palestra Profissional Moderno",
    text: "18/10/24 às 16h",
  },
  { src: Event3Image, 
    alt: "Evento 3", 
    title: "Networking Event",
    text: "10/11/25 às 14h" },
];

export default function EventCarousel() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 3000 }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper w-[80%] sm:w-[90%] h-64 mx-auto rounded-[10px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-64">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h1 className="text-[#eadcd3] text-[22px] mb-2 font-bold xs:text-[20px] flex flex-wrap">
                {image.title}
              </h1>
              <h2 className="text-[#eadcd3] text-[20px] xs:text-[18px] flex flex-wrap">
                {image.text}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
        }

        .swiper-pagination-bullet {
          background-color: white !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #EA5E53 !important;
        }
      `}</style>
    </Swiper>
  );
}
