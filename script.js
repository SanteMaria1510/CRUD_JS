
var app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + " 🤒 " + this.tasks[i] + '</td>';
        //creation des boutons modifier et supprimer
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Modifier</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Supprimer</button></td>';
        data += '</tr>';
      }
      
    }
    
   

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  //Ajout de patient
  this.Add = function () {
    el = document.getElementById('add-patient');
    // Get the value
    var task = el.value;

    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  //modification des informations d'un patient
  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    // Affichage des valeurs
    el.value = this.tasks[item];
    // champ d'affichage
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // obtenir la valeur à enregistrer
      var task = el.value;

      if (task) {
        // edition de la valeur
        self.tasks.splice(item, 1, task.trim());
        // affichage de la nouvelle liste
        self.FetchAll();
        //Masquer le champ
        CloseInput();
      }
    }
  };

  //suppression d'un patient
  this.Delete = function (item) {
    // suppression de sa ligne
    this.tasks.splice(item, 1);
    // Afficher la nouvelle liste apres suppression

    this.FetchAll();
  
  };
  // if (onclick==this.Delete){
  //   confirm("Confirmez-vous la suppression des informations de ce patients ?") ;}


  ///affichage du nombre de patients restants
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'patients';
//s'il y'a un patient sur la liste
    if (data) {
        if(data ==1){
            name = "patient(s)"
        }
        // s'il y'a plus de 1 an patient,on incremente le nombre
      el.innerHTML = "🤒" +data + ' ' + name ;
    } 
    //sinon s'il n'y a plus de patients ,on affiche pas de patient restant
    else {
      el.innerHTML = 'Pas de  ' + "🤒 " + name + " en attente ";
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}