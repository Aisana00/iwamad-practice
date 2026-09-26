type FooterProps = {
  year: number;
  author: string;
};

export default function Footer({ year, author }: FooterProps) {
  return (
    <footer className="footer">
      <p>© {year} {author}</p>
    </footer>
  );
}