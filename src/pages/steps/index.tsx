import { useDispatch } from 'react-redux';
import Button from 'src/components/button';
import GeneralDay from 'src/components/generalDay';
import { addWord } from 'src/redux/words';

interface IStep {
  step: string;
}
const StepsPage = (props: any) => {
  console.log(props);

  const click = () => {};
  return (
    <>
      <GeneralDay step={props.location.pathname.split(/th|\//)[1]} />
      <Button handleClick={click} submitText="Add" />
    </>
  );
};

export default StepsPage;
