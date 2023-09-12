import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmark = (blog) => {
    setBookmark([...bookmarks, blog]);
  };
  const [readTime, setReadTime] = useState(0);
  const handleMarkRead = (time, id) => {
    setReadTime(readTime + time);
    const remaingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmark(remaingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkRead={handleMarkRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
