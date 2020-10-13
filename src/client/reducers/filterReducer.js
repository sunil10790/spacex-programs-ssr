export default function filterReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      return {
        ...state,
        limit: 100,
        [action.filters.key]: action.filters.value,
      };
    default:
      return state;
  }
}
