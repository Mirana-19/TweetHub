import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch } from 'react-redux';
import { incrementPage } from '../../redux/slice';

export const UsersList = ({ users } = []) => {
  const dispatch = useDispatch();

  const onLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <main className="mx-auto flex xl:block flex-col justify-center items-center min-w-80 md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-10">
      <ul className="grid xl:grid-cols-3 gap-y-4 py-5 ">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>
      <button
        onClick={onLoadMore}
        type="button"
        className="btn mx-auto btn-outline btn-primary block mt-8 max-w-48"
      >
        Load more
      </button>
    </main>
  );
};
