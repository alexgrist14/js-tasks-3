async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
   return wait().then(result=> console.log(result))
}

console.log(f());