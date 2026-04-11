todo=[];
let req=prompt("Please enter your request:");
while (true){
    if (req =="quit"){
        console.log("guitting the app");
        break;
    }
    if(req=='list'){
        console.log("-----------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    }else if(req=="add"){
        let task=prompt("enter the task that you want to enter");
        todo.push(task);
        console.log("Added to todo")
    }else if (req=="delete"){
        let idx=prompt("Enter the index that you want to remove");
        todo.splice(idx,1);
        console.log("task deleted from todo list")
    }else{
        console.log("Wrong request");
    }
    req=prompt("Please enter your request:");
}