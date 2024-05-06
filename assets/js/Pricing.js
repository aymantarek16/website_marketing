// ========================= Plans Tabs in pricing page ========================= //
let list = document.querySelectorAll(".plans__tabs__wrapper__list li");
let content = document.querySelectorAll(".plans__tabs__content > div");

list.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    list.forEach((ele) => {
      ele.classList.remove("activeList");
      ele.style.color = "#556068";
    });

    e.currentTarget.classList.add("activeList");
    // Change Colors Between Tabs
    if (e.currentTarget.classList.contains("contractors")) {
      e.currentTarget.style.color = "#63DB63";
    } else if (e.currentTarget.classList.contains("consultants")) {
      e.currentTarget.style.color = "#FFDA08";
    } else if (e.currentTarget.classList.contains("owners")) {
      e.currentTarget.style.color = "#E1412D";
    }

    content.forEach((ele) => {  
      ele.classList.remove("activeContent");
    });
    document
      .querySelector(e.currentTarget.dataset.class)
      .classList.add("activeContent");
  });
});

// ========================= pay Tabs in pricing page ========================= //

let payList = document.querySelectorAll(".pay__content .payList");

payList.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    payList.forEach((ele) => {
      ele.classList.remove("payActive");
    });
    e.currentTarget.classList.add("payActive");
  });
});

// ========================= Add Extras Tabs in pricing page ========================= //
let tabsList = document.querySelectorAll(".add_extras__tabs__wrapper__list li");
let extraContent = document.querySelectorAll(".add_extras__tabs__content .div");

tabsList.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tabsList.forEach((ele) => {
      ele.classList.remove("activeList");
    });
    e.currentTarget.classList.add("activeList");

    // ======================= Start handle change plan title and price ======================= //
    let changePlanTitle = document.querySelector(
      ".add_extras__tabs__info__plan .Essential"
    );
    let changePlanPrice = document.querySelector(
      ".add_extras__tabs__info__plan .planPrice"
    );

    let changePlanProject = document.querySelector(
      ".add_extras__tabs__info__list__item #ProjectsPrice"
    );
    let changePlanUser = document.querySelector(
      ".add_extras__tabs__info__list__item #UserPrice"
    );
    let changePlanDoc = document.querySelector(
      ".add_extras__tabs__info__list__item #DocPrice"
    );

    let changePlanTotal = document.querySelector(
      ".add_extras__tabs__info__total #totalPrice"
    );

    let changePlanItemProject = document.querySelector(
      ".add_extras__tabs__info__list__item #ProjectNumberI"
    );
    let changePlanItemProjectII = document.querySelector(
      ".add_extras__tabs__info__list__item #ProjectNumberII"
    );

    let changePlanItemUser = document.querySelector(
      ".add_extras__tabs__info__list__item #UserNumberI"
    );
    let changePlanItemUserII = document.querySelector(
      ".add_extras__tabs__info__list__item #UserNumberII"
    );

    let changePlanItemDoc = document.querySelector(
      ".add_extras__tabs__info__list__item #DocNumberI"
    );
    let changePlanItemDocII = document.querySelector(
      ".add_extras__tabs__info__list__item #DocNumberII"
    );

    changePlanTitle.innerHTML = e.currentTarget.dataset.title;
    changePlanPrice.innerHTML = e.currentTarget.dataset.price;

    changePlanProject.innerHTML = e.currentTarget.dataset.zero;
    changePlanUser.innerHTML = e.currentTarget.dataset.zero;
    changePlanDoc.innerHTML = e.currentTarget.dataset.zero;

    changePlanTotal.innerHTML = e.currentTarget.dataset.zero2;

    changePlanItemProject.innerHTML = e.currentTarget.dataset.zero2;
    changePlanItemProjectII.innerHTML = e.currentTarget.dataset.zero2;

    changePlanItemUser.innerHTML = e.currentTarget.dataset.zero2;
    changePlanItemUserII.innerHTML = e.currentTarget.dataset.zero2;

    changePlanItemDoc.innerHTML = e.currentTarget.dataset.zero2;
    changePlanItemDocII.innerHTML = e.currentTarget.dataset.zero2;

    EssentialSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    EssentialSlider.value = 0;
    SelectValueI.style.left = "-8%";
    inputValI.innerHTML = 0;

    UserSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    UserSlider.value = 0;
    SelectValueII.style.left = "-8%";
    inputValII.innerHTML = 0;

    DocSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    DocSlider.value = 0;
    SelectValueIII.style.left = "-8%";
    inputValIII.innerHTML = 0;

    ExSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    ExSlider.value = 0;
    SelectValueIIII.style.left = "-8%";
    inputValIIII.innerHTML = 0;

    ProSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    ProSlider.value = 0;
    SelectValueI2.style.left = "-8%";
    inputValI2.innerHTML = 0;

    UserSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    UserSlider2.value = 0;
    SelectValueII2.style.left = "-8%";
    inputValII2.innerHTML = 0;

    DocSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    DocSlider2.value = 0;
    SelectValueIII2.style.left = "-8%";
    inputValIII2.innerHTML = 0;

    ExSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    ExSlider2.value = 0;
    SelectValueIIII2.style.left = "-8%";
    inputValIIII2.innerHTML = 0;

    PremiumSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    PremiumSlider.value = 0;
    SelectValueI3.style.left = "-8%";
    inputValI3.innerHTML = 0;

    UserSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    UserSlider3.value = 0;
    SelectValueII3.style.left = "-8%";
    inputValII3.innerHTML = 0;

    DocSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    DocSlider3.value = 0;
    SelectValueIII3.style.left = "-8%";
    inputValIII3.innerHTML = 0;

    ExSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF 0%, #DFE7EB 0%, #DFE7EB 100%)`;
    ExSlider3.value = 0;
    SelectValueIIII3.style.left = "-8%";
    inputValIIII3.innerHTML = 0;
    // ======================= End handle change plan title and price ======================= //
    extraContent.forEach((ele) => {
      ele.classList.remove("activeContent");
    });
    document
      .querySelector(e.currentTarget.dataset.class)
      .classList.add("activeContent");
  });
});

