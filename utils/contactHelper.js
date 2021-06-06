export const sendMessage = async (user) => {
  const res = await fetch("http://localhost:3004/messages", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
};
