import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Form as FormBootstrap } from "react-bootstrap";

type Inputs = {
  qrString: string;
  required: string;
};

interface IForm {
  getBase64: (searchString: string) => Promise<void>;
}

export const Form: React.FC<IForm> = ({ getBase64 }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getBase64(data.qrString);
    reset();
  };

  return (
    <FormBootstrap onSubmit={handleSubmit(onSubmit)} className="formWrapper">
      <FormBootstrap.Control
        type="text"
        placeholder="Type here"
        aria-label="Form input"
        {...register("qrString")}
      />
      {errors.required && <span>This field is required</span>}

      <Button type="submit" size="lg" className="formButton">
        Get
      </Button>
    </FormBootstrap>
  );
};
