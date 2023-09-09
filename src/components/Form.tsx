import { useForm, SubmitHandler } from "react-hook-form";
import { getQr } from "../api/qr";

type Inputs = {
  qrString: string;
  required: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getQr(data.qrString);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Type here..." {...register("qrString")} />

      {errors.required && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
