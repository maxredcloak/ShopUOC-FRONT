const UserInfo = ({ user }) => {
  return (
    <>
      <div>name: {user.name}</div>
      <div>surname: {user.surname}</div>
      <div>address: {user.address}</div>
    </>
  );
};
export default UserInfo;
