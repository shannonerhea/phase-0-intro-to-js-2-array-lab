// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
};
function destructivelyPrependCat(name) {
    cats.unshift(name);
};
function destructivelyRemoveLastCat() {
    cats.pop();
};
const destructivelyRemoveFirstCat = () => { cats.shift()};

const appendCat = (name) => {
    const newCatsArr = [...cats, name];
    return newCatsArr;
};
function prependCat(name) {
    return prependCat = [name, ...cats];
   
};
const removeLastCat = () => {
    return cats.slice(0, -1);
};
const removeFirstCat = () => {
    return cats.slice(1);
};
