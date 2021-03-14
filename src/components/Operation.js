import { useState, useEffect } from "react";
import OperationDataService from "../services/OperationDataService";

const Operation = props => {
  const initialOperationState = {
    id: null,
    concept: "",
    amount: "",
    operation: ""
  };
  const [currentOperation, setCurrentOperation] = useState(initialOperationState);
  const [message, setMessage] = useState("");

  const getOperation = id => {
    OperationDataService.get(id)
      .then(response => {
        setCurrentOperation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getOperation(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentOperation({ ...currentOperation, [name]: value });
  };

  const updateOperation = () => {
    OperationDataService.update(currentOperation.id, currentOperation)
      .then(response => {
        console.log(response.data);
        setMessage("The operation was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteOperation = () => {
    OperationDataService.remove(currentOperation.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/operations");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="edit-form">
        <h4>Operation</h4>
        {/* Update form inputs */}
        <form>
          {/* Concept input */}
          <div className="form-group">
            <label htmlFor="concept">Concept</label>
            <input
              type="text"
              className="form-control"
              id="concept"
              name="concept"
              value={currentOperation.concept}
              onChange={handleInputChange}
            />
          </div>
          {/* Amount input */}
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={currentOperation.amount}
              onChange={handleInputChange}
            />
          </div>
          {/* Date input */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={currentOperation.date}
              onChange={handleInputChange}
            />
          </div>
        </form>

        <button className="badge badge-danger mr-2" onClick={deleteOperation}>
          Delete
        </button>

        <button
          type="submit"
          className="badge badge-success"
          onClick={updateOperation}
        >
          Update
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Operation;
