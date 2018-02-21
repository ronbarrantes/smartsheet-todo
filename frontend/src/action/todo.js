import superagent from 'superagent';

export const set = (todos) => ({
  type: 'TODO_SET',
  payload: todos,
});

export const fetch = () => (store) => {
  return superagent.get(`${__API_URL__}/todos`)
    .then(res => {
      return store.dispatch(set(res.body));
    });
};

