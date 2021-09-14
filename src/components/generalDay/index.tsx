import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'src/components/card';
import { RootState } from 'src/redux/store';
import { addWord } from 'src/redux/words';
import { WordState } from 'src/types/store';

interface IGeneralDay {
  step: number;
}
interface IState {
  [key: number]: WordState[];
}

const GeneralDay = ({ step }: IGeneralDay) => {
  const vocabulary = useSelector<RootState, IState>(
    (state) => state.words.vocabulary,
  );

  console.log(step);

  return (
    <div>
      This is step {step}
      {vocabulary[step]?.map((word) => {
        return <Card word={word} key={word.id} />;
      })}
    </div>
  );
};
export default GeneralDay;
