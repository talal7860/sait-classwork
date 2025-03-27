"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import Label from "@/components/Label";

import { Formik } from "formik";

const FormPage = ({ post, id }) => {
  return (
    <Formik
      initialValues={post}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        }
        if (!values.content) {
          errors.content = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fetch(`/api/posts/update/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <Label htmlFor="content">Content</Label>
          <Textarea
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          {errors.content && touched.content && errors.content}
          <Button type="submit" disabled={isSubmitting}>
            Update
          </Button>
        </form>
      )}
    </Formik>
  );
};
export default FormPage;
