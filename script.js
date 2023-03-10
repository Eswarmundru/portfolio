fetch("https://upadhayay.github.io/db.json")
.then(function (response) {
    return response.json();
})
.then(function (db) {
    let placeholder = document.getElementById("books_list");
    let output = "";
    for (let i = 0; i < db.books.length; i++) {
        output += `
        <div class="book">
            <h2>Title:${db.books[i].title} (${db.books[i].year})</h2>
            <p>published: ${db.books[i].published}</p>
            <p>year: ${db.books[i].year}</p>
        </div>
                `;
    }
    placeholder.innerHTML = output;
});