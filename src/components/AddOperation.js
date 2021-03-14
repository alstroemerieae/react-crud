import { useState } from "react";
import OperationDataService from "../services/OperationDataService";

const AddOperation = () => {
  const initialOperationState = {
    id: null,
    concept: "",
    // 0?
    amount: "",
    operation: "",
    date: "date"
  };
  const [operation, setOperation] = useState(initialOperationState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOperation({ ...operation, [name]: value });
  };

  const saveOperation = () => {
    var data = {
      concept: operation.concept,
      amount: operation.amount,
      operation: operation.operation,
      date: operation.date
    };

    OperationDataService.create(data)
      .then(response => {
        setOperation({
          id: response.data.id,
          concept: response.data.concept,
          amount: response.data.amount,
          operation: response.data.operation,
          date: response.data.date
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newOperation = () => {
    setOperation(initialOperationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div className="d-flex">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newOperation}>
            Add
          </button>
        </div>
      ) : (
        <div className="d-flex">
          {/* Concept input */}
          <div className="form-group">
            <label htmlFor="concept">Concept</label>
            <input
              type="text"
              className="form-control"
              id="concept"
              required
              value={operation.concept}
              onChange={handleInputChange}
              name="concept"
            />
          </div>
          {/* Amount input */}
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              required
              value={operation.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </div>
          {/* Operation input */}
          <div className="form-group">
            <label htmlFor="operation">Operation</label>
            <input
              type="text"
              className="form-control"
              id="operation"
              required
              value={operation.operation}
              onChange={handleInputChange}
              name="operation"
            />
          </div>
          {/* Date input */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              required
              value={operation.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>
          {/* Add operation button */}
          <button onClick={saveOperation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddOperation;
