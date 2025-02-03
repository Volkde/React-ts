import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input"; 
import Button from "../Button/Button";
import { EmployeeFormContainer, InputsContainer, CheckboxContainer } from "./styles";

function EmployeeForm() {

  const schema = Yup.object().shape({

    fullName: Yup.string()
      .required("Full Name нужно ")
      .min(5, "Мин. 5 символов")
      .max(50, "Max 50 символов "),
    age: Yup.number()

      .required("Введите возраст")
      .min(18, "Минимальный возраст 18")
      .max( 80, "Максимальный возраст80"),
    jobTitle: Yup.string()
      .max(30, "Максимм 30 символов"),
    terms: Yup.boolean()

      .oneOf([true], "Надо принять правила использования"),
  });

  const formik = useFormik ({
    initialValues: {
      fullName : "",
      age: "",
      jobTitle: "",
      terms: false,
    },

    validationSchema: schema,
    onSubmit: (values) => {

      console.log("Form Values:", values);

    },
  });

  return (

    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <h2>Employee Form</h2>
      <InputsContainer>

        <Input
          name="fullName"
          label="Full Name*"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter full name"
          error={formik.errors.fullName}

        />
        <Input

          name="age"
          label="Age*"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter age"
          error={formik.errors.age}

        />
        <Input

          name="jobTitle"
          label="Job Title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          placeholder="Enter job title"
          error={formik.errors.jobTitle}

        />
      </InputsContainer>

      <CheckboxContainer>

        <input
          type="checkbox"
          name="terms"
          checked={formik.values.terms}
          onChange={formik.handleChange}
        />

        <label htmlFor="terms">I accept the terms</label>
      </CheckboxContainer>

      {formik.errors.terms && <div style={{ color: "red" }}>{formik.errors.terms}</div>}

      <Button type="submit" name="Create" />

    </EmployeeFormContainer>
   );
}

export default EmployeeForm;
