import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'src/components/card';
import { RootState } from 'src/redux/store';
import { addWord } from 'src/redux/words';
import { WordState } from 'src/types/store';

interface IGeneralDay {
  step: string;
}

const GeneralDay = ({ step }: IGeneralDay) => {
  const dispatch = useDispatch();
  const vocabulary = useSelector<
    RootState,
    {
      [key: number]: WordState[];
    }
  >((state) => state.words.vocabulary);

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
  }, []);
  return (
    <div>
      This is step {step}
      {vocabulary[7]?.map((word) => {
        return <Card word={word} key={word.id} />;
      })}
    </div>
  );
};
export default GeneralDay;
