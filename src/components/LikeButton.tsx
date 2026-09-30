import { useLikes } from '../context/LikesContext';

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button className="like-btn" onClick={addLike}>
      ❤️ Like · {likes}
    </button>
  );
}