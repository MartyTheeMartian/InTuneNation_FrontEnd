const dashboard = (state = {}, action) => {
  // console.log('what is dashboard', state.dashboard);
  switch (action.type) {
    case 'DASHBOARD_RUN_FULFILLED':
      return { ...action.payload };
    default:
      return state;
  }
};

export default dashboard;
