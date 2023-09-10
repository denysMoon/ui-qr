import axios from "axios";
import { BASE_URL } from "../constants";

interface QrResponse {
  status: number;
  data: string;
}

export const getQr = async (searchString: string): Promise<QrResponse> => {
  try {
    const result = await axios.post(`${BASE_URL}/get-qr-code`, {
      "qr-str": searchString,
    });

    return result;
  } catch (error) {
    console.error("Error fetching QR:", error);
    throw error;
  }
};
