import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog, typeof blog);
  return (
    <div>
      <p>Blog</p>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
