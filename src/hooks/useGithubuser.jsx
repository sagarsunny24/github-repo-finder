import { useState, useEffect } from "react";

export default function useGithubuser(username, setLoading) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username.trim()) {
      setLoading(false);
      return;
    }
    const id = setTimeout(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("User not found");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [username, setLoading]);

  return { data, error };
}
