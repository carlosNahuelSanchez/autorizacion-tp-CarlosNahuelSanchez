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

export const addTodos = () => {

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

export const updateTodos = (id) => {

    const todoNewName = document.getElementById("todoNewName").value.trim()

    const todoNewState = document.getElementById("todoNewState").checked

    if (!todoNewName) {
        return alert("Completa el nombre")
    }

    try {
        return fetch("http://localhost:4000/todos"+`/${id}`,{
            method:"PUT",
            credentials: "include",
            body: JSON.stringify({todoNewName,todoNewState}),
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    } catch (error) {
        console.error("Error al actualizar tarea", error)
    }
}