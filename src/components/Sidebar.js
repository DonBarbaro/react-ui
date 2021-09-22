import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 70px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #15cbf9; 
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 20px;
    margin-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/robot_operation',
                  name: 'Robot Operation',
                  css: 'fas fa-tachometer-alt',
                  key: 1
                },
                {
                    path: '/programming', //tu treba upravit cesty 
                    name: 'Programming',
                    css: 'fas fa-code',
                    key: 2 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/monitoring', //tu treba upravit cesty
                  name: 'Monitoring',
                  css: 'fas fa-desktop',
                  key: 3 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                // tu som skončil dokoncit sidebar
                {
                  path: '/report', /* path is used as id to check which NavItem is active basically */
                  name: 'Report',
                  css: 'fas fa-flag',
                  key: 4 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/robot_setting',
                  name: 'Robot Setting',
                  css: 'fas fa-robot',
                  key: 5
                },
                {
                  path: '/safety_setting',
                  name: 'Safety Setting',
                  css: 'fas fa-user-shield',
                  key: 6
                },  
                {
                  path: '/device_setting',
                  name: 'Device Setting',
                  css: 'fas fa-video',
                  key: 7
                },
                {
                  path: '/management',
                  name: 'Management',
                  css: 'fas fa-chart-bar',
                  key: 8
                },
                {
                  path: '/configuration',
                  name: 'SW Configuration',
                  css: 'fas fa-cogs',
                  key: 9
                }, 
                {
                  path: '/support', /* path is used as id to check which NavItem is active basically */
                  name: 'Support',
                  css: 'fas fa-question',
                  key: 10 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                  },
                  
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: -1em;   /* Puts space between NavItems */
    a {
        font-size: 1.8em;
        color: ${(props) => props.active ? "white" : "#414a4e"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
    

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}