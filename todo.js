todo=[];
let req=prompt("Please enter your request:");
while (true){
    if (req =="quit"){
        console.log("guitting the app");
        break;
    }
    if(req=='list'){
        console.log("-----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-----------------");
    }else if(req=="add"){
        let task=prompt("enter the task that you want to enter");
        todo.push(task);
        console.log("Added to todo")
    }
}