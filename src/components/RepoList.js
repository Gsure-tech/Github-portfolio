import React, { useEffect, useState } from 'react';
import { fetchRepositories } from '../services/GitHubService';



function RepoList() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await fetchRepositories(page);
      setRepos(data);
    };
    fetchRepos();
  }, [page]);

  return (
    <div>
      {repos.map(repo => (
        <div key={repo.id}>{repo.name}</div>
      ))}
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}

export default RepoList;
