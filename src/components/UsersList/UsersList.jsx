import { UserCard } from 'components/UserCard/UserCard';

export const UsersList = ({ users } = []) => {
  return (
    <ul className="grid grid-cols-3">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </ul>
  );
};
