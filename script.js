'use script';
// element to be selected
const inputWidthEle = document.querySelector("#width-slide");

const inputRadiusEle = document.querySelector("#radius-slide");

const inputColorEle = document.querySelector("#color-box");

const inputPaddingEle = document.querySelector("#padding-slide");

const inputBlurEle = document.querySelector("#blur-slide");

const inputImageBoxEle = document.querySelector(".image");

const inputImgEle = document.querySelector(".image-slide");

inputWidthEle.addEventListener('input',()=>{
  inputImageBoxEle.style.width = inputWidthEle.value + "rem";
})

inputRadiusEle.addEventListener('input',()=>{
  inputImgEle.style.borderRadius = inputRadiusEle.value + "px";
})

inputColorEle.addEventListener('input',()=>{
  // console.log(inputColorEle.value)
  inputImgEle.style.borderColor = inputColorEle.value;
} )

inputPaddingEle.addEventListener('input',()=>{
  inputImgEle.style.borderWidth = inputPaddingEle.value + "px";
})

inputBlurEle.addEventListener('input',()=>{
  console.log(inputBlurEle.value)
  inputImageBoxEle.style.filter = `blur(${inputBlurEle.value+"px"})`;
})