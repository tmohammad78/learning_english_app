import GeneralDay from 'src/components/generalDay';

interface IStep {
  step: string;
}
const Steps = ({ step }: IStep) => {
  console.log(step);

  return <GeneralDay step={step} />;
};

export default Steps;
