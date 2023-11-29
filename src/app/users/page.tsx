import UsersTable from "@/components/users/users.table";

const UserPage = async () => {
  const res = await fetch("http://localhost:8000/users", {
    method: "GET",
  });
  const data = await res.json();

  return (
    <div>
      <UsersTable users={data ? data : []} />
    </div>
  );
};

export default UserPage;
