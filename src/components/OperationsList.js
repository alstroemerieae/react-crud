import { useState, useEffect } from "react";
import OperationDataService from "../services/OperationDataService";
import { Link } from "react-router-dom";

const OperationsList = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    retrieveOperations();
  }, []);

  const retrieveOperations = () => {
    OperationDataService.getAll()
      .then(response => {
        setOperations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <h4>Operations List</h4>
        <ul className="list-group">
          {operations &&
            operations.map((operation) => (
              <div
                className="list-group-item"
                onClick={() => setOperations(operation)}
                key={operation.id}
              >
                {operation.concept} | {operation.amount} | {operation.date} | 
                <Link to={"/operations/" + operation.id} className="btn btn-info">Edit</Link>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default OperationsList;
