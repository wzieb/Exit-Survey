import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// import { ADD_THOUGHT } from '../../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SurveyForm = () => {
  const [thoughtText, setThoughtText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  // const [addThought, { error }] = useMutation
  // (ADD_THOUGHT, {
  //   refetchQueries: [
  //     QUERY_THOUGHTS,
  //     'getThoughts',
  //     QUERY_ME,
  //     'me'
  //   ]
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addResponse({
        variables: {
          thoughtText,
          // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
          surveyAuthor: Auth.getProfile().authenticatedPerson.username
        },
      });

      setResponseText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'responseText' && value.length <= 280) {
      setResponseText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What did you think?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={firstName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"First name"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={lastName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"Last name"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                value={course}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"Select your class"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                value={rating}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"On a scale of 1-5, how would you rate this class?"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={favoritePart}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"What was your favorite part about the class?"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={leastFavorite}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"What did you not like about the class?"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={takeaway}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"What are you taking away from this class?"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                value={rateTeacher}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"How would you rate your teacher?"</textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="responseText"
                placeholder="Maximum 280 characters..."
                value={applicable}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              >"How applicable was this course’s content to your future endeavor?"</textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                "Submit"
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
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
