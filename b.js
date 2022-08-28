const btn = document.getElementById("btn");
const container = document.querySelector(".cont");
const autor = document.getElementById("autor");
const pageNo = document.getElementById("num");
const book = document.getElementById("book");
const checkbox = document.getElementById("check");

function consturactorr(autorName, bookName, pageNo) {
  this.autorName = autorName;
  this.bookName = bookName;
  this.pageNo = pageNo;
}

function getInputFromForm() {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var autornamee = autor.value;
    var bookname = book.value;
    var pageno = pageNo.value;

    var b = new consturactorr(autornamee, bookname, pageno);
    let arryOfObj = [];
    arryOfObj.push(b);

    cc(arryOfObj[arryOfObj.length-1]);
    pageNo.value=null;
    book.value=null;
    autor.value=null;
    checkbox.checked=false;
  });
}
//



function cc(xx) {
  let x = document.createElement("div");
  x.classList.add("a");
  let y = document.createElement("div");
  y.classList.add("b");

  let z = document.createElement("div");
  z.classList.add("b");
  let zz = document.createElement("div");
  zz.classList.add("b");
  let zzzz = document.createElement("div");
  zzzz.classList.add("b");
  let zzz = document.createElement("button");

  z.classList.add("b");
  x.appendChild(y).innerText = `autor name=${xx.autorName}`;
  x.appendChild(z).textContent = `book:${xx.bookName}`;
  x.appendChild(zz);
  x.appendChild(zzzz);
  if (checkbox.checked == true) {
    zzzz.innerText = "read";
  } else {
    zzzz.innerText = "not read";
  }
  zzzz.addEventListener('click',function(e){
    if(e.target.innerText=='read'){
e.target.innerText='not read'
    }
    else if(e.target.innerText=='not read'){
      e.target.innerText='read'
    }
  })
 
  x.appendChild(zzz);

  container.appendChild(x);
  zzz.addEventListener("click", function () {
    zzz.parentElement.remove();
  });
}
getInputFromForm();

if(zzzz!=undefined){
  
}