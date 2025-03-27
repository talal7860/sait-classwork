export const auth = () => {
  console.log(
    "access-secret.js: auth() called",
    process.env.NEXT_JS_MY_APP_SECRET,
  );
  return process.env.NEXT_JS_MY_APP_SECRET;
};
