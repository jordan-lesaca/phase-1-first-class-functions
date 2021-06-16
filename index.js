function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function ftion(){}
}

function returnsAnAnonymousFunction(){
    return () => {}
}
