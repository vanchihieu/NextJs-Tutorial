"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Manage Users",
    key: "users",
    icon: <MailOutlined />,
  },
  {
    label: "Manage Blogs",
    key: "blogs",
    icon: <AppstoreOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("users");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
