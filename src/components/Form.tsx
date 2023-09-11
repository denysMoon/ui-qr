import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form as FormBootstrap } from "react-bootstrap";

type Inputs = {
  qrString: string;
};

interface IForm {
  getBase64: (searchString: string) => Promise<void>;
}

const schema = yup
  .object({
    qrString: yup
      .string()
      .required("Type something")
      .min(2, "Must be at least 2 characters"),
    required: yup.string(),
  })
  .required();

export const Form: React.FC<IForm> = ({ getBase64 }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getBase64(data.qrString);
    reset();
  };

  return (
    <FormBootstrap onSubmit={handleSubmit(onSubmit)}>
      <div className="formWrapper">
        <FormBootstrap.Control
          type="text"
          placeholder="Type here"
          aria-label="Form input"
          {...register("qrString")}
        />
        <Button type="submit" size="lg" className="formButton">
          Get
        </Button>
      </div>
      {errors.qrString && <span>{errors.qrString?.message}</span>}
    </FormBootstrap>
  );
};
