import { styles } from "../style";

const ProductSummary = ({ datas, page, selectPageHandler }) => {
  return (
    <section className={`${styles.section} mt-0 lg:mt-2`}>
      {/* product summary  */}
      <div className="flex items-center p-2">
        <h1 className="font-bold text-xl w-96">Product Summary</h1>
        <h3 className="hidden lg:block">Show</h3>
      </div>
      {/* allColumn and Dispatch select button */}
      <div className="flex items-center justify-between">
        <select
          name=""
          id=""
          className={`border border-gray-500 rounded px-1 py-1 xl:w-96`}
        >
          <option value="" className="">
            ALL COLUMN
          </option>
        </select>
        <button className={`${styles.dispatch__button}`}>
          DISPATCH SELECTED
        </button>
      </div>
      <div className="pagination">
        <span
          onClick={() => selectPageHandler(page - 1)}
          className={page > 1 ? "" : "disabled"}
        >
          ◀
        </span>
        {[...Array(datas.length / 10)].map((_, i) => {
          return (
            <span
              className={page === i + 1 ? "pagination-selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          onClick={() => selectPageHandler(page + 1)}
          className={page < datas.length / 10 ? "" : "disabled"}
        >
          ▶
        </span>
      </div>
    </section>
  );
};

export default ProductSummary;
