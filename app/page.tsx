"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <section className="home-hero mb-16">
        <div className="w-6xl m-auto">
          <h1 className="text-[124px] leading-tight font-black">Please, don&apos;t start from scratch</h1>
          <h2 className="text-[74px] font-extrabold">Build your <em>FPS-RPG</em> with Entropy instead</h2>
        </div>
      </section>

      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3.25}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src="/screenshots/shot1.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot7.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot2.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot5.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot3.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot4.png" /></SwiperSlide>
        <SwiperSlide><img src="/screenshots/shot6.png" /></SwiperSlide>
      </Swiper>
  
      <section className="reasons mt-16 mb-16">
        <div className="w-6xl m-auto">
          <h3 className="text-[54px] font-bold">- Add a working quest in minutes</h3>
          <h3 className="text-[54px] font-bold">- Playable combat from day one</h3>
          <h3 className="text-[54px] font-bold">- Instant open world to explore</h3>
          <h3 className="text-[54px] font-bold">- Tell the world how it should feel</h3>
          <h3 className="text-[54px] font-bold">- Change the game as fast as you think</h3>
        </div>
      </section>
      <section className="more mb-16">
        <div className="w-6xl m-auto">
          <h4 className="text-[74px] font-extrabold">Stop rebuilding the same systems everyone rebuilds.</h4>
          <p className="text-[44px] font-regular">Combat, quests, traversal, and world systems already work - you just shape them.</p>
          {/* <h4 className="text-[54px] font-bold">Entropy is for people who want to design games, not design systems.</h4> */}
        </div>
      </section>
      <section className="prcing">
        <div className="w-6xl m-auto">
          <h5 className="text-[54px] font-bold">Entropy saves time, and takes a whole lot of effort for me to build. Get in early and let&apos;s build a relationship.</h5>
          <p className="text-[34px] font-regular">$49.99 one-time</p>
          <p className="text-[34px] font-regular">$49.99 monthly</p>
          <p className="text-[34px] font-regular">$499.99 monthly</p>
        </div>
      </section>
      <ReactLenis root />
    </>
  );
}
