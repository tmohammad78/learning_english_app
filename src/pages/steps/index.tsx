import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'src/components/button';
import GeneralDay from 'src/components/generalDay';
import Modal from 'src/components/modal';
import { addWord } from 'src/redux/words';

interface IStep {
  step: string;
}
const StepsPage = (props: any) => {
  const [show, setShow] = useState<boolean>(false);

  const click = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <GeneralDay step={props.location.pathname.split(/th|\//)[1]} />
      <Button handleClick={click} submitText="Add" />
      {show ? true : false}
      <Modal showModal={show}>
        <div>This is </div>
      </Modal>
    </>
  );
};

export default StepsPage;
