var COLUMN_TYPE=['sortable-todo','sortable-doing','sortable-done'];

var DB ={

  getData: function () {
    if(typeof(Storage) !== "undefined" ){
      var data;

      try{
        data =JSON.parse(localStorage.getItem('list')) || {};
      }catch (e) {
        data = {}
      }

      return data;
    }else{
      alert("Sorry! No Web Storage support..")
      return {};
    }
  },

  setData: function (data) {
      localStorage.setItem('list', JSON.stringify(data));
  }

}

var list =DB.getData();

var kanban = {
  newJob:function (e,title, input) {
    var jobName =$(input).val();

    var event =window.e || e;

    if(event.keyCode == 13 && jobName !== ''){
      // update DOM
    if(!list[title]){
      list[title]= [];
    }
    list[title].push(jobName);
    DB.setData(list);

    this.addJobToList(title, jobName)
      // Reset Input
    }
  },

  addJobToList: function (type , jobName) {
    var item = '<div class="collection-item">' +
      ' <span>'+jobName+'</span>' +
      ' <span class="del-badge modal-trigger" data-target="modal-confirm" onclick="kanban.delete(this)">' +
      '<i class="tiny material-icons">delete</i>' +
      '</span> ' +
      '</div>'

    $('#' + type).append(item);
  },

  delete: function (span) {
    var item= $(span).parent();
    var btn = $('#btn-delete');
    var confirm = $('#modal-confirm');

    confirm.modal();

    btn.off('click');

    btn.on('click', function () {

      var columnType = item.parent().attr('id')
      var itemPosition = $('#' + columnType + ' .collection-item').index(item);

      list[columnType].splice(itemPosition,1);
      DB.setData(list);

      item.remove()
      confirm.modal('close');
    })

  }
}


$( function() {

  COLUMN_TYPE.forEach(function (type) {
    var columnType =list[type] || [];

    columnType.forEach(function (jobName) {
      kanban.addJobToList(type, jobName);
    })
  })

  $( "#sortable-todo, #sortable-doing, #sortable-done" ).sortable({
    connectWith: ".connectedSortable",
    placeholder: "ui-state-highlight",

    start: function (event,ui) {

      $(ui.item[0]).addClass('dragging')

      console.log(ui.item.oldColumnType = ui.item[0].parentElement.getAttribute('id'))
      ui.item.oldColumnType = ui.item[0].parentElement.getAttribute('id')

      ui.item.oldColumposition = ui.item.index()

    },

    stop: function (event,ui) {
      $(ui.item[0]).removeClass('dragging')

      var item =ui.item;
      var oldColumnType =item.oldColumnType;
      var oldItemPosition = item.oldColumposition;
      var newColumnType = item[0].parentElement.getAttribute('id');
      var newItemPosition =item.index();

      // remove item from old position

      list[oldColumnType].splice(oldItemPosition, 1)

      // add item to the new position

      list[newColumnType].splice(newItemPosition, 0, item.text());

      // store data to localstorage

      DB.setData(list);
    }
  });
} );
