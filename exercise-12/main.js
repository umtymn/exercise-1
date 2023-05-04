// Bir boş dizi oluşturun
const tasks = [];

// DOM elemanlarına erişmek için id'leri kullanın
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// addTask() fonksiyonunu tanımlayın
function addTask() {
  // Ekleme kutusundan metni alın
  const newTask = taskInput.value;

  // Metnin boş olup olmadığını kontrol edin
  if (newTask !== "") {
    // Görevleri diziye ekle
    tasks.push(newTask);

    // Görevleri göstermek için listeyi güncelle
    taskList.innerHTML = "";

    tasks.map((item)=>taskList.innerHTML+=`<li>${item}</li>`)

    // Ekleme kutusunu temizle
    taskInput.value = "";
  }
}

// sortTasks() fonksiyonunu tanımlayın
function sortTasks() {
  // tasks dizisini alfabetik olarak sıralayın
  tasks.sort();

  // Görevleri göstermek için listeyi güncelle
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    taskList.innerHTML += "<li>" + tasks[i] + "</li>";
  }
}


