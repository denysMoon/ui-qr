import { useForm, SubmitHandler } from "react-hook-form";

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
    formState: { errors },
  } = useForm<Inputs>();

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
