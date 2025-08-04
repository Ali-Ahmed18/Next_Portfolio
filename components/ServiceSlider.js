import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

const serviceData = [
  {
  icon: <RxCrop />,
  title: "Full-Stack Web Development",
  description: "I build modern web apps using MERN stack tools.",
},
{
  icon: <RxPencil2 />,
  title: "Custom API Development",
  description: "Clean, scalable APIs tailored to your project needs.",
},
{
  icon: <RxDesktop />,
  title: "Real-Time Application",
  description: "Create fast, interactive apps with real-time features.",
},
{
  icon: <RxReader />,
  title: "E-commerce Solutions",
  description: "Sell online with secure and responsive web stores.",
},
{
  icon: <RxRocket />,
  title: "Scalable and Secure Database Design",
  description: "Reliable databases built for performance and growth.",
}
];

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 
            sm:gap-x-4 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
