import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormLayout from "../../components/FormLayout/FormLayout";
import Input from "../../components/Input/Input";
import {
  validateEmail,
  validateFullName,
  validatePassword,
} from "../../helpers/validation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signUp } from "../../redux/reducers/authReducer/actionCreators";
import { SignUpParams } from "../../redux/reducers/authReducer/types";
import { authSelector } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";

const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(authSelector);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    password: string;
  }>({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});
  const [touched, setTouched] = useState<{
    fullName: boolean;
    email: boolean;
    password: boolean;
  }>({
    fullName: false,
    email: false,
    password: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleSubmit = (data: Record<string, string>) => {
    const signUpParams: SignUpParams = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    dispatch(signUp(signUpParams)).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    const fullNameValidation = validateFullName(formData.fullName);
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    const newErrors: { fullName?: string; email?: string; password?: string } =
      {};

    if (touched.fullName && fullNameValidation.error) {
      newErrors.fullName = fullNameValidation.message;
    }
    if (touched.email && emailValidation.error) {
      newErrors.email = emailValidation.message;
    }
    if (touched.password && passwordValidation.error) {
      newErrors.password = passwordValidation.message;
    }

    setErrors(newErrors);
    setIsFormValid(
      touched.fullName &&
        touched.email &&
        touched.password &&
        Object.keys(newErrors).length === 0
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
      <Form title="Sign Up" autoComplete="off" onSubmit={handleSubmit}>
        <Input
          label="Full name"
          name="fullName"
          type="text"
          dataTestId="auth-full-name"
          required
          error={touched.fullName ? errors.fullName || "" : ""}
          value={formData.fullName}
          onChange={handleInputChange}
          onBlur={() =>
            setTouched((prevTouched) => ({ ...prevTouched, fullName: true }))
          }
        />
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
          Sign Up
        </Button>
      </Form>
      <FormFooter
        text="Already have an account? "
        textLink="Sign In"
        formType="sign-in"
        href="/sign-in"
      />
    </FormLayout>
  );
};

export default SignUpPage;
