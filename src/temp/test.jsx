// import { useState } from "react";

// const useForm = (initialState) => {
//   const [form, setForm] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const resetForm = (newState = initialState) => {
//     setForm(newState);
//   };

//   return { form, handleChange, resetForm };
// };

// export default useForm;











import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Table = ({ array }) => {

  if (!array || array.length === 0) return <div>No data available</div>;

  const headers = Object.keys(array[0]).filter((key) => key !== 'userId' && key !== 'id');


  // console.log(array[0].createdAt.toDate().toLocaleString())

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {headers.map((key) => (
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
                onClick={() => { navigate(`/note/${item.id}`) }}>
                <th>{index + 1}</th>
                <p>{format(key.createdAt?.toDate(), "hh:mm")}</p>
                {headers.map((key) => {

                  // console.log(key.toDate().toLocaleString())

                  // key == "createdAt" ? console.log(key.toDate().toLocaleString()) : ""

                  return (
                    // <p>{format(key.createdAt.toDate(), "dd MMM yyyy, hh:mm a")}</p>
                    // <td key={key}>{key == "createdAt" ? "00" : item[key]}</td>
                    <p>{format(key.createdAt?.toDate(), "hh:mm")}</p>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
