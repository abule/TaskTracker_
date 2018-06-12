window.addEventListener("load",function(){TaskApp.init()});var TaskApp={tasks:[{name:"Test Task #1",date:"12/01/2012",assigned:"John Doe"},{name:"Test Task #2",date:"12/02/2012",assigned:"John Doe"},{name:"Test Task #3",date:"12/03/2012",assigned:"John Doe"},{name:"Test Task #4",date:"12/04/2012",assigned:"John Doe"},{name:"Test Task #5",date:"12/05/2012",assigned:"John Doe"},{name:"Test Task #6",date:"12/06/2012",assigned:"John Doe"},{name:"Test Task #7",date:"12/07/2012",assigned:"John Doe"}],init:function(){this.tasksTable=document.getElementById("tasksTable"),this.taskNameInput=document.getElementById("taskName"),this.taskDateInput=document.getElementById("taskDate"),this.assignedToInput=document.getElementById("assignedTo"),this.submitButton=document.getElementById("submitTask"),this.populateTasks(),this.submitListener()},populateTasks:function(){for(var t=0;t<this.tasks.length;t++){var e=this.createRow(this.tasks[t]);this.tasksTable.appendChild(e)}},submitListener:function(){this.submitButton.addEventListener("click",function(t){t.preventDefault();var e=this.getNewTask();this.validateInput(e)&&(this.taskNameInput.style["box-shadow"]="none",this.assignedToInput.style["box-shadow"]="none",this.addTask(e))}.bind(this))},getNewTask:function(){var t={};return t.name=this.taskNameInput.value,t.date=this.dateFormat(this.taskDateInput.value),t.assigned=this.assignedToInput.value,t},addTask:function(t){this.tasks.unshift(t),this.appendToDOM(t)},appendToDOM:function(t){var e=this.createRow(t),s=tasksTable.firstElementChild;this.tasksTable.insertBefore(e,s),this.taskNameInput.value="",this.taskDateInput.value="",this.assignedToInput.value=""},createRow:function(t){var e="<td>"+t.name+"</td><td>"+t.date+"</td><td>"+t.assigned+"</td>",s=document.createElement("tr");return s.setAttribute("tabindex","0"),s.innerHTML=e,s},dateFormat:function(t){var e,s=(e=isNaN(Date.parse(t))?new Date:new Date(t)).getMonth()+1;s=s<10?"0"+s:s;var a=e.getDate();return s+"/"+(a=a<10?"0"+a:a)+"/"+e.getFullYear()},validateInput:function(t){var e=!0;return t.name||(e=!(this.taskNameInput.style["box-shadow"]="0 0 3px red")),t.assigned||(e=!(this.assignedToInput.style["box-shadow"]="0 0 3px red")),e}};