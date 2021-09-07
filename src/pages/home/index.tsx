import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLastSeen } from 'src/redux/config';
import { writeLocalStorage } from 'src/utils/localStorage';
import { Days } from 'src/utils/days';
import Card from 'src/components/pages/home/card';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const newDate = new Date();
    dispatch(setLastSeen(newDate));
    writeLocalStorage<Date>(newDate, 'lastSeen');
  }, []);

  return (
    <div className="daysBox">
      {Object.keys(Days).map((key) => {
        return <Card title={Days[key]} key={key} route={key} />;
      })}
    </div>
  );
};
export default Home;
