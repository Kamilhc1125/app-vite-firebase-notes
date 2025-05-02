import { useState } from 'react';

const useForm = (initialValues = {}) => {

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(initialValues);

  return { form, handleChange, resetForm };
};

export default useForm;

// import { useState } from "react";

// const useForm = (initialState) => {
//   const [form, setForm] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const resetForm = (newState = initialState) => {
//     setForm(newState);
//   };

//   return { form, handleChange, resetForm };
// };

// export default useForm;
