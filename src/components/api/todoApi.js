export default {
    getAll : ()=>  fetch("http://localhost:8080/api/todos", {mode: 'cors'})
}