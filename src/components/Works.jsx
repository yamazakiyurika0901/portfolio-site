import WorkImage1 from '../images/works/work1.png';
import WorkImage2 from '../images/works/work2.png';
import WorkImage3 from '../images/works/work3.png';
import { FaTwitter,FaGithub } from 'react-icons/fa';

export const Works = () => {
  return (
    <header className="main-cover">
      <div id="works">
        <div className="container">

          <div className="heading">
          <h2>Works</h2>
          </div>
              <div className="works-container">

                <div className="work-contents">
                <h3><i class="fas fa-folder"></i>SNS風Webアプリ</h3>

                  <a href="https://simple-sns-laravel.herokuapp.com/" className="work-thumb" target="_blank" rel="noopener noreferrer">
                    <img src={WorkImage2}/>
                  </a>
                  <div class="work-description">言語：PHP(Laravel)、JavaScript(React,Vue.js)</div>
                  <div class="work-description">DB：PostgreSQL</div>
                </div>


                <div className="work-contents">
                <h3><i class="fas fa-folder"></i>ECサイト</h3>
                  <a href="https://dev.d273brqqzpcvt1.amplifyapp.com" className="work-thumb" target="_blank" rel="noopener noreferrer">
                    <img src={WorkImage3}/>
                  </a>
                  <div class="work-description">言語：JavaScript(React)</div>
                </div>
              </div>
      </div>
    </div>
  </header>
  );
};
