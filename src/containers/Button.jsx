const Button = ({ children, buttonStyle }) => {
    return (
      <button className="flex justify-between items-center" style={buttonStyle}>
        {children}
      </button>
    );
  };
  
  export default Button;
  