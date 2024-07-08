import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Event1Image from "../../../public/Event1Image.jpg";
import Event2Image from "../../../public/Event2Image.jpg";
import Event3Image from "../../../public/Event3Image.jpg";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  {
    src: Event1Image,
    alt: "Evento 1",
    text: "Café com Investidores - 25/09/24",
  },
  {
    src: Event2Image,
    alt: "Evento 2",
    text: "Palestra Profissional Moderno - 18/10/24",
  },
  { src: Event3Image, 
    alt: "Evento 3", 
    text: "Networking Event - 10/11/25" },
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
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl xs:text-[16px] flex flex-wrap">
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
