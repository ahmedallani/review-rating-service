import { useState, useEffect } from "react";
//import axios from "axios";
//import "./index.css";

const Review = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (<div>{count}</div>);
};

export default Review;
