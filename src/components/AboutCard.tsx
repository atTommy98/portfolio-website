function AboutCard() {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-border rounded-xl p-[3px] my-4">
      <div className="w-full h-full rounded-xl bg-white px-4 py-2">
        <h1 className="card--title">Title</h1>
        <h3 className="card--subtitle">Sub Title</h3>
        <p className="card--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
