"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { dbTypeAtom } from "../atoms";
import { useAtom } from "jotai";
import Switch from '@mui/material/Switch';
import { MenuItem, Select } from "@mui/material";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [dbType, setDbType] = useAtom(dbTypeAtom);
  useEffect(() => {
    fetch("/api/posts", {
      headers: {
        "Content-Type": "application/json",
        "X-DB-Type": dbType,
      }
    })
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [dbType]);
  const handleDelete = (id) => {
    fetch(`/api/posts/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <Select
    value={dbType}
    label="Db Type"
    onChange={(e) => {
      setDbType(e.target.value);
    }}
  >
    <MenuItem value={'firebase'}>Firebase</MenuItem>
    <MenuItem value={'neon'}>Neon</MenuItem>
  </Select>
      <Link href="/blog/create">Create Post</Link>
      <p>This is a blog page.</p>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.content}
          </p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(post.id);
            }}
          >
            Delete
          </Button>
        </Link>
      ))}
    </div>
  );
};
export default BlogPage;
