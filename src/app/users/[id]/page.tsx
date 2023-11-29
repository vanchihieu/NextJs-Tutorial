import React from "react";

const DetailUserPage = (props: any) => {
  const { params } = props;
  return <div>DetailUserPage id = {params?.id}</div>;
};

export default DetailUserPage;
