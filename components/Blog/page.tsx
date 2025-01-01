import Image from "next/image";

export default function Blog() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto py-[80px] gap-[80px]">
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <div className="w-full h-auto gap-[10px] flex items-center flex-col">
            <h6 className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#23A6F0]">
              Practice Advice
            </h6>
            <h3 className="text-[#252B42] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center w-[239px] h-[100px]">
              Featured Products
            </h3>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373] h-10 w-[261px] p-3">
              Problems trying to resolve the conflict between the two major
            </p>
          </div>


          <div className="h-auto gap-[30px] w-full flex flex-col mt-16">
  <div className="flex flex-col items-center w-full h-auto">
    <div className="w-[330px] h-auto shadow-[0px_2px_4px_0px_#0000001A] bg-white relative">
      <Image
        src={"/unsplash_gEZkP23pLZ4.svg"}
        alt={"blog1"}
        height={300}
        width={330}
        className="w-full h-auto"
      />
      <div className="bg-[#E74040] w-[58px] h-[24px] absolute top-[20px] left-[20px] px-[10px] m-4 rounded-tl-[3px] shadow-[0px_2px_4px_0px_#0000001A]">
        <h6 className="text-white text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center">
          NEW
        </h6>
      </div>
    </div>

    <div className="w-[330px] h-[306px] p-[25px_25px_35px_25px] shadow-[0px_2px_4px_0px_#0000001A] gap-[10px] flex flex-col justify-between">
      <div className="flex flex-row w-[159px] h-[16px] gap-[15px]">
        <h6 className="text-[#8EC2F2] text-[12px] font-normal leading-[16px] tracking-[0.2px] w-[56px] h-[16px] text-left">
          Google
        </h6>
        <h6 className="text-[#737373] text-[12px] font-normal leading-[16px] tracking-[0.2px] w-[56px] h-[16px] text-left">
         Trending
        </h6>
        <h6 className="text-[#737373] text-[12px] font-normal leading-[16px] tracking-[0.2px] w-[56px] h-[16px] text-left">
          New
        </h6>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
  );
}
