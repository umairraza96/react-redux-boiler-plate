import { useDispatch } from "react-redux";
import CustomButton from "../custom-button";
import { setExample, setExampleArr, setExampleBool, setExampleObj, toggleBool } from "../../redux/example/actions";

const ButtonDrawer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "10rem 10rem", padding: "2rem", background: "yellow", borderRadius: "4px" }}>
        <CustomButton
          label="Set Entire Example"
          onClick={() => {
            const example = {
              arr: ["1", "2"],
              obj: { string: "hello", number: 123 },
              bool: false,
            };
            dispatch(setExample(example));
          }}
        />
        <CustomButton
          label="Set Example Array"
          onClick={() => {
            const arr = ["name", 123];
            dispatch(setExampleArr(arr));
          }}
        />
        <CustomButton
          label="Set Example Object"
          onClick={() => {
            const obj = {
              string: "changed String",
              number: 321,
            };
            dispatch(setExampleObj(obj));
          }}
        />
        <CustomButton
          label="Set Example Boolean"
          onClick={() => {
            dispatch(setExampleBool(true));
          }}
        />
        <CustomButton
          label="Toggle Example Boolean"
          onClick={() => {
            dispatch(toggleBool());
          }}
        />
      </div>
    </>
  );
};

export default ButtonDrawer;
