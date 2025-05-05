import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Table = ({ array }) => {

  if (!array || array.length === 0) return <div>No data available</div>;

  const headers = Object.keys(array[0]).filter((key) => key !== 'userId' && key !== 'id');
  const desiredOrder = ["title", "content", "createdAt", "updatedAt"];
  const remainingKeys = headers.filter((key) => !desiredOrder.includes(key));
  const orderedHeaders = [...desiredOrder, ...remainingKeys];

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {orderedHeaders.map((key) => (
              <th key={key} className="capitalize">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => {

            return (
              <tr
                className="bg-base-100 text-black hover:bg-primary hover:text-primary-content hover:cursor-pointer transition-colors duration-50"
                key={item.id || index}
                onClick={() => { navigate(`/note/${item.id}`) }}
              >
                <th>{index + 1}</th>
                {orderedHeaders.map((key) => (
                  <td key={key}>
                    {(key === "createdAt" || key === "updatedAt")
                      ? item[key]
                        ? format(item[key].toDate(), "dd/MM/yyyy, HH:mm")
                        : "-"
                      : item[key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
