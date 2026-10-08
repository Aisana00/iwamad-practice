import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button variant="secondary" aria-label={`Like (${likes} likes)`} onClick={addLike}>
      ❤️ Like · {likes}
    </Button>
  );
}