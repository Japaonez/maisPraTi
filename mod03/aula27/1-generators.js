function* myGenerator(){
    let i = 0
    while(true){
        yield i++
    }
}

let generator = myGenerator()
let generatorValue = generator.next()

console.log(generatorValue)