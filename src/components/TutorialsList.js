import { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import { Link } from "react-router-dom";

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveTutorial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <h4>Tutorials List</h4>
        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <div
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title} | {tutorial.description} | {tutorial.published ? "Published" : "Pending"} | 
                <Link to={"/tutorials/" + tutorial.id} className="btn btn-info">Edit</Link>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorialsList;
