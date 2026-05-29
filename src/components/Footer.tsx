export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-screen-lg mx-auto w-full px-4 md:px-24 py-6 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <p className="subtext">{year} Built by Yours Truly</p>
        <p className="subtext">
          Built with Next.js &amp; Tailwind CSS, deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
