const InputBox = ({ inputStyle, placeholder }) => {
    return (
      <input
        type="text"
        className="outline-none lg:w-[476px] w-[348px] border rounded-[19px] border-[rgba(211,211,211,1)] pt-[23px] pl-[32px] font-['IBM Plex Sans'] text-[16px] font-[500] leading-[20.8px] text-left text-[rgba(135,135,135,1)]"
        style={{ ...inputStyle }}
        placeholder={placeholder}
      />
    );
  };
  
  export default InputBox;
  