let card = document.querySelector('h1');
card.addEventListener('mouseenter', (e)=>{
  e.target.style.color = 'red';
})
card.addEventListener('mouseleave', (e)=>{
  e.target.style.color = 'purple';
})


const fontSize = document.querySelector('h2');
fontSize.addEventListener('mouseenter', () => {
  fontSize.style.fontSize="10rem";
})
fontSize.addEventListener('mouseleave', (e)=>{
    fontSize.style.fontSize = '2rem';
  })

 const MS = document.querySelector('.text-content');
  MS.addEventListener('click', (event) => {
    event.target.style.color = 'orange';
  });
  

  const dbl = document.querySelector('p');
  dbl.addEventListener('dblclick', (event) => {
    event.target.style.color = 'purple';
  });
  
const changeImg = document.querySelector('img');
changeImg.addEventListener("dblclick", () => {
  changeImg.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
})

const imageResize = document.querySelector('.content-destination img');
    window.addEventListener('resize', () => {
        imageResize.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    })


    const keyKey = document.querySelector('body');
  keyKey.addEventListener('keydown', (event) => {
    keyKey.style.backgroundColor = "green";
  });

  const keyTop = document.querySelector('body');
  keyTop.addEventListener('keydown', (event) => {
    card.style.backgroundColor = "orange";
  });

  const stopLink = document.querySelector("a");

  stopLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("stopped the link")
  })
  
  const wheelie = document.querySelector('.destination');
  wheelie.addEventListener('wheel', (event) => {
    event.target.style.color = 'brown';
  });

