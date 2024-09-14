//list etiketi olan elementlere ulaşıldı ve "x" şeklinde span eklendi
var li = document.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) { 
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li[i].appendChild(span);
  }

//mevcut elementleri döngü ile kapatma işlemi
var closer = document.getElementsByClassName("close");
for (var i = 0; i < closer.length; i++) {
  closer[i].onclick = function() {
    var todoobject = this.parentElement;
    todoobject.style.display = "none";
  };
}

//yeni ekleme yapılırken span ile birlikte list ögeleri oluşturuldu
function newElement() {
    var inputValue = document.getElementById("task").value.trim();
    if (inputValue === "") {
      showErrorToast();
      closeErrorToast();
    } 
    else {
      var li = document.createElement("li");
      var text = document.createTextNode(inputValue);
      li.appendChild(text);
      document.getElementById("list").appendChild(li);
      document.getElementById("task").value = ""; 
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      span.onclick = function() {
        var todoobject = this.parentElement;
        todoobject.style.display = "none";
      };
      showSuccessToast();
      closeSuccessToast();      
    }
  }

//hata mesajı gösterme fonksiyonu
function showErrorToast() {
  var toast = document.getElementById("liveToastError");
  toast.classList.remove("hide");
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 5000);
}

//hata mesajını manuel kapatma fonksiyonu
function closeErrorToast() {
  var btn = document.getElementById("xxx")
  var toast = document.getElementById("liveToastError");  
  btn.onclick = function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    };
}

//eklendi mesajı gösterme fonksiyonu
function showSuccessToast() {
  var toast = document.getElementById("liveToast");
  toast.classList.remove("hide");
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 5000);
}

//eklendi mesajını manuel kapatma fonksiyonu
function closeSuccessToast() {
  var btn2 = document.getElementById("yyy")
  var toast = document.getElementById("liveToast");  
  btn2.onclick = function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    };
}

//geçişli yapıldı işaretleme fonksiyonu
var toDoList = document.querySelector("ul");
toDoList.addEventListener("click", checkedFunc);
function checkedFunc (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}








