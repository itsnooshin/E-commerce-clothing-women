import { TextField } from "@mui/material";
import { PropsWithChildren } from "react";
import { Controller, FieldErrors } from "react-hook-form";
import { Control } from "react-hook-form";
import { Button } from "@mui/material";

interface FormInput {
  email: string;
  password: string;
}
interface FormFields {
  onSubmit: () => Promise<void>;
  errors: FieldErrors<FormInput>;
  control: Control<FormInput>;
}

function FormFieldLogin(props: PropsWithChildren<FormFields>) {
  const { onSubmit, control, errors } = props;
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      noValidate
      onSubmit={onSubmit}
    >
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            label="email"
            type="email"
            onChange={onChange}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            label="Password"
            type="password"
            onChange={onChange}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button
        type="submit"
        sx={{
          color: "#fff",
          backgroundColor: "#5A6D57",
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "#5A6D57" },
        }}
      >
        Register Now
      </Button>
    </form>
  );
}

export default FormFieldLogin;
