import React, { useEffect, useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';
import './Category.scss'; // Import the SCSS file
import { API_BASE_URL } from '../../Api/api';

interface CategoryData {
  id: number;
  name: string;
}

const Category = () => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const DB_URL = `${API_BASE_URL}/subjects`; // Use template literals to construct the URL

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      try {
        const response = await fetch(DB_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataWithDelay();
  }, [DB_URL]);

  const generateLinks = (mediumPrefix: string) => {
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a className="btn" href={`/downloads/${mediumPrefix}/${item.subject}`}><span>{item.subject}</span></a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="categories">
      <div className="wrapper">
        <Tabs>
          <Tab label="Sinhala medium">
            <h2>Sinhala medium past papers</h2>
            {loading ? <p>Loading...</p> : generateLinks('si')}
          </Tab>
          <Tab label="English medium">
            <h2>English medium past papers</h2>
            {loading ? <p>Loading...</p> : generateLinks('en')}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
