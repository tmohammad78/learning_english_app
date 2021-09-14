import { useForm } from 'react-hook-form';
import { WordState } from 'src/types/store';
const typeOfwords = ['Noun', 'Verb', 'Adjective'];
// interface FormData: WordState{
//   word: string;
//   type: string;
//   description: [];
// };
const WordsForm = () => {
  const { register, handleSubmit } = useForm<WordState>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <select {...register('type')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input {...register('meaning')} />
      <input {...register('example')} />
      <input {...register('synonym')} />
      <input type="submit" />
    </form>
  );
};

export default WordsForm;
