import { ButtonProps } from "@/types";

const CustomButton = ({ text }: ButtonProps) => {
  return (
    <>
      <button className='px-8 py-4 rounded-lg text-white bg-[#ED8F28] hover:bg-[#971C25] transition-all'>
        {text}
      </button>
    </>
  );
};

export default CustomButton;
