import { useEffect, useState } from "react";

function auth() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/data")
          .then((response) => response.json())
          .then((data) => setData(data.users))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    
}

export default auth;