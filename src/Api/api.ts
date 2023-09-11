import axios from 'axios';

// Define the base URL of your JSON Server
export const API_BASE_URL = 'http://localhost:5001';

// Define functions to fetch data from JSON Server
export const fetchPosts = async () => {
      try {
            const response = await axios.get(`${API_BASE_URL}/allpapers`);
            return response.data;
      } catch (error) {
            throw error;
      }
};