// ====================================================  Slider range1  ==================================================== //
let EssentialSlider = document.getElementById("EssentialSlider");
let UserSlider = document.getElementById("UserSlider");
let DocSlider = document.getElementById("DocSlider");
let ExSlider = document.getElementById("ExSlider");

let SelectValueI = document.querySelector(".SelectValueI");
let SelectValueII = document.querySelector(".SelectValueII");
let SelectValueIII = document.querySelector(".SelectValueIII");
let SelectValueIIII = document.querySelector(".SelectValueIIII");

let inputValI = document.querySelector(".SelectValueI .value");
let inputValII = document.querySelector(".SelectValueII .value");
let inputValIII = document.querySelector(".SelectValueIII .value");
let inputValIIII = document.querySelector(".SelectValueIIII .value");

//  Total Projects Number
let ProjectNumberI = document.getElementById("ProjectNumberI");
let ProjectNumberII = document.getElementById("ProjectNumberII");

let UserNumberI = document.getElementById("UserNumberI");
let UserNumberII = document.getElementById("UserNumberII");

let DocNumberI = document.getElementById("DocNumberI");
let DocNumberII = document.getElementById("DocNumberII");

// Total Price
let ProjectsPrice = document.getElementById("ProjectsPrice");
let UserPrice = document.getElementById("UserPrice");
let DocPrice = document.getElementById("DocPrice");

let totalPrice = document.getElementById("totalPrice");


// ========================= Essential Slider range  ========================= //
EssentialSlider.oninput = function () {
  totalPrice.innerHTML = Math.round(
    EssentialSlider.value * 20 + UserSlider.value * 15 + DocSlider.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  EssentialSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueI.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValI.innerHTML = valueI;

  // Projects Number
  ProjectNumberI.innerHTML = valueI;
  ProjectNumberII.innerHTML = valueI;

  //  Projects Price
  ProjectsPrice.innerHTML = "$ " + valueI * 20;
};

// ========================= User Slider range  ========================= //
UserSlider.oninput = function () {
  totalPrice.innerHTML = Math.round(
    EssentialSlider.value * 20 + UserSlider.value * 15  + DocSlider.value * 0.07
  );

  let valueII = this.value;

  // User Slider progress bar background color
  UserSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueII / 10
  }%, #DFE7EB ${valueII / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueII.style.left = valueII / 10.6 - "8" + "%";

  // Input value
  inputValII.innerHTML = valueII;

  // Projects Number
  UserNumberI.innerHTML = valueII;
  UserNumberII.innerHTML = valueII;

  //  Projects Price
  UserPrice.innerHTML = "$ " + valueII * 15;
};

