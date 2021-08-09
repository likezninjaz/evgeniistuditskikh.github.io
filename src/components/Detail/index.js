import webBrowserSVG from '../../assets/web-browser.svg';
import databaseSVG from '../../assets/database.svg';
import mobilePhoneSVG from '../../assets/mobile-phone.svg';
import './style.scss';

export const Detail = () => {
  return (
    <div className="detail">
      <div className="wrapper">
        <h2>About me</h2>
        <p>
          I'm Full Stack Developer based in Phuket, Thailand, working in web development. I like to solve complex business problems by designing and implementing high-quality information systems.
        </p>
        <p>
          Strong understanding of trends and 5+ years of experience developing sites, mobile, and web applications. Proficient in modern JavaScript (ES6+), React.js + Redux, Angular 5+, and related technologies such as server-side rendering using Next.js and cross-platform mobile app development using React Native. I have rich experience with server-side web technologies and object-oriented concepts. Excellent communication and interpersonal skills. Feel free to contact me. Really welcome to any offer.
        </p>
        <h3>What I'm Doing</h3>
        <div className="row">
          <div className="block">
            <img src={webBrowserSVG} alt="" />
            <div>
              <h4>Front End Development</h4>
              <p>
                I provide a full cycle of front-end development from markup to architecture and interface programming using <b>React</b> and <b>Angular</b> frameworks.
              </p>
            </div>
          </div>
          <div className="block">
            <img src={databaseSVG} alt="" />
            <div>
              <h4>Back End Development</h4>
              <p>
                I provide a full cycle of front-end development from markup to architecture and interface programming using <b>React</b> and <b>Angular</b> frameworks.
              </p>
            </div>
          </div>
          <div className="block">
            <img src={mobilePhoneSVG} alt="" />
            <div>
              <h4>Mobile Development</h4>
              <p>
                I provide a full cycle of front-end development from markup to architecture and interface programming using <b>React</b> and <b>Angular</b> frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
