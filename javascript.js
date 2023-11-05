document.addEventListener('DOMContentLoaded', () => {
  const blogForm = document.getElementById('blogForm');
  const titleDisplay = document.getElementById('title-display');
  const contentDisplay = document.getElementById('content-display');
  const imageDisplay = document.getElementById('image-display');
  const videoDisplay = document.getElementById('video-display');

  blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const video = document.getElementById('video').files[0];

    titleDisplay.textContent = title;
    contentDisplay.textContent = content;
    imageDisplay.src = URL.createObjectURL(image);
    videoDisplay.src = URL.createObjectURL(video);

    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Blog page</title>
          <style>
            body {
              background: linear-gradient(to bottom, #f1c40f,#f39c12);
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
            }
            h1 {
              color: black;
              font-weight: bolder;
            }
            p {
              color: black;
              font-weight:800;
            }
            img, video {
              display: block;
              margin: 0 auto;
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <h1 style="font-weight: bolder;">Content Management Blog</h1>
          <p><strong>Title:</strong> <span id="title-display">${title}</span></p>
          <p><strong>Content:</strong> <span id="content-display">${content}</span></p>
          <p><strong>Image:</strong></p>
          <img id="image-display" src="${URL.createObjectURL(image)}" alt="Submitted Image" width="400px" height="300px"/>
          <p><strong>Video:</strong></p>
          <video id="video-display" src="${URL.createObjectURL(video)}" controls width="400px" height="300px"></video>
        </body>
      </html>
    `);
    newWindow.document.close();
    
    blogForm.reset();
  });
});
