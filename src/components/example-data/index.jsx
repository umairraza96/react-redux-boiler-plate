import { useSelector } from "react-redux";
import "./index.css";
const ExampleData = () => {
  const example = useSelector((state) => state.example);
  return (
    <div className="example-data">
      <h1>Redux's Example</h1>
      <table>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Object</td>
            <td>Boolean</td>
          </tr>
          <tr>
            <td>{`[${example.arr.map((arr) => arr)}]`}</td>
            <td>{`{${Object.entries(example.obj).map((values) => `${values.join(":")}`)}}`}</td>
            <td>{example.bool.toString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExampleData;
