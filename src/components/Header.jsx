import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter,FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="display-table">
        <div className="display-table-contents">
          <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
          <h1 className="title-text">山﨑柚里香</h1>
          <h3 className="title-text">エンジニア</h3>
          <ul className="social-icons">
            <li className="icon-link">
              <a href="https://github.com/yamazakiyurika0901">
                <FaGithub color="white"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
};
