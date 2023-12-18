console.log("hello world")

let title = document.querySelector('h1');
console.log(title);

title.textContent = 'hello world';

let name = '김가은';
// name에 '김가은'이라는 문자열을 name 변수에 할당한다

// 만약에 네임이 김가은이면
if(name === '김가은'){
  // === : ..어렵다..
  name = '유지은';
}else{
  name = '김가은';
}

console.log(name);


let priceOfBag = 5000
// 가방의 가격 5000원

function showPriceTag(price){
  return price + '원'
}

// {showpricetag안에서 실행될 함수임}
// 함수는 인풋이 있으면 아웃풋이 있어야함
// 문자열은 '' 안에 써주기


// 함수 호출
console.log(showPriceTag(priceOfBag));


// event
let buttonElemnet = document.querySelector("button");
// 버튼이라는 돔..?

function showIsClicked(){
  console.log('클릭됨!!');
}
function showIshovered(){
  console.log("마우스!!")
}

// addEventListner(type, listener)
buttonElemnet.addEventListener("click",showIsClicked)
buttonElemnet.addEventListener("mouseover",showIshovered)


// toggle image 토글 > 껐다켰다하는 느낌
let imgElement = document.querySelector("img");
// document.querySelector("img"); >> 돔임 


function toggleImage() {
  let mySrc = imgElement.getAttribute('src');
  if (mySrc === 'img/loopy_off.jpg'){
    imgElement.setAttribute("src","img/loopy_on.jpg")
  }else{
    imgElement.setAttribute("src","img/loopy_off.jpg")
  }
}

imgElement.addEventListener("click", toggleImage);