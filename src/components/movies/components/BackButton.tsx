"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className="flex w-full justify-start items-center my-3 text-white hover:text-gray-300 cursor-pointer"
      onClick={handleBack}
    >
      <IoChevronBackOutline size={40} className="anilist_icon_active" />
      <span className="text-xl font-bold">Atrás</span>
    </div>
  );
}
