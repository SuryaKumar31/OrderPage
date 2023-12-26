import { styles } from "../style";

const OrderSearch = ({ search, setSearch, status, statusDetail }) => {
  return (
    <>
      <section className={`${styles.section} shadow`}>
        {/* search bar */}
        <div className="p-2 relative w-full lg:w-1/3">
          <h3 className="font-medium lg:font-bold">
            What are you looking for?
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search for customer name,email, company, etc."
              className={`${styles.input__text}`}
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${styles.search__svg}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {/* catagory dropdown */}
        <div className={`${styles.dropdown__container}`}>
          <h3 className="font-medium lg:font-bold">Category</h3>
          <select name="" id="" className={`${styles.select}`}>
            <option value="">All</option>
          </select>
        </div>
        {/* status dropdown */}
        <div className={`${styles.dropdown__container}`}>
          <h3 className="font-medium lg:font-bold">Status</h3>
          <select
            name=""
            id=""
            className={`${styles.select}`}
            value={status}
            onChange={statusDetail}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {/* search button */}
        <div className="flex gap-3 items-center lg:mt-6 lg:ml-1 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-slate-300 px-1 py-2 rounded hidden lg:block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
          <button className={`${styles.button} w-full lg:w-48`}>Search</button>
        </div>
      </section>
    </>
  );
};

export default OrderSearch;
