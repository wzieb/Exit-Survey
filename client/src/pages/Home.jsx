import { useQuery } from '@apollo/client';


import SurveyForm from '../components/SurveyForm';

import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const survey = data?.survey || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SurveyForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
