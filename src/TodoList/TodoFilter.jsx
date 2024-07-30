export function TodoFilter({ setTodos, search, setSearch }) {
  return (
    <input
      setTodos={setTodos}
      // set
      value={search}
      placeholder="search"
      onChange={(event) => {
        // get
        console.log(event.target.value);

        setSearch(event.target.value);
      }}
    />
  );
}
