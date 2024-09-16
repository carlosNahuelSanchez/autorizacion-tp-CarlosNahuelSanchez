export const deleteTodos = (id) => {
    try {
        return fetch("http://localhost:4000/todos"+`/${id}`, {
            method: "DELETE",
            credentials: "include"
        },
    );
    } catch (error) {
        alert("No se pudo eliminar")
    }
}

export const addTodos = (e) => {

    e.preventDefault();

    const todoName = document.getElementById("todoName").value.trim()

    const todoState = document.getElementById("todoState").checked

    if (!todoName) {
        return alert("Completa el nombre")
    }

    try {
        return fetch("http://localhost:4000/todos",{
            method:"POST",
            credentials: "include",
            body: JSON.stringify({todoName,todoState}),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.error("Error al agregar tarea", error)
    }
    
} 