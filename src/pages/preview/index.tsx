import { useLocation } from 'react-router';
import { WordState } from 'src/types/store';

// interface IState {
//   [key: number]: WordState[];
// }

export default function PreviewPage() {
  const { state } = useLocation<WordState>();

  return (
    <div>
      <span>{state.name}</span>
      <span>Meaning is :{state.meaning}</span>
    </div>
  );
}
