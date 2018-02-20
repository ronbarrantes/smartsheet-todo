let emptyState = {
  count: 0,
  data: [],
};

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'TODO_SET':
      return payload;
    case 'TODO_REMOVE':
      return emptyState;
    default:
      return state;
  }
};

