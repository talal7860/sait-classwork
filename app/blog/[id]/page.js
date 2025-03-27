import FormPage from "./form";

const PostPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8080/api/posts/${id}`);
  const post = await res.json();
  return <div>{post && <FormPage id={id} post={post} />}</div>;
};

export default PostPage;
