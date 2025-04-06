export const Header = () => {
  return (
    <div className="text-center pt-8 pb-4">
      <h1 className="text-4xl font-bold mb-4">Monkey Language Playground</h1>
      <p className="text-base text-gray-300">
        Credit to the author of{" "}
        <a
          href="https://monkeylang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-600 transition"
        >
          monkeylang.org
        </a>
        . <br />
        Million thanks for your inspiring books that made this project possible.
      </p>
    </div>
  );
};
