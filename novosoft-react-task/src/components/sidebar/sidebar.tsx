import React, { useState } from "react";
import BottomLogo from "../../assets/bottom-logo.svg";
import HistoryIcon from "../../assets/history.svg";
import HomeIcon from "../../assets/home.svg";
import ProfileIcon from "../../assets/profile.svg";
import QRIcon from "../../assets/qr.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowIcon,
  BottomLogoContainer,
  BottomLogoImg,
  Menu,
  MenuItem,
  SidebarContainer,
  SubMenuWrapper,
  SubMenuItem,
  MenuItemContent,
  GroupedMenuSection,
} from "./sidebar.styled";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const menuConfig = [
  { path: "/home", label: "Home", icon: HomeIcon },
  { path: "/qr", label: "QR", icon: QRIcon },
  {
    label: "History",
    path: "/history/transactions",
    icon: HistoryIcon,
    children: [
      {
        path: "/history/transactions",
        label: "Transaction History",
        icon: HistoryIcon,
      },
      {
        path: "/history/settlements",
        label: "Settlement History",
        icon: HistoryIcon,
      },
    ],
  },
  { path: "/profile", label: "Profile", icon: ProfileIcon },
];

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <SidebarContainer>
      <Menu>
        {menuConfig.map((item) => {
          const isActive = currentPath === item.path;
          const isOpen = openMenus[item.label] || false;

          if (item.children) {
            return (
              <GroupedMenuSection key={item.label} $active={isActive}>
                {" "}
                <MenuItem
                  $active={isActive}
                  onClick={() => {
                    toggleMenu(item.label);
                    navigate(item.path!);
                  }}
                  style={{ justifyContent: "space-between" }}
                >
                  <MenuItemContent>
                    <img src={item.icon} alt={item.label} />
                    {item.label}
                  </MenuItemContent>
                  <ArrowIcon $rotated={isOpen} className="arrow">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </ArrowIcon>
                </MenuItem>
                <SubMenuWrapper open={isOpen}>
                  {item.children.map((child) => (
                    <SubMenuItem key={child.path} $active={false}>
                      <MenuItemContent>
                        <img src={child.icon} alt={child.label} />
                        {child.label}
                      </MenuItemContent>
                    </SubMenuItem>
                  ))}
                </SubMenuWrapper>
              </GroupedMenuSection>
            );
          }

          return (
            <MenuItem
              key={item.path}
              $active={isActive}
              onClick={() => navigate(item.path!)}
            >
              <MenuItemContent>
                <img src={item.icon} alt={item.label} />
                {item.label}
              </MenuItemContent>
            </MenuItem>
          );
        })}
      </Menu>

      <BottomLogoContainer>
        <BottomLogoImg src={BottomLogo} alt="Bharat Connect" />
      </BottomLogoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
