import { FC } from "react";
import Form from "../../components/Form/Form";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormLayout from "../../components/FormLayout/FormLayout";
import Input from "../../components/Input/Input";

const SignUpPage: FC = () => {
  const handleSubmit = (formData: Record<string, string>) => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <FormLayout>
      <Form
        title="Sign Up"
        textButton="Sign Up"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          label="Full name"
          name="full-name"
          type="text"
          dataTestId="auth-full-name"
          required
        />
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
        formType="sign-in"
        text="Already have an account? "
        textLink="Sign In"
        href="/sign-in"
      />
    </FormLayout>
  );
};

export default SignUpPage;
