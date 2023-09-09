import { Form } from "../components/Form";
import { QrImage } from "../components/QrImage";

export const Main: React.FC = () => {
  return (
    <div>
      <h1>Get your QR code</h1>
      <Form />
      <QrImage />
    </div>
  );
};
