import SurveyList from '../components/SurveyList';

const Summary = () => {
    const { loading, data } = useQuery(QUERY_RESPONSES);
    const responses = data?.responses || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <SurveyeList />
          </div>
        </div>
      </main>
    );
  };
  
  export default Summary;
  