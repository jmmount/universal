import { useEffect, useState } from "react";

function PracticeAPI() {
  const [image, setImage] = useState("");

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
    <div className='text-center'>
        <h1 className="display-1">
          Universal English 
        </h1>
      {console.log("Image content:", image)}
      <div dangerouslySetInnerHTML={{ __html: image }} />
    </div>
  );
  
}

export default PracticeAPI;
