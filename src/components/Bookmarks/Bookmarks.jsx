import PropTypes, { number } from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-100 ml-5 p-4 rounded mb-5 border-2 border-purple-600">
        <p className="text-2xl font-bold text-purple-600">
          Spent time on read: {readTime}{" "}
        </p>
      </div>
      <div className="ml-5 bg-slate-200 p-6 rounded">
        <h2 className="text-2xl font-bold mb-5">
          Bookmarked Blogs : {bookmarks.length}{" "}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: number,
};
