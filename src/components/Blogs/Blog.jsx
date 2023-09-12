import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkRead }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="shadow-lg pb-8 mb-10">
      <img className="w-full" src={cover} alt={`Image of : ${title}`} />
      <div className="flex justify-between items-center py-10">
        <div className="flex">
          <img className="w-20" src={author_img} alt={`Image of: ${author}`} />
          <div className="ml-6">
            <p className="text-2xl font-semibold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span> {reading_time} min read</span>
          <button onClick={() => handleBookmark(blog)} className="pl-2">
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-4xl mb-5"> {title} </h1>
      <div>
        {" "}
        {hashtags.map((hastag, idx) => (
          <span key={idx}>
            <a href="#!"> #{hastag} &nbsp; </a>
          </span>
        ))}{" "}
      </div>
      <button
        onClick={() => handleMarkRead(reading_time, id)}
        className="text-purple-600 font-bold underline mt-5"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleMarkRead: PropTypes.func,
};
