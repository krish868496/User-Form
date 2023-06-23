import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./App.css";
import FormDatas from "./component/FormDatas";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const App = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
    },
    validationSchema,
    // submit function
    onSubmit: (values, { resetForm }) => {
      if (editIndex !== null) {
        setUsers((prevUsers) => {
          const updatedUsers = [...prevUsers];
          updatedUsers[editIndex] = values;
          return updatedUsers;
        });
        setEditIndex(null);
      } else {
        setUsers((prevUsers) => [...prevUsers, values]);
      }
      resetForm();
    },
  });
  // delete function
  const handleDelete = (index) => {
    let data = users.filter((item, id) => {
      return index !== id;
    });
    setUsers(data);
  };
  // edit function
  const handleEdit = (index) => {
    const user = users[index];
    formik.setValues(user);
    setEditIndex(index);
  };

  return (
    <>
      <FormDatas
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        formik={formik}
        editIndex={editIndex}
        users={users}
      />
    </>
  );
};

export default App;
