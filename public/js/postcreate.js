const addPost = async (e) => {
    console.log("Click click boom");
    e.preventDefault();
    const titlePost = document.getElementById('createInput').value;
    const postContent = document.getElementById('postInput').value;

    if (titlePost && postContent) {
        const response = await fetch ('/addpost', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({ titlePost, postContent }),
        });
        console.log("hittin' the route from the back")
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('The post failed to create');
        }
    }
};

document.querySelector('#postBtn').addEventListener('click', addPost)