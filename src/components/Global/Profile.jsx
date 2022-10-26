import React from "react";
import {
  DarkMode,
  Menu,
  MenuButton,
  Avatar,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlinePhone,
  AiOutlineUnorderedList,
  AiOutlineInfo,
} from "react-icons/ai";

const Profile = () => {
  return (
    <DarkMode>
      <Menu>
        <MenuButton>
          <Avatar name="Jashan Mago" />
        </MenuButton>
        <MenuList opacity="1" zIndex="modal">
          <MenuGroup title="Profile">
            <MenuItem
              icon={<AiOutlineUser style={{ height: "20px", width: "20px" }} />}
            >
              My Account
            </MenuItem>
            <MenuItem
              icon={
                <AiOutlineUnorderedList
                  style={{ height: "20px", width: "20px" }}
                />
              }
            >
              My Lists
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Others">
            <MenuItem
              icon={
                <AiOutlineSetting style={{ height: "20px", width: "20px" }} />
              }
            >
              Settings
            </MenuItem>
            <MenuItem
              icon={
                <AiOutlinePhone style={{ height: "20px", width: "20px" }} />
              }
            >
              Contact
            </MenuItem>
            <MenuItem
              icon={<AiOutlineInfo style={{ height: "20px", width: "20px" }} />}
            >
              About
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </DarkMode>
  );
};

export default Profile;
