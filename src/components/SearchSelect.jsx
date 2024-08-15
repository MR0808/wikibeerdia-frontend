const SearchSelect = ({ name, data }) => {
    return (
        <div
            key={name}
            className="items-center md:px-2 pr-2 space-x-4 mr-4 pb-2 md:pb-0 md:border-l md:w-3/12"
        >
            <select
                name={name}
                className="text-base text-gray-800 outline-none px-4 py-2 w-full"
            >
                <option value={name}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </option>
                {data.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default SearchSelect;
