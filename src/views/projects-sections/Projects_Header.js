/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function FE_Header() {
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
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/projects_background.png") + ")", width:"100%", alignself:'center'}}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h3>Projects make Growth<br></br>No individual is bigger than the team</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{" YDM"}
            . Coded by{" YDM"}
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default FE_Header;
