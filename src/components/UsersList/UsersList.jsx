import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch } from 'react-redux';
import { incrementPage } from '../../redux/slice';

export const UsersList = ({ users } = []) => {
  const dispatch = useDispatch();

  const onLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      <ul className="grid grid-cols-3 gap-y-4 ">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>
      <button
        onClick={onLoadMore}
        type="button"
        className="btn btn-outline btn-primary mx-auto block mt-8"
      >
        Load more
      </button>
    </>
  );
};
