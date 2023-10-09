// hamBurgur Menu
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navBar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Products section
let httpProducts = new XMLHttpRequest(); // Rename the variable

httpProducts.open(
  "get",
  "https://aqibproductive.github.io/api/products.json",
  true
);
httpProducts.send();

httpProducts.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";

    for (let item of products) {
      output += `
                <div class="pro" onclick="window.location.href='sproduct.html';">
                    <img src='${item.image}' alt="">
                    <div class="desc">
                        <span>${item.brand}</span>
                        <h5>${item.description}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${item.price}</h4>
                    </div>
                    <a href=""><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>
            `;
    }

    document.querySelector(".section-pa1 #data-output").innerHTML = output;
  }
};

// Arrivals section
let httpArrivals = new XMLHttpRequest(); // Rename the variable

httpArrivals.open(
  "get",
  "https://aqibproductive.github.io/api/Arrivals.json",
  true
);
httpArrivals.send();

httpArrivals.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";

    for (let item of products) {
      output += `
                <div class="pro" onclick="window.location.href='sproduct.html';">
                    <img src='${item.image}' alt="">
                    <div class="desc">
                        <span>${item.brand}</span>
                        <h5>${item.description}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${item.price}</h4>
                    </div>
                    <a href=""><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>
            `;
    }

    document.querySelector(".section-pa1 #data-output2").innerHTML = output;
  }
};

// prodetails section

var MainImage = document.getElementById("mainImage");
var smalling = document.getElementsByClassName("small-image");

smalling[0].onclick = function () {
  MainImage.src = smalling[0].src;
};
smalling[1].onclick = function () {
  MainImage.src = smalling[1].src;
};
smalling[2].onclick = function () {
  MainImage.src = smalling[2].src;
};
smalling[3].onclick = function () {
  MainImage.src = smalling[3].src;
};
