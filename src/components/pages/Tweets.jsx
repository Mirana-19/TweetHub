import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/operations';
import { clearUsers, selectPage, selectTweets } from '../../redux/slice';
import { UsersList } from 'components/UsersList/UsersList';

const Tweets = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const tweets = useSelector(selectTweets);

  useEffect(() => {
    return () => {
      dispatch(clearUsers());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers({ page }));
  }, [dispatch, page]);

  return <UsersList users={tweets} />;
};

export default Tweets;
