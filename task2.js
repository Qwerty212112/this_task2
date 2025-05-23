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
 const newObj = {
   ...this,
   isDomestic: isDomestic,
 }
 console.log(newObj)
 console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
 return newObj
 }


const newFunction = makeDomestic.bind(dog,true)
newFunction()

makeDomestic.call(bird,false)
makeDomestic.apply(bird,[false])
