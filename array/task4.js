//4 Task
function changeCollection(...args) {
    let resultArray = [];
    for (let i = 0; i < args.length; i++) {
        args[i].splice(0, 1);
        console.log(args[i]);
        resultArray[i] = args[i];
    }
    console.log(resultArray);
}

changeCollection([1, 2, 3], ['a', 'b', 'c']);