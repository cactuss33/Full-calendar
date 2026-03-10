const btn = document.getElementById('wishlistBtn');

btn.addEventListener('click', () => {
  btn.classList.add('clicked');
  btn.disabled = true; // evita clicks repetidos
  register()
});

function register(){
  storeItem("wishlist", true)
}

function setup(){
  if(getItem("owner")){
    console.log("welcome back")
  }
  if(getItem("wishlist")){
    btn.classList.add('clicked');
    btn.disabled = true;
  }
}
