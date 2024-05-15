import axios from 'axios';

const API_URL = 'https://api.github.com/users/Gsure-tech/repos';

export const fetchRepositories = async (page = 1) => {
  const response = await axios.get(`${API_URL}?page=${page}&per_page=20`);
  return response.data;
};
