import React, { useState } from 'react';
import './ShareButtons.scss';
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai'; 

const ShareButtons: React.FC = () => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyToClipboard = () => {
    const input = document.querySelector('#share-link') as HTMLInputElement;
    input.select();

    if (document.execCommand('copy')) {
      setIsLinkCopied(true);
      setTimeout(() => {
        setIsLinkCopied(false);
      }, 3000);
    }
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent('Check out this awesome web page: ') + window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const shareOnTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this awesome web page:');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    // Create a URL to share the current page
    const urlToShare = encodeURIComponent(window.location.href);

    // Construct the Facebook share URL with the encoded URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;

    // Open the Facebook share dialog in a new window or tab
    window.open(facebookShareUrl, '_blank');
  };

  return (
    <div className="share">
      <div className="content">
        <h2 className='title'>Share this Website page</h2>
        <ul className="icons">
          <a href="#" onClick={shareOnTelegram} className="tg">
            <FaTelegramPlane />
          </a>
          <a href="#" onClick={shareOnWhatsApp} className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="#" onClick={shareOnFacebook} className="fb">
            <FaFacebookF />
          </a>
        </ul>
        <div className="field">
          <AiOutlineLink />
          <input
            type="text"
            id="share-link"
            readOnly
            value={window.location.href} // Set the input value to the current URL
          />
          <button onClick={copyToClipboard}>
            {isLinkCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
