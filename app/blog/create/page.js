"use client";

import { Field } from "@chakra-ui/react";
import { Formik } from "formik";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

const CreateBlogPage = () => {
  return (
    <div>
      <h1>Create Blog Page</h1>
      <Formik
        initialValues={{ title: "", content: "" }}
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
            fetch("/api/posts/create", {
              method: "POST",
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
              Create
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default CreateBlogPage;
