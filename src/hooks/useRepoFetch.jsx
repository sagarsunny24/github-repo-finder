import { useState, useEffect } from "react";

export default function useRepoFetch({ username, showRepo }) {
  const [repoData, setRepoData] = useState(null);
  const [repoError, setRepoError] = useState(null);
  useEffect(() => {
    if (!showRepo) return;
    const id = setTimeout(() => {
      setRepoData(null);
      setRepoError(null);
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Couldnt Fetch ${username}'s Repositories`);
          } else {
            return res.json();
          }
        })
        .then((repoData) => setRepoData(repoData))
        .catch((error) => setRepoError(error));
    }, 500);
    return () => clearTimeout(id);
  }, [username, showRepo]);

  return { repoData, repoError };
}
