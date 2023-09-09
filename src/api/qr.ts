import axios from "axios";
import { BASE_URL } from "../constants";

export const getQr = async (searchString: string): Promise<string> => {
  try {
    const result = await axios.post(`${BASE_URL}/get-qr-code`, {
      "qr-str": searchString,
    });

    const { data } = result;

    return data;
  } catch (error) {
    console.error("Error fetching QR:", error);
    throw error;
  }
};
