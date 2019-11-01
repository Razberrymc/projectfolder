const water = document.querySelector('#water');

water.onclick = () => {
  if (water.getAttribute("src") ==="images/stilles_mineralwasser.jpg") {

    water.setAttribute("src","images/glass_empty.jpg");


  }
else {
  water.setAttribute("src","images/stilles_mineralwasser.jpg");
}

}



/*const relax = document.querySelector('#relax');

relax.onmouseover = () => {
  if (relax.getAttribute("src") ==="images/relax_breathe.jpg") {

    relax.setAttribute("src","images/and_breathe.jpg");


  }
else {
  relax.setAttribute("src","images/relax_breathe.jpg");
}

}*/

relax.onmouseover = () => {
  relax.setAttribute("src","images/and_breathe.jpg");
}

relax.onmouseleave = () => {
  relax.setAttribute("src","images/relax_breathe.jpg");
}
