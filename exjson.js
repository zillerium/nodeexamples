const fs = require('fs')

const book = {
    title: "book title",
    author: "trevor oakley"
}

book.title = "harry potter";
book.author = "jk rowling";

const strJson = JSON.stringify(book);
console.log(strJson);

const jsonobj = JSON.parse(strJson);
console.log(jsonobj.title);
const notes = () =>  {
    fs.writeFileSync("myjson.json", strJson);
    const buf = fs.readFileSync("myjson.json");
    console.log(buf.toString());
    return buf.toString();
}

console.log(notes())