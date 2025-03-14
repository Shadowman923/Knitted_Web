import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/Store/hooks";
import { setName } from "@/Store/Features/userSlice";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName: string;
  lastName: string;
}

export default function Intro() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    dispatch(setName(data.firstName));
    navigate("/main");
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First name</Field.Label>
          <Input {...register("firstName", { required: "Имя обязательно" })} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Last name</Field.Label>
          <Input {...register("lastName")} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" onClick={() => navigate("/main")}>
          Sign in
        </Button>
        <Button type="button">Cancel</Button>
      </Stack>
    </form>
  );
}
