import "./FilterByTitle.css";

const FilterByTitle = ({ searchTitle, setSearchTitle }) => {
  return (
    <div className="FilterByTitle">
      <input
        type="text"
        placeholder="Search ..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    </div>
  );
};

export default FilterByTitle;
