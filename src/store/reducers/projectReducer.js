const initState = {
  projects: [
    {id: 1, title: 'title1', content: 'blah-blah-blah'},
    {id: 2, title: 'title2', content: 'blah-blah-blah'},
    {id: 3, title: 'title3', content: 'blah-blah-blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      return state;
    case 'CREAT_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer