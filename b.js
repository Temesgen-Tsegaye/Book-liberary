const btn = document.getElementById("btn");
const container = document.querySelector(".cont");
const autor = document.getElementById("autor");
const pageNo = document.getElementById("num");
const book = document.getElementById("book");

function consturactorr(autorName, bookName, pageNo) {
  this.autorName = autorName;
  this.bookName = bookName;
  this.pageNo = pageNo;
}

function getInputFromForm(){
  btn.addEventListener('click',function(e){
    e.preventDefault();
    var autornamee=autor.value;
    var bookname=book.value;
    var pageno=pageNo.value
    
    var b= new consturactorr(autornamee,bookname,pageno)
 let arryOfObj=[];
 arryOfObj.push(b)
 
 cc(arryOfObj[arryOfObj.length-1]);

  })
}
// 

getInputFromForm()

function cc(xx) {
  
 
    let x = document.createElement("div");
    x.classList.add("a");
    let y = document.createElement("div");
    y.classList.add("b");

    let z = document.createElement("div");
    let zz=document.createElement('div');
    let zzz=document.createElement('button')
    
    z.classList.add("b");
    x.appendChild(y).innerText =`autor name=${xx.autorName}`;
    x.appendChild(z).textContent =`book:${xx.bookName}`;
    x.appendChild(zz);
    x.appendChild(zzz);
  
    container.appendChild(x);
    zzz.addEventListener('click',function(){
      zzz.parentElement.remove();
    })
  
  

}
