const mailAPI = async ({ user }) => {
  await fetch(`./api/${user}/post`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then();
};

export default mailAPI;
