import Image from "next/image";

export default function Section2() {
  return (
    <div className="w-full h-auto pt-[120px]">
      <div className="gap-7 w-full h-auto">
        <div className="flex flex-col items-center w-full h-auto gap-[32.78px]">
          <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h1 className="text-[#252B42] text-[40px] font-bold leading-[50px] tracking-[0.2px] mt-0 mb-0 m-24 text-center">
            Part of the Neural Universe
          </h1>
          <h4 className="text-[#737373] text-[20px] font-normal leading-[30px] tracking-[0.2px] mt-0 mb-0 m-24 text-center">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col gap-[25px]">
            <button className="bg-[#23A6F0] text-white px-[40px] py-[15px] rounded-tl-[5px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
              BUY NOW
            </button>
            <button className="bg-white text-[#23A6F0] px-[40px] py-[15px] border border-[#23A6F0] rounded-tl-[5px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full h-[407px] flex justify-center">
          <Image
            src={"/asian-woman-man-with-winter-clothes.svg"}
            alt="asians"
            width={463}
            height={403}
            className="object-contain mt-4"
          />
        </div>
      </div>
    </div>
  );
}
