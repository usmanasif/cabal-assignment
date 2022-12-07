import * as React from "react";
import Papa from "papaparse";
import { uploadCsv } from "./apiCalls"
import DataGrid from "./dataGrid"

export default CsvUploader = ({ setMembers }) => {
  const [csvFile, setCsvFile] = React.useState(null)
  const [data, setData] = React.useState([])
  const [columns, setColumns] = React.useState([])

  const uploadFile = async () => {
    res = await uploadCsv(csvFile)
    setMembers(res.data)
  }

  React.useEffect(() =>{
    handleParse()
  }, [csvFile])

  const handleParse = () => {
         
    // If user clicks the parse button without
    // a file we show a error
    if (!csvFile) return console.error("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        const columns = Object.keys(parsedData[0]);
        setData(parsedData);
        setColumns(columns);
        console.log(parsedData)
    };
    reader.readAsText(csvFile);
};

  return (<>
  <div>
    <label>Upload CSV</label>
    <input type="file" onChange={(e) => setCsvFile(e.target.files[0])}/>
    <button onClick={uploadFile}>Upload</button>
  </div>
  <div>
    <DataGrid data={data} columns={columns} />
  </div>
  </>);
};