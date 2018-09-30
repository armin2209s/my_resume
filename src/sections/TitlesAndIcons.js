import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll"
import SnowStorm from 'react-snowstorm'


class TitlesAndIcons extends Component {
  state={
    color:'white'
  }
  changeColor= () =>{
    this.setState({
      color:'yellow'
    })
  }
  render() {
    return (
      <div>
      <Fullpage className="first">
			<div>
				<SnowStorm />
			</div>

        <div className="navbar">
        <ul><a href="#about">About</a></ul>
        <ul><a href="#skills">Skills</a></ul>
        <ul><img src="images/magic.png" id="magic" alt="magic"
        style={{
          color:this.state.color
        }}
        onClick={()=>{
          this.changeColor()
        }}
        ></img></ul>
      </div>
        <h1 className="title">{data.title}</h1>
        <div>
          <h2>{data.subtitle}</h2>
        </div>

        <div className="icons-wrapper">
          {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
                <SocialIcon url={data.links[key]} />
              </div>
            );
          })}
        </div>
      </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <DownIcon icon={data.icons.down}/>
          </Link>
          <Element name="about" className="element">
          </Element>
      </div>
    );
  }
}

export default TitlesAndIcons;
