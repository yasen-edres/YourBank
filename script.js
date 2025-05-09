function Allmodifications() {
  var screenWidth = window.innerWidth; //doload the whidth of screen
  var logo = document.getElementById("logo");
  var nav_right_sectain = document.getElementById("nav-right-sectain");
  var welcom_secation = document.getElementById("welcom-secation");
  var your_caree = document.getElementById("your-caree");
  var footer = document.getElementById("footer");
  var img =logo.querySelector("img");
  if (screenWidth <= 570) {
    nav_right_sectain.innerHTML = `<img src="img/nav-click.png" alt="">`;
    welcom_secation.innerHTML=`<img src="img/Abstract Design -responsive.png" alt="">
          <div class="info">
        <div class="text">
          <h1>Welcome to <span>YourBank</span> Careers!</h1>
          <p>
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities.
          </p>
        </div>
        <div class="photo ">
          <img src="img/59ef95da573f28899964e73c2cab196a.png" alt="" />
        </div>
      </div>`;
    your_caree.innerHTML=`      <img src="img/Abstract Design (2).png" alt="" />
      <div class="info">
        <h1>Start your Career with<span>YourBank today!</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
          pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
          Nascetur viverra arcu sed amet cursus purus.
        </p>
        <button>Open Account</button>
      </div>
      `;
      footer.innerHTML=`      <div class="info">
        <div class="logo">
          <img src="img/shape-30@3x.png" alt="" />
          <img src="img/YourBanK.png" alt="" />
        </div>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">About</a>
          <a href="#">Secuirty</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="contact-us">
        <div class="email">
          <img src="img/Icon.png" alt="" />
          <p>hello@skillbirdge.com</p>
        </div>
        <div class="phone">
          <img src="img/phone-icon.png" alt="" />
          <p>+91 91813 23 2309</p>
        </div>
        <div class="location">
          <img src="img/location-icon.png" alt="" />
          <p>Somewhere in the World</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="about-us">
        <div class="left-section">
          <img src="img/facebook-icon.png" alt="" />
          <img src="img/tweter-icon.png" alt="" />
          <img src="img/instgram-icon.png" alt="" />
        </div>
        <div class="center-section">
          <p>YourBank All Rights Reserved</p>
          <div class="right-sectain">
        <p>Privacy Policy</p>
        <div class="line"></div>
        <p>Terms of Service</p>
        </div>
        </div>
      </div>`;
    var h4 = logo.querySelector("h4");
    if (h4) {
      var img = document.createElement("img");
      img.src = "img/your-bank.png";
      logo.replaceChild(img, h4);
    }
  }
}


window.addEventListener("load", Allmodifications);//call funcation
window.addEventListener("resize", Allmodifications);//call funcation





