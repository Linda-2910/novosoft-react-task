import React from "react";
import Logo from "../../assets/logo.svg";
import ProfilePic from "../../assets/profile-pic.png";
import { NavbarContainer, LogoWrapper, UserSection, Avatar, UserText, Greeting, UserName, DropdownIcon } from "./navbar.styled";

const Navbar: React.FC = () => {
    const userName = "Thomas Shelby";
    const userImage = ProfilePic;

    return (
        <NavbarContainer>
            {/* Left logo */}
            <LogoWrapper>
                <img src={Logo} alt="App Logo" />
            </LogoWrapper>

            {/* Right user section */}
            <UserSection>
                <Avatar src={userImage} alt={userName} />
                <UserText>
                    <Greeting>Hello</Greeting>
                    <UserName>{userName}</UserName>
                </UserText>
                <DropdownIcon />
            </UserSection>
        </NavbarContainer>
    );
};

export default Navbar;
