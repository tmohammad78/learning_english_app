import Card from 'src/components/card';
import { Days } from 'src/utils/days';

export default function DaysPage() {
  return (
    <div>
      Days page
      {Days.map((day, i) => {
        return <Card title={day} key={i} />;
      })}
    </div>
  );
}
