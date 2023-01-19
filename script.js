function scroll2(element) {
  var ele = document.getElementById(element);
  window.scrollTo(ele.offsetLeft, ele.offsetTop);
}
function instagram() {
  window.location.assign("https://www.instagram.com/surabayadev/?hl=id");
}
function youtube() {
  window.location.assign("https://www.youtube.com/@surabayadev");
}
function wa() {
  window.location.assign("https://wtsi.me/62895366141915");
}
const sosmed = document.querySelector(".btn-sosmed");
const design = document.querySelector(".btn-design");
const podcast = document.querySelector(".btn-podcast");
const penerimaanp = document.querySelectorAll(".btn-penerimaan2 p");
const penerimaanimg = document.querySelectorAll(".btn-penerimaan2 img");
const web = document.querySelector(".btn-web");
const eventz = document.querySelector(".btn-event");
const logistik = document.querySelector(".btn-logistik");
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
// about
const awalmula = document.querySelector(".awalmula");
const visi = document.querySelector(".visi");
const kegiatan = document.querySelector(".kegiatan");
const awalmulaisi = document.querySelector(".awalmulaisi");
const visiisi = document.querySelector(".visiisi");
const kegiatanisi = document.querySelector(".kegiatanisi");

awalmula.classList.add("active2");
visiisi.classList.add("none2");
kegiatanisi.classList.add("none2");

awalmula.addEventListener("click", function () {
  awalmulaisi.classList.remove("none2");
  awalmula.classList.toggle("active2");
  visi.classList.remove("active2");
  kegiatan.classList.remove("active2");

  visiisi.classList.add("none2");
  kegiatanisi.classList.add("none2");
});
visi.addEventListener("click", function () {
  visiisi.classList.remove("none2");
  visi.classList.toggle("active2");
  awalmula.classList.remove("active2");
  kegiatan.classList.remove("active2");

  awalmulaisi.classList.add("none2");
  kegiatanisi.classList.add("none2");
});
kegiatan.addEventListener("click", function () {
  kegiatanisi.classList.remove("none2");
  kegiatan.classList.toggle("active2");
  awalmula.classList.remove("active2");
  visi.classList.remove("active2");

  awalmulaisi.classList.add("none2");
  visiisi.classList.add("none2");
});

// end about

sosmed.addEventListener("click", function () {
  // button
  if (a == 0) {
    design.disabled = true;
    podcast.disabled = true;
    web.disabled = true;
    eventz.disabled = true;
    logistik.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 0) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    a = 1;
  } else if (a == 1) {
    design.disabled = false;
    podcast.disabled = false;
    web.disabled = false;
    eventz.disabled = false;
    logistik.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 0) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    a = 0;
  }
  // end button

  sosmed.classList.toggle("active");
  design.classList.remove("active");
  podcast.classList.remove("active");
  web.classList.remove("active");
  eventz.classList.remove("active");
  logistik.classList.remove("active");
});
design.addEventListener("click", function () {
  // button
  if (b == 0) {
    sosmed.disabled = true;
    podcast.disabled = true;
    web.disabled = true;
    eventz.disabled = true;
    logistik.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 1) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    b = 1;
  } else if (b == 1) {
    sosmed.disabled = false;
    podcast.disabled = false;
    web.disabled = false;
    eventz.disabled = false;
    logistik.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 1) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    b = 0;
  }
  // end button
  design.classList.toggle("active");
  sosmed.classList.remove("active");
  podcast.classList.remove("active");
  web.classList.remove("active");
  eventz.classList.remove("active");
  logistik.classList.remove("active");
});
podcast.addEventListener("click", function () {
  // button
  if (c == 0) {
    sosmed.disabled = true;
    design.disabled = true;
    web.disabled = true;
    eventz.disabled = true;
    logistik.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 2) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    c = 1;
  } else if (c == 1) {
    sosmed.disabled = false;
    design.disabled = false;
    web.disabled = false;
    eventz.disabled = false;
    logistik.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 2) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    c = 0;
  }
  // end button

  podcast.classList.toggle("active");
  sosmed.classList.remove("active");
  design.classList.remove("active");
  web.classList.remove("active");
  eventz.classList.remove("active");
  logistik.classList.remove("active");
});
web.addEventListener("click", function () {
  // button
  if (d == 0) {
    sosmed.disabled = true;
    podcast.disabled = true;
    design.disabled = true;
    eventz.disabled = true;
    logistik.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 3) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    d = 1;
  } else if (d == 1) {
    sosmed.disabled = false;
    podcast.disabled = false;
    design.disabled = false;
    eventz.disabled = false;
    logistik.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 3) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    d = 0;
  }
  // end button

  web.classList.toggle("active");
  sosmed.classList.remove("active");
  design.classList.remove("active");
  podcast.classList.remove("active");
  eventz.classList.remove("active");
  logistik.classList.remove("active");
});
eventz.addEventListener("click", function () {
  // button
  if (e == 0) {
    sosmed.disabled = true;
    podcast.disabled = true;
    web.disabled = true;
    design.disabled = true;
    logistik.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 4) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    e = 1;
  } else if (e == 1) {
    sosmed.disabled = false;
    podcast.disabled = false;
    web.disabled = false;
    design.disabled = false;
    logistik.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 4) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    e = 0;
  }
  // end button

  eventz.classList.toggle("active");
  sosmed.classList.remove("active");
  design.classList.remove("active");
  podcast.classList.remove("active");
  web.classList.remove("active");
  logistik.classList.remove("active");
});
logistik.addEventListener("click", function () {
  // button
  if (f == 0) {
    sosmed.disabled = true;
    podcast.disabled = true;
    web.disabled = true;
    eventz.disabled = true;
    design.disabled = true;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 5) {
        penerimaanp[i].classList.add("none");
        penerimaanimg[i].classList.add("none");
      }
    }
    f = 1;
  } else if (f == 1) {
    sosmed.disabled = false;
    podcast.disabled = false;
    web.disabled = false;
    eventz.disabled = false;
    design.disabled = false;
    for (let i = 0; i < penerimaanp.length; i++) {
      if (i != 5) {
        penerimaanp[i].classList.remove("none");
        penerimaanimg[i].classList.remove("none");
      }
    }
    f = 0;
  }
  // end button

  logistik.classList.toggle("active");
  sosmed.classList.remove("active");
  design.classList.remove("active");
  podcast.classList.remove("active");
  web.classList.remove("active");
  eventz.classList.remove("active");
});

// scroll
