import { useDispatch } from 'react-redux';
import Button from 'src/components/button';
import GeneralDay from 'src/components/generalDay';
import { addWord } from 'src/redux/words';

interface IStep {
  step: string;
}
const Steps = ({ step }: IStep) => {
  const dispatch = useDispatch();

  const click = () => {
    const obj = {
      id: 13,
      name: 'sad',
      type: ['adj'],
      meaning: ['ناراحت'],
      example: ['he seems upset'],
      synonym: ['upset'],
    };

    dispatch(addWord({ step: 7, newWord: obj }));
  };
  return (
    <>
      <GeneralDay step={step} />
      <Button handleClick={click} submitText="Add" />
    </>
  );
};

export default Steps;
