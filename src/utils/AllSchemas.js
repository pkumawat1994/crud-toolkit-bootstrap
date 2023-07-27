import * as Yup from "yup";

export const registerSchema = Yup.object({
name: Yup.string("Enter your Name").required("Name is required"),
email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
mobile: Yup.string("Enter your Mobile number")
      .min(10, "Mobile Number should be 10 characters length")
      .required("Mobile Number is required"),
city: Yup.string("Enter your city").required("city is required"),
password: Yup.string("Enter your password")
    .min(3, "Password should be of minimum 3 characters length").max(30,"Password should be maximum 30 character")
    .required("Password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Password Must be  8 Characters combination of Uppercase,Lowercase, Number special case Character"
    // ),
});