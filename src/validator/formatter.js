const Trim= function(){
    const a = " functionUp "
    console.log(a)
    const b = a.trim();
    console.log(b)

}
const changetoLowerCase= function(){
    const c = "All Letters In Lower Case"
    console.log(c)
    const d = c.toLowerCase();
    console.log(d)

}
const changeToUpperCase= function(){
    const e = "All Letters In Upper Case"
    console.log(e)
    const f = e.toUpperCase();
    console.log(f)

}
module.exports.Trim = Trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase