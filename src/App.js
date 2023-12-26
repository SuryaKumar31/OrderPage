import "./index.css";
import { OrderNav, OrderSearch, ProductSummary, ShowData } from "./components";
import { useState } from "react";
import data from "./data";

function App() {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(data);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  function statusDetail(e) {
    e.preventDefault();
    setStatus(e.target.value);
  }

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= datas.length &&
      selectedPage !== page
    )
      setPage(selectedPage);
  }

  return (
    <div className="container mx-auto border border-black p-2 lg:p-7">
      <OrderNav />

      <OrderSearch
        search={search}
        status={status}
        setSearch={setSearch}
        statusDetail={statusDetail}
      />

      <ProductSummary
        datas={datas}
        page={page}
        selectPageHandler={selectPageHandler}
      />

      <ShowData
        datas={datas.filter((item) =>
          item.customer.toLowerCase().includes(search.toLowerCase())
        )}
        setDatas={setDatas}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
