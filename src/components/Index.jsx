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
          <h1 className="title-text">山﨑柚里香</h1>
          <h3 className="title-text">初心者エンジニア</h3>
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

            <div className="work-contents">
              <div className="work-thumb">
                <a href="https://simple-sns-laravel.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={WorkImage2}/>
                </a>
              </div>
              <div className="work-thumb">
                <a href="https://dev.d273brqqzpcvt1.amplifyapp.com" target="_blank" rel="noopener noreferrer">
                  <img src={WorkImage3}/>
                </a>
              </div>
            </div>
    </div>
  </div>



  <div id="contact" className="contact">
    <div className="container">
      <div className="contact-contents">
        <h2>Contact</h2>
        <p className="description">お仕事のご相談・ご依頼など以下よりご連絡ください。</p>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="btn">Contact</a>
      </div>
    </div>
  </div>


  </header>



  );
};
