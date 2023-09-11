import React, { useEffect, useState } from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { SlCalender } from 'react-icons/sl';
import { BsArrowRightCircle } from 'react-icons/bs';
import './RandomPapers.scss';
import { fetchPosts } from '../../Api/api';

const RandomPapers = () => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Fetch random data using the fetchPosts function from api.ts
      fetchPosts()
        .then(data => {
          // Shuffle the data (if needed)
          const shuffledData = data.sort(() => Math.random() - 0.5);
          // Get the first 6 items from the shuffled array
          const selectedData = shuffledData.slice(0, 6);
          setRandomData(selectedData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, 600); // Add a 0.6-second delay
  }, []);

  return (
    <section className="randomPosts">
      <h1>
        <span className="qttn"> </span>Explore Our Diverse Collection of Random Past Papers{' '}
        <span className="qttn"></span>
      </h1>

      <div className="wrapper">
        {randomData.map(paper => (
          <div className="post" key={paper.id}>
            <div className="pHeader">
              <span>Academic Archive lk</span>
              <a href={`/Downloads/${paper.subject}/${paper.year}.pdf`}>
                <BsArrowRightCircle />
              </a>
            </div>

            <div className="pBody">
              <h3>
                {paper.title} {paper.medium} medium
              </h3>
              <p>{paper.desc}</p>
            </div>

            <div className="pFooter">
              <span>
                <SlCalender />
                {paper.date}
              </span>
              <a
                download={`${paper.subject}_${paper.year}.pdf`}
                href={`/Downloads/${paper.subject}/${paper.year}.pdf`}
                className="btn"
              >
                <FiDownloadCloud /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RandomPapers;
