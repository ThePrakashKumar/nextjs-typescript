// when we go the to /about it will take some time to load data(if we would have) on the server and then generating HTML with that and the HTML will be sent to the client and this will take sometime. So for this time this component will show some loading message until then.
const Loading = () => {
  return <div style={{ height: "500px", background: "pink" }}>Loading...</div>;
};

export default Loading;
