import { useState } from "react";
import { getQr } from "../api/qr";

export const useBase64 = () => {
  const [base64, setBase64] = useState("");
  const [loading, setLoading] = useState(false);

  const getBase64 = async (searchString: string) => {
    try {
      setLoading(true);
      const result = await getQr(searchString);

      setBase64(result.data);
    } catch (error) {
      console.error("Error fetching QR:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { base64, getBase64, loading };
};
