const Select = () => {
  return (
    <select className="w-full max-w-167 h-45 bg-grey-2 outline-none cursor-pointer p-3">
      <option disabled selected>
        Filtrar por região
      </option>
      <option>Todos</option>
      <option>África</option>
      <option>América</option>
      <option>Antártida</option>
      <option>Asia</option>
      <option>Europa</option>
      <option>Oceania</option>
    </select>
  );
};

export { Select };
