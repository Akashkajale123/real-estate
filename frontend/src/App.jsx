// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Loyout"; // Import the Layout component
import SignIN from "./components/auth/SignIN";
import SignUp from "./components/auth/SignUp";
import PropertyList from "./Pages/PropertyList";
import MultiStepForm from "./Pages/MultiStepForm";
import { FormProvider } from "./ContextApi/FormContext";

function App() {
  return (
    <Router>
      <Layout>
        <FormProvider>
          <Routes>
            <Route path="/" exact element={<SignIN />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/property-list" element={<PropertyList />} />
            <Route path="/property-form" element={<MultiStepForm />} />
          </Routes>
        </FormProvider>
      </Layout>
    </Router>
  );
}

export default App;
