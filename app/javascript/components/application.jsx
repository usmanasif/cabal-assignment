import * as React from "react";
import * as ReactDOM from "react-dom";
import CsvUploader from "./csvUploader";

const App = () => {
  const [members, setMembers] = React.useState([])

  return <CsvUploader setMembers={setMembers} />;
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("app");
  ReactDOM.render(<App arg="Rails 7 with ESBuild" />, rootEl);
});
