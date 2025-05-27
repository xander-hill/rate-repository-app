import { useState, useEffect } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
    const response = await fetch('http://192.168.86.21:5000/api/repositories');
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;