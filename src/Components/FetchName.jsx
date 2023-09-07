import Axios from "axios";
import {  useState } from "react";
const FetchName = () => {
  const [apiRes, setApiRes] = useState({});
  const [name, setName] = useState("");

  const getAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setApiRes(res.data);
        console.log(res.data);
    });
  };
  const sendName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={sendName} placeholder="ex:Hossein" />
      <br />
      <button onClick={getAge}>Get Your Age(Load From API)</button>
      <br />
      <h3>Predicted Age:{apiRes?.age}</h3>
      <h3>Selected Name : {apiRes?.name}</h3>
    </div>
  );
};
export default FetchName;
