export default {
    getAll : ()=>  fetch("http://localhost:8080/api/todos", {mode: 'cors'}),
    addNewTodoItem: (newTodoItem)=> fetch("http://localhost:8080/api/todos", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(newTodoItem)
    }),
    patchExistingTodoItem: (id, status)=> fetch("http://localhost:8080/api/todos/" + id, {
        mode: 'cors',
        method: 'PATCH',
        body: JSON.stringify({
            "status": status
        }),
        headers: new Headers({'Content-Type': 'application/json'})
    })
}