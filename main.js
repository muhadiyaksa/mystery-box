const buttonmisteribox = document.querySelector(".misteribox");
const keymisteribox = document.querySelectorAll(".keymisteribox");
const imgmisteribox = document.querySelector(".misteribox img");
const modalCLosed = document.getElementById("#closed");
const btnmodalCLosed = document.querySelector(".buttonclosed");
const deskripsiayas = document.querySelector(".deskripsiayas");
const formChallengFour = document.querySelector(".formChallangeFour");

buttonmisteribox.addEventListener("click", () => {
  let data = [...keymisteribox].map((el) => el.value);
  if (data.includes("")) {
    keymisteribox.forEach((el) => {
      if (el.classList.contains("shake")) {
        el.classList.remove("shake");
      } else {
        el.classList.add("shake");
        setTimeout(() => {
          el.classList.remove("shake");
        }, 2000);
      }
    });
  } else {
    if (data.join("").toLowerCase() === "as8n") {
      imgmisteribox.classList.remove("bounce");
      imgmisteribox.classList.add("flip");
      console.log(btnmodalCLosed);
      setTimeout(() => {
        btnmodalCLosed.click();
      }, 2000);
      deskripsiayas.innerHTML = formChallengFour.value;
      // deskripsiayas.innerHTML = "yang nyebelin";
    }
  }
});

const formOne = document.querySelector(".formOne");
const formChallengeOne = document.querySelectorAll(".formChallangeOne");
const buttonFormChallengeOne = document.querySelector(".buttonFormChallangeOne");
const ketFormChallengeOne = document.querySelector(".ketFormChallangeOne");
const keyChallengeOne = document.querySelector(".key.keyOne");
const hiddenButton = document.querySelector(".hidden");
const hiddenButtonTwo = document.querySelector(".hiddenTwo");
const hiddenButtonThree = document.querySelector(".hiddenThree");
const hiddenButtonFour = document.querySelector(".hiddenFour");
const klikakuButton = document.querySelector(".klikaku");

keymisteribox[2].addEventListener("focus", () => {
  hiddenButtonThree.style.bottom = "46%";
});

keymisteribox[2].addEventListener("blur", () => {
  hiddenButtonThree.style.bottom = "40%";
});

const kataKunciOne = document.querySelector(".kataKunciOne");
const kataKunciTwo = document.querySelector(".kataKunciTwo");
const kataKunciThree = document.querySelector(".kataKunciThree");
const kataKunciFour = document.querySelector(".kataKunciFour");

buttonFormChallengeOne.addEventListener("click", function (e) {
  let dataNilai = [...formChallengeOne].map((el) => el.value.toLowerCase());
  console.log(dataNilai);
  if (dataNilai.includes("")) {
    ketFormChallengeOne.innerHTML = "Data belum diisi semua";
    ketFormChallengeOne.classList.remove("d-none");
  } else {
    if (dataNilai[0] === "muhamad adi yaksa" && dataNilai[1] === "ngoding" && dataNilai[2] === "ngoding" && dataNilai[3] === "pastel") {
      keyChallengeOne.classList.remove("d-none");
      kataKunciOne.innerHTML = "A";
      formOne.classList.add("d-none");
      ketFormChallengeOne.classList.add("d-none");
      hiddenButton.classList.add("d-none");
      hiddenButtonTwo.classList.remove("d-none");
      klikakuButton.classList.remove("disabled");
    } else {
      ketFormChallengeOne.classList.remove("d-none");
      ketFormChallengeOne.innerHTML = "Data Ada yang salah, intinya ada yg salah wkwkw";
    }
  }
});

const formTwo = document.querySelector(".formTwo");
const formChallengTwo = document.querySelector(".formChallangeTwo");
const buttonFormChallengeTwo = document.querySelector(".buttonFormChallangeTwo");
const ketFormChallengeTwo = document.querySelector(".ketFormChallangeTwo");
const keyChallengeTwo = document.querySelector(".key.keyTwo");

buttonFormChallengeTwo.addEventListener("click", function (e) {
  if (formChallengTwo.value === "abu-abu") {
    keyChallengeTwo.classList.remove("d-none");
    kataKunciTwo.innerHTML = "S";
    formTwo.classList.add("d-none");
    ketFormChallengeTwo.classList.add("d-none");
    hiddenButtonTwo.innerHTML = "Challenge Ketiga? Kata Kunci = Dibalik Ke-tiga";
    hiddenButtonThree.classList.remove("d-none");
  } else {
    ketFormChallengeTwo.classList.remove("d-none");
    ketFormChallengeTwo.innerHTML = "Salah dih warnanya";
  }
});

const formThree = document.querySelector(".formThree");
const formChallengThree = document.querySelector(".formChallangeThree");
const buttonFormChallengeThree = document.querySelector(".buttonFormChallangeThree");
const ketFormChallengeThree = document.querySelector(".ketFormChallangeThree");
const keyChallengeThree = document.querySelector(".key.keyThree");

buttonFormChallengeThree.addEventListener("click", function () {
  if (formChallengThree.value === "love you too") {
    keyChallengeThree.classList.remove("d-none");
    kataKunciThree.innerHTML = "8";
    formThree.classList.add("d-none");
    ketFormChallengeThree.classList.add("d-none");
    hiddenButtonTwo.innerHTML = "Challenge Keempat? Kata Kunci = Elemen Pertama";
    hiddenButtonThree.classList.add("d-none");
    hiddenButtonTwo.classList.remove("d-none");
    hiddenButtonFour.classList.remove("tutup");
  } else {
    ketFormChallengeThree.classList.remove("d-none");
    ketFormChallengeThree.innerHTML = "Masih Salah :)";
  }
});

const formFour = document.querySelector(".formFour");
const buttonFormChallengeFour = document.querySelector(".buttonFormChallangeFour");
const ketFormChallengeFour = document.querySelector(".ketFormChallangeFour");
const keyChallengeFour = document.querySelector(".key.keyFour");

buttonFormChallengeFour.addEventListener("click", () => {
  if (formChallengFour.value !== "") {
    keyChallengeFour.classList.remove("d-none");
    formFour.classList.add("d-none");
    kataKunciFour.innerHTML = "N";

    ketFormChallengeFour.classList.add("d-none");
    hiddenButtonTwo.classList.remove("d-none");
  } else {
    ketFormChallengeFour.classList.remove("d-none");
  }
});
