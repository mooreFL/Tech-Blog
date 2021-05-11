const comment = async (e) => {
  console.log("Clicky");
  e.preventDefault();
  const userComment = document.getElementById("commentInput").value;
  const response = await fetch("/comment", {
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

document.querySelector('#comment').addEventListener('click', comment);
