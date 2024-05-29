const loginTestAPI = async () => {
  await fetch(`./api/login`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
