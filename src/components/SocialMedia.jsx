import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkArrowDownFill,
} from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      {/* <a href="https://www.youtube.com/" target="_blank"> */}
      <a href="https://www.linkedin.com/in/stevenquintana/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/SteevenQuintana" target="_blank">
        <BsGithub />
      </a>
      {/* <div>
        <BsFillFileEarmarkArrowDownFill />
      </div> */}
    </div>
  );
}

export default SocialMedia;
