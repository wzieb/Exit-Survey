import { Link } from 'react-router-dom';

const SurveyList = ({
  responses,
  question,
  showUsername = true,
}) => {
  if (!responses) {
    return <h3>No responses yet</h3>;
  }

  console.log(responses);

  return (
    <main>
      <div>

        <h4>Your responses:</h4>

        <p>Applicable: {responses.applicable}</p>
        <p>Course: {responses.course}</p>
        <p>Created at: {responses.createdAt}</p>
        <p>Favorite part: {responses.favoritePart}</p>
        <p>First name: {responses.firstName}</p>
        <p>Last name: {responses.lastName}</p>
        <p>Least favorite: {responses.leastFavorite}</p>
        <p>Rate teacher: {responses.rateTeacher}</p>
        <p>Rating: {responses.rating}</p>
        <p>Takeaway: {responses.takeaway}</p>

      </div>
    </main>
  )
}

export default SurveyList
