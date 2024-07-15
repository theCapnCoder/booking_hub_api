import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormLayout from "../../components/FormLayout/FormLayout";
import Input from "../../components/Input/Input";

import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../helpers/validation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SignInParams } from "../../redux/reducers/authReducer/types";
import { signIn } from "../../redux/reducers/authReducer";
import { authSelector } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";

const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(authSelector);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>(
    {
      email: false,
      password: false,
    }
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (data: Record<string, string>) => {
    const signInParams: SignInParams = {
      email: data.email,
      password: data.password,
    };
    dispatch(signIn(signInParams)).then(() => {
      navigate("/");
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  useEffect(() => {
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    const newErrors: { email?: string; password?: string } = {};

    if (touched.email && emailValidation.error) {
      newErrors.email = emailValidation.message;
    }
    if (touched.password && passwordValidation.error) {
      newErrors.password = passwordValidation.message;
    }

    setErrors(newErrors);
    setIsFormValid(
      touched.email && touched.password && Object.keys(newErrors).length === 0
    );
  }, [formData, touched]);

  if (isLoading) {
    return (
      <FormLayout>
        <Loader />
      </FormLayout>
    );
  }

  return (
    <FormLayout>
      <Form title="Sign In" autoComplete="off" onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          dataTestId="auth-email"
          required
          error={touched.email ? errors.email || "" : ""}
          value={formData.email}
          onChange={handleInputChange}
          onBlur={() =>
            setTouched((prevTouched) => ({ ...prevTouched, email: true }))
          }
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          dataTestId="auth-password"
          required
          error={touched.password ? errors.password || "" : ""}
          value={formData.password}
          onChange={handleInputChange}
          onBlur={() =>
            setTouched((prevTouched) => ({ ...prevTouched, password: true }))
          }
        />

        <Button
          data-test-id="auth-submit"
          type="submit"
          disabled={!isFormValid}
        >
          Sign In
        </Button>
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
