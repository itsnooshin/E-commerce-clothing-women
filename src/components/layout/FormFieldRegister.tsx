import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormFieldRegister = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="firstname"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            label="First Name"
            type="text"
            onChange={onChange}
            error={Boolean(errors.firstname)}
            helperText={errors.firstname?.message}
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            label="Last Name"
            type="text"
            onChange={onChange}
            error={Boolean(errors.lastname)}
            helperText={errors.lastname?.message}
          />
        )}
      />
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
    </form>
  );
};

export default FormFieldRegister;
