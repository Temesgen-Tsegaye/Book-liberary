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
    var autornamee = autor.value.checkValidity();
    var bookname = book.value.checkValidity();
    var pageno = pageNo.value.checkValidity();

    var b = new consturactorr(autornamee, bookname, pageno);
    let arryOfObj = [];
    arryOfObj.push(b);

    cc(arryOfObj[arryOfObj.length - 1]);
    pageNo.value = null;
    book.value = null;
    autor.value = null;
    checkbox.checked = false;
  });
}


function cc(xx) {
  let card = document.createElement("div");
  card.classList.add("card");
  let autorNameFild = document.createElement("div");
  autorNameFild.classList.add("card-child"); //x==card    y==autornamefild z==bookNamefild

  let bookNmeFild = document.createElement("div");
  bookNmeFild.classList.add("card-child");
  let pageNoFild = document.createElement("div");
  pageNoFild.classList.add("card-child");
  let radioDisplayer = document.createElement("button");
  radioDisplayer.classList.add("radio-displayer");
  let DeleteButton = document.createElement("button");
  DeleteButton.classList.add("btn");

  card.appendChild(autorNameFild).innerText = `Autor name:${xx.autorName}`;
  card.appendChild(bookNmeFild).textContent = `Book:${xx.bookName}`;
  card.appendChild(pageNoFild).innerText = `No of Page:${xx.pageNo}`;
  card.appendChild(radioDisplayer);

  if (checkbox.checked == true) {
    radioDisplayer.innerText = "Read";
    radioDisplayer.style.backgroundColor = "green";
  } else {
    radioDisplayer.innerText = "Not read";
    radioDisplayer.style.backgroundColor = "red";
  }

  radioDisplayer.addEventListener("click", function (e) {
    if (radioDisplayer.innerText =="Read") {
      radioDisplayer.innerText ="Not read";
      radioDisplayer.style.backgroundColor='red'
    } else if (radioDisplayer.innerText == "Not read") {
      radioDisplayer.innerText = "Read";
      radioDisplayer.style.backgroundColor='green'
    }
  });
  card.appendChild(DeleteButton).innerText = "Remove";

  container.appendChild(card);
  DeleteButton.addEventListener("click", function () {
    DeleteButton.parentElement.remove();
  });
}
getInputFromForm();
