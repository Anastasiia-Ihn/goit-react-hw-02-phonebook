export const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" name="input" value={filter} onChange={onChange} />
      </label>
    </form>
  );
};