// ========================= Doc Slider range  ========================= //

DocSlider.oninput = function () {
  totalPrice.innerHTML = Math.round(
    EssentialSlider.value * 20 + UserSlider.value * 15 + DocSlider.value * 0.07
  );

  let valueIII = this.value;

  //  Doc Slider progress bar background color
  DocSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueIII / 10
  }%, #DFE7EB ${valueIII / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIII.style.left = valueIII / 10.6 - "8" + "%";

  // Input value
  inputValIII.innerHTML = valueIII;

  // Projects Number
  DocNumberI.innerHTML = valueIII;
  DocNumberII.innerHTML = valueIII;

  //  Projects Price
  DocPrice.innerHTML = "$ " + Math.round(valueIII * 0.07);
};

// ========================= Ex Slider range  ========================= //

ExSlider.oninput = function () {
  let valueIIII = this.value;

  //  Ex Slider progress bar background color
  ExSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueIIII / 10
  }%, #DFE7EB ${valueIIII / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIIII.style.left = valueIIII / 10.6 - "8" + "%";

  // Input value
  inputValIIII.innerHTML = valueIIII;
};

// ==================================================== Slider range 2  ==================================================== //

let ProSlider = document.getElementById("ProSlider");

let SelectValueI2 = document.querySelector(".SelectValueI2");

let inputValI2 = document.querySelector(".SelectValueI2 .value");

