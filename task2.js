const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    }
 }

 function makeDomestic (isDomestic) {
 this.isDomestic = isDomestic
 console.log(this)
 console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
 return this
 }

const newFunction = makeDomestic.bind(dog,true)
newFunction()

makeDomestic.call(bird,false)
makeDomestic.apply(bird,[false])
