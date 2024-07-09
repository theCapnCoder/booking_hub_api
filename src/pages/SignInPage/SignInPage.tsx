import { FC } from "react";
import Form from "../../components/Form/Form";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormLayout from "../../components/FormLayout/FormLayout";
import Input from "../../components/Input/Input";

const SignInPage: FC = () => {
  return (
    <FormLayout>
      <Form title="Sign In" textButton="Sign In" autoComplete="off">
        <Input
          label="Email"
          name="email"
          type="email"
          dataTestId="auth-email"
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          dataTestId="auth-password"
          required
        />
      </Form>
      <FormFooter
        text="Don't have an account? "
        textLink="Sign Up"
        formType="sign-up"
        href="/sign-up"
      />
    </FormLayout>
  );
};

export default SignInPage;