// ========================= Pro Slider range  ========================= //
ProSlider.oninput = function () {
  totalPrice.innerHTML = Math.round(
    ProSlider.value * 20 + UserSlider2.value * 15 + DocSlider2.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  ProSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueI2.style.left = valueI / 10.6 - "8" + "%";
  
  // Input value
  inputValI2.innerHTML = valueI;

  // Projects Number
  ProjectNumberI.innerHTML = valueI;
  ProjectNumberII.innerHTML = valueI;

  //  Projects Price
  ProjectsPrice.innerHTML = "$" + valueI * 20;
};

// ========================= UserSlider2  ========================= //
let UserSlider2 = document.getElementById("UserSlider2");

let SelectValueII2 = document.querySelector(".SelectValueII2");

let inputValII2 = document.querySelector(".SelectValueII2 .value");

UserSlider2.oninput = function () {
  totalPrice.innerHTML = Math.round(
    ProSlider.value * 20 + UserSlider2.value * 15 + DocSlider2.value * 0.07
  );

  let valueI = this.value;

  //  Essential progress bar background color
  UserSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueII2.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValII2.innerHTML = valueI;

  // Projects Number
  UserNumberI.innerHTML = valueI;
  UserNumberII.innerHTML = valueI;

  //  Projects Price
  UserPrice.innerHTML = "$ " + valueI * 15;
};

// ========================= DocSlider2  ========================= //
let DocSlider2 = document.getElementById("DocSlider2");

let SelectValueIII2 = document.querySelector(".SelectValueIII2");

let inputValIII2 = document.querySelector(".SelectValueIII2 .value");

DocSlider2.oninput = function () {
  totalPrice.innerHTML = Math.round(
    ProSlider.value * 20 + UserSlider2.value * 15 + DocSlider2.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  DocSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIII2.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValIII2.innerHTML = valueI;

  // Projects Number
  DocNumberI.innerHTML = valueI;
  DocNumberII.innerHTML = valueI;

  //  Projects Price
  DocPrice.innerHTML = "$ " + Math.round(valueI * 0.07);
};

// ========================= ExSlider2  ========================= //
let ExSlider2 = document.getElementById("ExSlider2");

let SelectValueIIII2 = document.querySelector(".SelectValueIIII2");

let inputValIIII2 = document.querySelector(".SelectValueIIII2 .value");

ExSlider2.oninput = function () {
  let valueI = this.value;

  //  Essential progress bar background color
  ExSlider2.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIIII2.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValIIII2.innerHTML = valueI;
};

// ====================================================  Slider range 3  ==================================================== //
let PremiumSlider = document.getElementById("PremiumSlider");

let SelectValueI3 = document.querySelector(".SelectValueI3");

let inputValI3 = document.querySelector(".SelectValueI3 .value");

PremiumSlider.oninput = function () {
  totalPrice.innerHTML = Math.round(
    PremiumSlider.value * 20 + UserSlider3.value * 15 + DocSlider3.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  PremiumSlider.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueI3.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValI3.innerHTML = valueI;

  // Projects Number
  ProjectNumberI.innerHTML = valueI;
  ProjectNumberII.innerHTML = valueI;

  //  Projects Price
  ProjectsPrice.innerHTML = "$ " + valueI * 20;
};

// ========================= UserSlider3  ========================= //
let UserSlider3 = document.getElementById("UserSlider3");

let SelectValueII3 = document.querySelector(".SelectValueII3");

let inputValII3 = document.querySelector(".SelectValueII3 .value");

UserSlider3.oninput = function () {
  totalPrice.innerHTML = Math.round(
    PremiumSlider.value * 20 + UserSlider3.value * 15 + DocSlider3.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  UserSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueII3.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValII3.innerHTML = valueI;

  // Projects Number
  UserNumberI.innerHTML = valueI;
  UserNumberII.innerHTML = valueI;

  //  Projects Price
  UserPrice.innerHTML = "$ " + valueI * 15;
};
// ========================= DocSlider3  ========================= //
let DocSlider3 = document.getElementById("DocSlider3");

let SelectValueIII3 = document.querySelector(".SelectValueIII3");

let inputValIII3 = document.querySelector(".SelectValueIII3 .value");

DocSlider3.oninput = function () {
  totalPrice.innerHTML = Math.round(
    PremiumSlider.value * 20 + UserSlider3.value * 15 + DocSlider3.value * 0.07
  );
  let valueI = this.value;

  //  Essential progress bar background color
  DocSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIII3.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValIII3.innerHTML = valueI;

  // Projects Number
  DocNumberI.innerHTML = valueI;
  DocNumberII.innerHTML = valueI;

  //  Projects Price
  DocPrice.innerHTML = "$ " + Math.round(valueI * 0.07);
};

// ========================= ExSlider3  ========================= //
let ExSlider3 = document.getElementById("ExSlider3");

let SelectValueIIII3 = document.querySelector(".SelectValueIIII3");

let inputValIIII3 = document.querySelector(".SelectValueIIII3 .value");

ExSlider3.oninput = function () {
  let valueI = this.value;

  //  Essential progress bar background color
  ExSlider3.style.background = `linear-gradient(to right, #294CFF 0%, #294CFF ${
    valueI / 10
  }%, #DFE7EB ${valueI / 10}%, #DFE7EB 100%)`;

  // Select Value
  SelectValueIIII3.style.left = valueI / 10.6 - "8" + "%";

  // Input value
  inputValIIII3.innerHTML = valueI;
};

// ========================= Table Fixed ========================= //
let tableFixed = document.querySelector(".tableFixed");
var x = window.matchMedia("(min-width: 768px) and (max-width: 992px)");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 2900 && x.matches) {
    tableFixed.style.display = "block";
  } else if (window.scrollY >= 2340 && !x.matches) {
    tableFixed.style.display = "block";
  } else {
    tableFixed.style.display = "none";
  }
});

// ========================= Table Fixed Tabs in pricing page ========================= //

let tableTabs = document.querySelectorAll(".tableFixed__wrapper .tableFixed__item");

tableTabs.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tableTabs.forEach((ele) => {
      ele.classList.remove("activeFixed");
    });
    e.currentTarget.classList.add("activeFixed");
  });
});