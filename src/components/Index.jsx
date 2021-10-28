import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter,FaGithub } from 'react-icons/fa';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import Circle from 'react-circle';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';
import WorkImage1 from '../images/works/work1.png';
import WorkImage2 from '../images/works/work2.png';
import WorkImage3 from '../images/works/work3.png';

export const Index = () => {
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="display-table">
        <div className="display-table-contents">
          <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
          <h1 className="title-text">Y.Yamazaki</h1>
          <h3 className="title-text">駆け出しエンジニア</h3>
          <ul className="social-icons">
            <li className="icon-link">
              <a href="https://github.com/yamazakiyurika0901" target="_blank" rel="noopener noreferrer">
                <FaGithub color="white"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
          <p>GitHub内の全リポジトリからデータを取得し、どんなプログラミング言語のコードをどのくらいの割合で書いているかを円グラフで表示しています。</p>
        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="skill-iten" key={index}>
                  <p className="description"><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className="description">エラーが発生しました。</p>
            )
          }
        </div>
      </div>
    </div>



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



  <div id="contact" className="contact">
    <div className="container">
      <div className="contact-contents">
        <h2>Contact</h2>
        <p className="description">何かございましたら以下よりご連絡ください。</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdHCC21rjFg7ExS_d1cwvjAS8bWmABAqZ3nwvuWlnQtbp0Kgw/viewform?embedded=true" width="640" height="645" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </div>


  </header>



  );
};
