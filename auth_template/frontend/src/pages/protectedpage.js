import React, { useEffect, useState } from 'react';
import { getProtected } from "../services/requests";

const ProtectedPage = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(getProtected());
  });

  return (
    <div>{content}</div>
  );
}

export default ProtectedPage;