import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, getFilter } from '../../redux/slice';
import { setFilter, getFilter } from '../../redux/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  // const onChangeFilter = event => {
  //   dispatch(setFilter(event.target.value));
  // };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
