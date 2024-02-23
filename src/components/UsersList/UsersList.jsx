import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, selectPage } from '../../redux/slice';
import { useEffect } from 'react';
import { getUsers } from '../../redux/operations';

export const UsersList = ({ users } = []) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
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
