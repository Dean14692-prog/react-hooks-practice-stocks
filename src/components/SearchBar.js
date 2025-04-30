function SearchBar({ onSort, onFilter }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          name="sort"
          value="Alphabetically"
          onChange={(e) => onSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="Price"
          onChange={(e) => onSort(e.target.value)}
        />
        Price
      </label>

      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Sportswear">Sportswear</option>
        </select>
      </label>
    </div>
  );
}
export default SearchBar;
