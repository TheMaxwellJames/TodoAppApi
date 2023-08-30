const Todo = require("../models/todoModel");


const postTodo = async(req, res) =>{
    try {
        console.log(req.params.todo);
        const success = await Todo.create({todo: req.params.todo})
        if(success) {
            res.status(200).send({'message': 'Todo Created....'})
        } else {
            res.status(400).send({'message': 'Not Created'})
        }
    } catch (err) {
        console.log(err);
    }
}


const updateTodo = async(req, res) =>{
    try {
        console.log(req.params.updatedtodo);
        const success = await Todo.findByIdAndUpdate(req.params.id, {todo: req.params.updatedtodo})
        if(success) {
            res.status(200).send({'message': 'Todo Updated....'})
        } else {
            res.status(400).send({'message': 'Not Updated'})
        }
    } catch (err) {
        console.log(err);
    }
}



// const deleteTodo = async(req, res) =>{
//     try {
//         const success = await Todo.findByIdAndDelete(req.params.id)
//         if(success){
//             res.status(200).send({"massage": "Todo Deleted...."})
//         }
//         res.status(400).send({"massage": "NOT Deleted...."})

//     } catch (err) {
//         console.log(err);
//     }
// }


const deleteTodo = async (req, res) => {
    try {
        const success = await Todo.findByIdAndDelete(req.params.id);
        if (success) {
            res.status(200).send({"message": "Todo Deleted...."});
        } else {
            res.status(400).send({"message": "Todo not found or couldn't be deleted."});
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({"message": "An error occurred."});
    }
}


const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        if (todos.length > 0) {
            res.status(200).send({ todos, "message": "OK" });
        } else {
            res.status(404).send({ "message": "No todos found." });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ "message": "An error occurred." });
    }
}







module.exports = {
    postTodo,
    updateTodo,
    deleteTodo,
    getTodo
}