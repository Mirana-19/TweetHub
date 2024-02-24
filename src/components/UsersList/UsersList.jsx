import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, selectIsLoading, selectPage } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';

export const UsersList = ({ users } = []) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resultsPerPage = 3;
  const currentPage = useSelector(selectPage);
  const hasMore = users.length === currentPage * resultsPerPage;
  const isLoading = useSelector(selectIsLoading);

  const onLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      <button
        onClick={() => navigate('/')}
        type="button"
        className="btn btn-outline btn-primary block  max-w-48"
      >
        Back to home
      </button>

      <ul className="grid xl:grid-cols-3 gap-y-4 py-5 ">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>

      {!isLoading && hasMore && (
        <button
          onClick={onLoadMore}
          type="button"
          className="btn mx-auto btn-outline btn-primary block mt-10 max-w-48"
        >
          Load more
        </button>
      )}

      {!isLoading && !hasMore && (
        <p className="mt-10 text-center text-whiteText">
          You have reached the end of results
        </p>
      )}
    </>
  );
};
