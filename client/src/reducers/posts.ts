export default (posts = [], action: any) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};