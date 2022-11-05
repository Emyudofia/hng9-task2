import profile_img from "../assets/profile_img.svg";
import slack from "../assets/slack.svg";
import share from "../assets/share.svg";
import github from "../assets/github.svg";
import dots from '../assets/dots.svg';
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="img-flex">
          <img className="profile_img" src={profile_img} alt="profile_img" />
          <div className="share-div">
            <img className="share-img" src={share} alt="share-svg" />
            <img className="dots-img" src={dots} alt='dots'/>
          </div>
        </div>
        <div className="name">Emy_udofia</div>
        <div className="links-section">
          <div className="link-background">
            <a
              href="https://twitter.com/Emmyudofia"
              className="links"
              id="twitter"
            >
              Twitter Link
            </a>
          </div>
          <div id="slack">
            Emy_udofia
          </div>
          <button className="link-background">
            <a
              href="https://training.zuri.team/"
              className="links"
              id="btn__zuri"
            >
              Zuri Team
            </a>
          </button>
          <button className="link-background">
            <a href=" http://books.zuri.team" className="links" id="books">
              Zuri Books
            </a>
          </button>
          <button className="link-background">
            <a
              href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
              className="links"
              id="book__python"
            >
              Python Books
            </a>
          </button>
          <button className="link-background">
            <a href="https://background.zuri.team" className="links" id="pitch">
              Background Check for Coders
            </a>
          </button>
          <button className="link-background">
            <a
              href="https://books.zuri.team/design-rules"
              className="links"
              id="book__design"
            >
              Design Books
            </a>
          </button>
          <Link to='/contact' id="contact" >
          <button className="link-background">
            <div className="links" style={{fontWeight: "600"}}>
              Contact Me
            </div>
          </button>
          </Link>
          <div className="logo-div">
            <div className="logo-section">
              <a href="https://app.slack.com/client/T042F7V19Q8/D04919NJGL9/rimeto_profile/U048845K3PZ">
                <img src={slack} alt="slack_img" className="slack" />
              </a>
              <a href="https://github.com/Emyudofia/hng9-task2.git">
              <img src={github} alt="github_img" className="github" />
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;