import { AuthPage, ThemedTitle } from "@refinedev/antd";
import { AppIcon } from "components/app-icon";

export const ForgotPassword = () => {
  return (
    <AuthPage
      type="forgotPassword"
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
