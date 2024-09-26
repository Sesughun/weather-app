import imagestore from "./store/imagestore";

const Header = () => {
  const updateBackground = imagestore((state: any) => state.backgroundUpdate);
  const updateLocation = imagestore((state: any) => state.locationUpdate);

  function updates(event: React.ChangeEvent<HTMLOptionElement>) {
    const value = event.target.value;
    updateBackground(value);
    updateLocation(value);
  }

  return (
    <div className="bg-black bg-opacity-25 text-black text-lg p-2">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" text-white size-6"
        >
          <path
            fill-rule="evenodd"
            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
          />
        </svg>
        <label htmlFor="locations">Pick a Location:</label>
      </div>
      <select name="locations" id="locations" onChange={updates}>
        <option value="paris">Paris</option>
        <option value="london">London</option>
        <option value="washington">Washington</option>
        <option value="tokyo">Tokyo</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
      </select>
    </div>
  );
};

export default Header;
