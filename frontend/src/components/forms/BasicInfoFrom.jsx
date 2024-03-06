import { React } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./BasicInfoFrom.css";
import { useUserData } from "../../ContextApi/UserContext";
import { UseForm } from "../../ContextApi/FormContext";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  propertyType: Yup.string().required("Property type is required"),
  negotiable: Yup.string().required("Negotiable is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  ownership: Yup.string().required("Ownership is required"),
  propertyAge: Yup.number()
    .required("Property age is required")
    .positive("Property age must be positive"),
  propertyApproved: Yup.string().required("Property approved is required"),
  propertyDescription: Yup.string().required(
    "Property description is required"
  ),
  bankLoan: Yup.number()
    .required("Bank loan is required")
    .positive("Bank loan must be positive"),
});

const initialValues = {
  propertyType: "",
  negotiable: "",
  price: "",
  ownership: "",
  propertyAge: "",
  propertyApproved: "",
  propertyDescription: "",
  bankLoan: "",
};

const BasicInfoForm = () => {
  const { nextStep } = useUserData();
  const { formData,setFormData } = UseForm();
  const handleSubmit = (values) => {
    setFormData({ ...formData, ...values });
    console.log(formData);
    nextStep();
  };
  return (
    <div
      style={{
        width: 1201,
        height: 656,
        background: "white",
        boxShadow: "10px 14px 70px rgba(0, 0, 0, 0.03)",
        borderRadius: 20,
        margin: "61px 0 0 40px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="input" id="row1">
              <div id="pro-type">
                <label htmlFor="propertyType">Property Type</label>
                <Field as="select" id="propertyType" name="propertyType">
                  <option value="">Select Property Type</option>
                  <option value="house">House</option>
                  <option value="plot">Plot</option>
                  <option value="flat">Flat</option>
                  <option value="shop">Shop</option>
                </Field>
                <ErrorMessage
                  name="propertyType"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="negotiable">Negotiable</label>
                <Field as="select" id="negotiable" name="negotiable">
                  <option value="">Select Negotiable</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
                <ErrorMessage
                  name="negotiable"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="input">
              <div>
                <label htmlFor="price">Price</label>
                <Field type="number" id="price" name="price" />
                <ErrorMessage name="price" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="ownership">Ownership</label>
                <Field as="select" id="ownership" name="ownership">
                  <option value="">Select Ownership</option>
                  <option value="first owner">First Owner</option>
                  <option value="second owner">Second Owner</option>
                  <option value="third owner">Third Owner</option>
                </Field>
                <ErrorMessage
                  name="ownership"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="input">
              <div>
                <label htmlFor="propertyAge">Property Age</label>
                <Field type="number" id="propertyAge" name="propertyAge" />
                <ErrorMessage
                  name="propertyAge"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="propertyApproved">Property Approved</label>
                <Field
                  as="select"
                  id="propertyApproved"
                  name="propertyApproved"
                >
                  <option value="">Property Approved</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
                <ErrorMessage
                  name="propertyApproved"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="input" id="row4">
              <div>
                <label htmlFor="propertyDescription" id="pro-desc">
                  Property Description
                </label>
                <Field
                  as="textarea"
                  id="propertyDescription"
                  name="propertyDescription"
                />
                <ErrorMessage
                  name="propertyDescription"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="bankLoan">Bank Loan</label>
                <Field type="number" id="bankLoan" name="bankLoan" />
                <ErrorMessage
                  name="bankLoan"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div>
              <Link to="/property-list">
                <button id="btn1" type="button">
                  Cancel
                </button>
              </Link>
              <button id="btn2" type="submit">
                Save & Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicInfoForm;