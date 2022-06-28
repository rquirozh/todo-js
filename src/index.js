
import './styles.css';

//importacion varias clases
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));


//const newTodo = new Todo('Aprende CSMRE');

//todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);


//aplicar como objetos el guardado.


/*
const tarea = new Todo('Aprender Javascript 1.0');
todoList.nuevoTodo(tarea);


console.log(todoList);

crearTodoHtml(tarea);

//almacena variable en local storage
localStorage.setItem('mi-key','ABCD1234');


//elimina el localstorage en 1 segundo por key
setTimeout( () => {
    localStorage.removeItem('mi-key');
},1500);*/