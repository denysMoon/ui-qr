import axios from "axios";
import { BASE_URL } from "../constants";

interface IResponse {
  data: string;
  status: number;
}

export const getQr = async (searchString: string): Promise<IResponse> => {
  try {
    const { data } = await axios.post(`${BASE_URL}/get-qr-code`, {
      "qr-str": searchString,
    });

    return data;
  } catch (error) {
    console.error("Error fetching QR:", error);
    throw error;
  }
};
