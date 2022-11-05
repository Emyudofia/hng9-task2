import '../App.css';
import zuri from "../assets/zuri.svg";
import I4G from "../assets/I4G.svg";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-div">
              <div className="footer-items">
                <img src={zuri} alt="zuri" className="zuri-svg" />
                <div className="hng-text">
                  <div>HNG Internship 9 Frontend Task</div>
                </div>
                <img src={I4G} alt="i4g" className="i4g"/>
              </div>
            </div>
          </div>
        </>
    )
}

export default Footer