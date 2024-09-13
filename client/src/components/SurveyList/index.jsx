import { Link } from 'react-router-dom';

const SurveyList = ({
  responses,
  question,
  showUsername = true,
}) => {
  if (!responses.length) {
    return <h3>No responses yet</h3>;
  }

  return (
    <div>
      {showQuestion && <h3>{question}</h3>}
      {
        reponses &&
        responses.map((response) => (
          <div key={response._id} className="card mb-3">

            <h4 className="card-header bg-primary text-light p-2 m-0">
              <Link
                className="text-light"
                to={`/profiles/${response.username}`}
              >
                <span style={{ fontSize: '1rem' }}>
                  You gave these responses on {responses.createdAt}
                </span>
              </Link>
            </h4>
          </div>
        ))
      }
    </div >
  )
}
export default SurveyList;
