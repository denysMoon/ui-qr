import { useForm, SubmitHandler } from "react-hook-form";
import { useBase64 } from "../hooks/useBase64";

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
  const { getBase64 } = useBase64();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getBase64(data.qrString);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Type here..." {...register("qrString")} />

      {errors.required && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
