import { useEffect, useState } from "react";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export function useFetchUser(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch(`${userApiUrl}/${userId}`, {
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setError(undefined);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [userId]);

  return { user: userData, loading, error };
}
