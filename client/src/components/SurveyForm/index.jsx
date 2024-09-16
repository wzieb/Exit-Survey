import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SUBMIT_SURVEY } from '../../utils/mutations'

// import { ADD_THOUGHT } from '../../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SurveyForm = () => {
  const [responseText, setResponseText] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('Class 101');
  const [rating, setRating] = useState(5);
  const [favoritePart, setFavoritePart] = useState('');
  const [leastFavorite, setLeastFavorite] = useState('');
  const [takeaway, setTakeaway] = useState('');
  const [rateTeacher, setRateTeacher] = useState(5);
  const [applicable, setApplicable] = useState(5);

  const [submitSurvey, { error }] = useMutation
  (SUBMIT_SURVEY, {
    variables: {
      survey: {
      firstName,
      lastName,
      course,
      rating: parseFloat(rating),
      favoritePart,
      takeaway,
      rateTeacher: parseFloat(rateTeacher),
      applicable: parseFloat(applicable),
      leastFavorite
      }
    }
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const { data } = await addResponse({
    //     variables: {
    //       responseText,
    //       // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
    //       surveyAuthor: Auth.getSurveyList().authenticatedPerson.username
    //     },
    //   });

    //   setResponseText('');
    // } catch (err) {
    //   console.error(err);
    // }
    try {
      await submitSurvey();
      window.alert('Your responses have been reecorded!');
      document.location.assign('/summary');
    } catch (e){
      console.error("An error has occured while submitting survey...")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

  //   if (name === 'responseText' && value.length <= 280) {
  //     setResponseText(value);
  //     setCharacterCount(value.length);
  //   }
  };

  return (
    <div>
      <h3>What did you think of your course and instructor?</h3>

      {Auth.loggedIn() ? (
        <>
          
          <form 
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <p>First Name</p>
              <textarea
                name="responseText"
                value={firstName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setFirstName(e.target.value)}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <p>Last Name</p>
              <textarea
                name="responseText"
                value={lastName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setLastName(e.target.value)}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <p>Select Your Class</p>
              {/* @@TODO: This select options list doesn't match DB */} 
              <select 
                name="responseText"
                value={course}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setCourse(e.target.value)}
              >Select your class<option value="Class 101">Course 101</option><option value="course102">Course 102</option><option value="course103">Course 103</option><option value="course201">Course 201</option><option value="course202">Course 202</option>
              </select>
            </div>
            <div className="col-12 col-lg-9">
              <p>On a scale of 1-5, how would you rate this class, 5 being the best?</p>
              <select
                name="responseText"
                value={rating}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setRating(e.target.value)}
              >On a scale of 1-5, how would you rate this class, 5 being the best?<option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option></select>
            </div>
            <div className="col-12 col-lg-9">
              <p>What was your favorite part about the class?</p>
              <textarea
                name="responseText"
                placeholder="Share your thoughts..."
                value={favoritePart}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setFavoritePart(e.target.value)}
              >What was your favorite part about the class?</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <p>What did you not like about the class?</p>
              <textarea
                name="responseText"
                placeholder="Share your thoughts..."
                value={leastFavorite}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setLeastFavorite(e.target.value)}
              >What did you not like about the class?</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <p>What are you taking away from this class?</p>
              <textarea
                name="responseText"
                placeholder="Share your thoughts..."
                value={takeaway}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setTakeaway(e.target.value)}
              >What are you taking away from this class?</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <p>How would you rate your teacher?</p>
              <select
                name="responseText"
                value={rateTeacher}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setRateTeacher(e.target.value)}
              >How would you rate your teacher?<option value={1}>1</option>1<option value={2}>2</option>2<option value={3}>3</option>3<option value={4}>4</option>4<option value={5}>5</option>5</select>
            </div>
            <div className="col-12 col-lg-9">
              <p>On a scale of 1-5, how applicabke is this information to your future endeavors?</p>
              <select
                name="responseText"
                value={rating}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(e)=>setApplicable(e.target.value)}
              >On a scale of 1-5, how would you rate this class, 5 being the best?<option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option></select>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
            {/* {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )} */}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to complete the survey. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SurveyForm;
