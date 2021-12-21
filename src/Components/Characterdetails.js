import { useSelector } from 'react-redux';

function Characterdetails() {
  const characters = useSelector((state) => state.charactersReducer);
  console.log(characters);
  return (
    <div>
      Deneme
    </div>
  );
}

export default Characterdetails;
