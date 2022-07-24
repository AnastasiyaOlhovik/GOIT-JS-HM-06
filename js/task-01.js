const listEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listEl.length}`)



const array = [...listEl]
    .map(
        (category) =>
            `Category: ${category.children[0].textContent} \nElements: ${category.children[1].children.length}`
    )
    .join("\n");

console.log(array);