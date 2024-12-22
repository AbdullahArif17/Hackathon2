import Image from "next/image";

export default function Main() {
  return (
    <div className="relative h-[753px] w-full">
      <Image
        src="/main.svg"
        alt="Main"
        layout="fill"
        className="z-0 object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center m-9 text-white">
        <h5 className="text-base font-bold leading-6 tracking-[0.1px]">
          SUMMER 2020
        </h5>
        <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center m-7">
          NEW COLLECTION
        </h1>
        <h4 className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#FAFAFA] text-center m-11">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="m-2">
          <button className="bg-[#2DC071] w-[221px] h-[62px] text-white text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center rounded-md ">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
