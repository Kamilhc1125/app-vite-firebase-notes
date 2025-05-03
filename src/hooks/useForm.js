import { useState } from 'react';

const useForm = (initialValues = {}) => {

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = (newValues = initialValues) => setForm(newValues);

  return { form, handleChange, resetForm };
};

export default useForm;