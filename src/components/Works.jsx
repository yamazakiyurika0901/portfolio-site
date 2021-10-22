import WorkImage1 from '../images/works/work1.png';

export const Works = () => {
  return (
    <header className="main-cover">
      <div id="works">
        <div className="container">

          <div className="heading">
          <h2>Works</h2>
          </div>

            <div className="display-table">
              <div className="display-table-contents">
                <div className="work-thumb">
                  <a href="https">
                    <img src={WorkImage1}/>
                  </a>
                </div>
                <h3 className="title-text">エンジニア</h3>
              </div>
            </div>

      </div>
    </div>
  </header>
  );
};
