import Image from "next/image";

export default function Section() {
  return (
    <div className="w-full h-[1850px] bg-[#FAFAFA]">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-14">
          <h2 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center text-[#252B42]">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-[14px] w-[230px] font-normal leading-[20px] tracking-[0.2px] text-center p-2 text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 p-4">
      <div className="relative">
        <Image 
          src="/filter.svg" 
          alt="Men" 
          height={500} 
          width={323} 
          className="w-full object-cover"
        />
        <button className="w-[170px] h-[48px] absolute top-[426px] left-[31px] py-[12px] gap-[17px] bg-white text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
          Men
        </button>
      </div>

      <div className="relative">
        <Image 
          src="/filter1.svg" 
          alt="Women" 
          height={500} 
          width={323} 
          className="w-full object-cover"
        />
        <button className="w-[170px] h-[48px] absolute top-[426px] left-[31px] py-[12px] gap-[17px] bg-white text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
          Women
        </button>
      </div>

      <div>
        <Image 
          src="/card-item.svg" 
          alt="ACCESSORIES" 
          height={242} 
          width={325} 
          className="w-full object-cover"
        />
      </div>

      <div className="relative">
        <Image 
          src="/media.svg" 
          alt="Kids" 
          height={242} 
          width={325} 
          className="w-full object-cover"
        />
        <button className="w-[120px] h-[48px] absolute top-[176px] left-[18px] px-[40px] py-[12px] gap-[10px] bg-white text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
          Kids
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}
