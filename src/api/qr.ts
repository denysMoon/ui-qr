import axios from "axios";
// import { BASE_URL } from "../constants";

export const getQr = async (searchString: string) => {
  try {
    const { data } = await axios.post(`http://localhost:8000/api/get-qr-code`, {
      "qr-str": searchString,
    });

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching QR:", error);
  }
};
