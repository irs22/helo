import { BsDownload } from "react-icons/bs";
import { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import '../subjects.scss'
import ShareButtons from "../../../components/share/ShareButtons";
import { API_BASE_URL } from '../../../Api/api';


const Commerce = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const DB_URL = `${API_BASE_URL}/Commerce`;

    fetch(DB_URL)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <Header />


      <div className="wrapper">

        <h2>Download G.C.E O/L Commerce Past Papers in Sinhala Medium </h2>

        <div className="desc">
          Download O/L Commerce Past Papers and Answers published in the previous ten years. All O/L Commerce papers are available in the Sinhala medium. We have included marking schemes for Commerce past papers as they are important for students to guide preparing for the O/L exam.You can download past papers using the links given below. It’s free to download.
        </div>


           <ul className="papers">{data.map((paper) => (
          <li key={paper.id}>G.C.E O/L {paper.title}  <div className="btns"><a download={`${paper.subject}/${paper.year}.pdf`} href={`/Downloads/${paper.subject}/${paper.year}.pdf`}><BsDownload className="icon" />Download</a><a download={`${paper.subject}/${paper.year}-marking.pdf`} href={`/Downloads/${paper.subject}/${paper.year}-marking.pdf`}>Marking scheme</a></div></li>
        ))}
        </ul>
       
      </div>


      <Footer />
    </div>
  )
}

export default Commerce;
