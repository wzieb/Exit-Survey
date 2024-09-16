import SurveyList from '../components/SurveyList';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries'
const Summary = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const responses = data?.me || {};
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <SurveyList responses={responses.responses } user = {responses}/>
          </div>
        </div>
      </main>
    );
  };
  
  export default Summary;
  