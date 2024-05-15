import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RepoDetails() {
  const { repoId } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
      setRepo(response.data);
    };
    fetchRepo();
  }, [repoId]);

  if (!repo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
    </div>
  );
}

export default RepoDetails;
