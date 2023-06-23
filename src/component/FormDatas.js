import React from "react";
import Card from "./Card";
import TextField from "@mui/material/TextField";
import { Fab } from "@mui/material";

const FormDatas = ({ users, handleDelete, handleEdit, formik, editIndex }) => {
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              type="text"
              id="standard-basic"
              label="Username"
              variant="standard"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div style={{ color: "#ff00009c" }}>{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "#ff00009c" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <TextField
              name="phone"
              type="text"
              id="standard-basic"
              label="Phone"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div style={{ color: "#ff00009c" }}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <Fab
            type="submit"
            style={{ padding: "2rem", fontWeight: "bold", margin: "1rem" }}
          >
            {editIndex !== null ? "Update" : "Submit"}
          </Fab>
        </form>
      </div>
      <Card users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
};

export default FormDatas;
