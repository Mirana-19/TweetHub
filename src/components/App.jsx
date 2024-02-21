import { useDispatch } from 'react-redux';
import { followUser, getUsers } from '../redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ page: 2 }));
  }, [dispatch]);

  // dispatch(
  //   followUser({
  //     user: 'Nora Moen',
  //     tweets: 95868,
  //     followers: 5372,
  //     avatar:
  //       'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg',
  //     id: '1',
  //   })
  // );

  return <p>Hi</p>;
};
