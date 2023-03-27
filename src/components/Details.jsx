import { useParams } from 'react-router-dom';

function Details() {
  let routeParams = useParams();
  console.log(routeParams);

  return (
    <div className='user-details'>
      User Details Component
    </div>
  );
}

export default Details;
