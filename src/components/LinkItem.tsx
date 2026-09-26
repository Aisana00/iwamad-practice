import type { ProfileLink } from '../types';

type LinkItemProps = {
  link: ProfileLink;
};

export default function LinkItem({ link }: LinkItemProps) {
  return (
    <a href={link.url} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  );
}