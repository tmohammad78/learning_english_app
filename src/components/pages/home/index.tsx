import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLastSeen } from 'src/redux/config';
import { writeLocalStorage } from 'src/utils/localStorage';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const newDate = new Date();
    dispatch(setLastSeen(newDate));
    writeLocalStorage<Date>(newDate, 'lastSeen');
  }, []);
  return <div>Home</div>;
};
export default Home;
