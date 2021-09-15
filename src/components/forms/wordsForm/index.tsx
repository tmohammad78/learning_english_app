import { Controller, useForm } from 'react-hook-form';
import Input from 'src/components/input';
import useInput from 'src/hooks/input/use-input';
import { WordState } from 'src/types/store';
const typeOfwords = ['Noun', 'Verb', 'Adjective'];
// interface FormData: WordState{
//   word: string;
//   type: string;
//   description: [];
// };
const WordsForm = () => {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input type="string" onChange={onChange} label="Name" value={value} />
        )}
      />
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input type="string" onChange={onChange} label="Name" value={value} />
        )}
      />
      <select {...register('type')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Controller
        control={control}
        name="meaning"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input
            type="string"
            onChange={onChange}
            label="Meaning"
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="example"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input
            type="string"
            onChange={onChange}
            label="Example"
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="synonym"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input
            type="string"
            onChange={onChange}
            label="Synonym"
            value={value}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default WordsForm;
