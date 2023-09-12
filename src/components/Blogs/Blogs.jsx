import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleMarkRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleMarkRead={handleMarkRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleMarkRead: PropTypes.func,
};
