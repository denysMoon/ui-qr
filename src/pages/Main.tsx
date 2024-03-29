import { useBase64 } from "../hooks/useBase64";
import { useMount } from "../hooks/useMount";
import { VERCEL } from "../constants";
import { Form } from "../components/Form";
import { QrImage } from "../components/QrImage";

export const Main: React.FC = () => {
  const { base64, loading, getBase64 } = useBase64();

  useMount(() => {
    getBase64(VERCEL);
  });

  return (
    <div className="contentWrapper">
      <h1>Get your QR-code</h1>
      <Form getBase64={getBase64} />
      <QrImage base64={base64} loading={loading} />
    </div>
  );
};
