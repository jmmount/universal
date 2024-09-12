import { useEffect, useState } from "react";

function PracticeAPI() {
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    console.log("Attempting to fetch image...");
    fetch("/api/")
      .then((response) => {
        console.log("Fetch response received:", response);
        return response.text();
      })
      .then((data) => {
        console.log("Data received:", data);
        setImage(data);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <div className="text-center">
      <h1 className="display-1">Universal English</h1>
      {console.log("Image content:", image)}
      <div dangerouslySetInnerHTML={{ __html: image }} />
      <div>
        <h2>User List</h2>
        <ul>
          {Array.isArray(data) && data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PracticeAPI;
