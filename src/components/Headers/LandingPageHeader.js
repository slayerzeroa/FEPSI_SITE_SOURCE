import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { Dimensions } from 'react-native';
import { colors, font_width, font_height } from 'assets/config/globalStyles';

// core components
import Tunnel from "assets/videos/Tunnel.mp4";



function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small content-center" style={{objectFit: "cover"}}>
        <video src={Tunnel} autoPlay playsInline loop muted width={"100%"} alignself='center'/>
        {/* <div
          className="page-header-video"
          

          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
          ref={pageHeader}
        ></div> */}
        <div className="content-center">
            <h1 className="title" style={{fontSize: 15}}>
             <br></br><br></br><br></br>
              We find α Opportunities,<br></br>
              We're pricing Everything<br></br><br></br>
              Everything is Information,<br></br>
              Information makes Worth
            </h1>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
