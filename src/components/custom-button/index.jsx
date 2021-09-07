import "./index.css";

const CustomButton = ({ label, onClick = () => console.log("please provide onClick function"), ...otherProps }) => {
  return (
    <button className="custom-button" onClick={onClick} {...otherProps}>
      {label}
    </button>
  );
};

export default CustomButton;
