import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Card from 'src/components/card';
import { addWord } from 'src/redux/words';

interface IGeneralDay {
  step: string;
}

const GeneralDay = ({ step }: IGeneralDay) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      id: 12,
      name: 'good',
      type: ['adj'],
      meaning: ['خوب'],
      example: ['This book is good'],
      synonym: ['nice'],
    };

    dispatch(addWord({ step: 7, newWord: obj }));
  });
  return (
    <div>
      This is step {step}
      <Card title={`Word ${step}`} />
    </div>
  );
};
export default GeneralDay;
