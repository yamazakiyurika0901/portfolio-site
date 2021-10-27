import WorkImage1 from '../images/works/work1.png';
import WorkImage2 from '../images/works/work2.png';
import WorkImage3 from '../images/works/work3.png';

export const Works = () => {
  return (
    <header className="main-cover">
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
  </header>
  );
};
