import { AuthPage, ThemedTitle } from "@refinedev/antd";
import { AppIcon } from "components/app-icon";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={
        <ThemedTitle
          collapsed={false}
          text="refine Project"
          icon={<AppIcon />}
        />
      }
      formProps={{
        initialValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};
