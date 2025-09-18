"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import LoadingLottie from "@/components/home/loadingLottie";

function IntroScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // 아이콘 및 애니메이션 관련 배열 설정
  const icons = [
    {
      src: "/images/airplane.svg",
      alt: "비행기 로고",
      initial: { x: -100, y: 150 },
      animate: { x: 60, y: -40 },
      width: 80,
      height: 80,
    },
    {
      src: "/images/favicon.svg",
      alt: "여행도감 로고",
      initial: { x: -100 },
      animate: { x: -30 },
      width: 100,
      height: 100,
    },
    {
      src: "/images/car.svg",
      alt: "차 로고",
      initial: { x: 150, y: 30 },
      animate: { x: 40, y: 30 },
      width: 100,
      height: 100,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* 상단 아이콘 애니메이션 */}
            <div className="flex items-center justify-center relative">
              {icons.map((icon, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  initial={icon.initial}
                  animate={icon.animate}
                  transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="object-contain"
                    priority
                  />
                </motion.span>
              ))}
            </div>

            {/* 중앙 로고 */}
            <div className="flex flex-col items-center justify-center gap-4 translate-y-18">
              <Image
                src="/images/typo-loading.svg"
                alt="여행도감"
                width={150}
                height={150}
                className="object-contain w-[70%]"
                priority
              />
              <Image
                src="/images/subtitle.svg"
                alt="부제목"
                width={100}
                height={100}
                className="object-contain w-[70%]"
                priority
              />
            </div>
          </motion.div>

          {/* 로딩중 */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 0.8,
              duration: 0.4,
            }}
          >
            <LoadingLottie />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const introSeen = sessionStorage.getItem("introSeen");

    if (introSeen === null) {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, []);

  if (!isHydrated || showIntro === null) {
    return <div className="h-screen"></div>;
  }

  if (showIntro) {
    return (
      <IntroScreen
        onFinish={() => {
          setShowIntro(false);
          sessionStorage.setItem("introSeen", "true");
        }}
      />
    );
  }

  return (
    <>
      {children}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar closeOnClick pauseOnHover draggable />
    </>
  );
}
