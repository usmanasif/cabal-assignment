import axios from "axios";

export const uploadCsv = (file) => {
  const formData = new FormData();
  formData.append("file", file)
  return axios.post("/imports", formData)
}