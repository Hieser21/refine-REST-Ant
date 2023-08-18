import { AuthPage, ThemedTitle } from "@refinedev/antd";
import { AppIcon } from "components/app-icon";

export const Register = () => {
  return (
    <AuthPage
      type="register"
      title={
        <ThemedTitle
          collapsed={false}
          text="refine Project"
          icon={<AppIcon />}
        />
      }
    />
  );
};
