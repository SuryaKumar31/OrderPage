const ShowData = ({ datas, setDatas, page }) => {
  function handleChange(id) {
    const listItems = datas.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setDatas(listItems);
  }

  return (
    <div className="overflow-x-auto overflow-y-auto p-3">
      <table className="table-auto overflow-x-auto ">
        {/* head */}
        <thead>
          <tr>
            <th>Check</th>
            <th>ID</th>
            <th>Shippy</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>CUSTOMER</th>
            <th>EMAIL</th>
            <th>COUNTRY</th>
            <th>SHIPPING</th>
            <th>SOURCE</th>
            <th>ORDER TYPE</th>
          </tr>
        </thead>
        {/* body */}
        {datas.length > 0 && (
          <tbody>
            {datas.slice(page * 10 - 10, page * 10).map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleChange(item.id)}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.shippy}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.customer}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.shipping}</td>
                  <td>{item.source}</td>
                  <td>{item.orderType}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ShowData;
