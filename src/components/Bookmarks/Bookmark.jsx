import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <>
      <div className="bg-white p-4 rounded mb-4">
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
