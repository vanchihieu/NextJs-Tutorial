"use client";
import { IUser } from "@/types/backend";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

interface IProps {
  users: IUser[] | [];
}

const UsersTable = (props: IProps) => {
  const { users } = props;

  const columns: ColumnsType<IUser> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  return (
    <div>
      <Table bordered dataSource={users} columns={columns} />;
    </div>
  );
};

export default UsersTable;
