const comment = async (e) => {
  console.log("Clicky");
  e.preventDefault();
  const userComment = docoment.getElementById("commentInput").value;
  const response = await fetch("/api/users/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      comment: userComment || '',
    }),
  });
  if (response.ok) {
    console.log("BOOM!");
  } else {
    alert("Failed to post comment");
  }
};
