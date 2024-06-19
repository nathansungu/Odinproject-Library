const myLibrary = [];

function Books(title, author,pages,ifread){
    this.title= title;
    this.author =author;
    this. pages = pages;
    this.ifread =ifread;
    
}


Books.prototype.info = function() {
    return `Title; ${this.title}, Author:${this.author}, Pages:${this.pages}, Ifread:${this.ifread}`;
};
 function addBookToLibrary(title,author, pages,ifread){
    const newBook = new Books(title,author,pages,ifread);
    myLibrary.push(newBook);
    }


    

function Printl(){
    const container = document.getElementById('container');
    container.innerHTML = '';

    myLibrary.forEach(book => {
        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();
        container.appendChild(bookInfo);
    });
}
function inputform(){
    const inputform = document.getElementById('inputform');
    inputform.innerHTML = '';

    const form = document.createElement('form') 
    inputform.appendChild(form);   

    //book title
    const titlelabel = document.createElement('label')
    titlelabel.htmlfor = 'title';
    titlelabel.textContent = 'Title';
    form.appendChild(titlelabel)
    form.appendChild(document.createTextNode(' '));
    

    const titleinput = document.createElement('input')
    titleinput.type = 'text';
    titleinput.id = 'title';
    titleinput.name = 'title';
    titleinput.required = true;

    form.appendChild(titleinput);
    form.appendChild(document.createElement('br'))
    form.appendChild(document.createElement('br'))


    // book author
    const authorlabel = document.createElement('label')
    authorlabel.htmlfor ='auther'
    authorlabel.textContent = 'Auther'
    form.appendChild(authorlabel)
    form.appendChild(document.createTextNode(' '));

    const authorinput = document.createElement('input');
    authorinput.type = 'text';
    authorinput.id = 'author';
    authorinput.name = 'author';
    authorinput.required = true;

    form.appendChild(authorinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // book pages
    const pageslabel = document.createElement('label');
    pageslabel.htmlFor = 'pages';
    pageslabel.textContent= 'Pages';
    form.appendChild(pageslabel);
    form.appendChild(document.createTextNode(' '));

    const pagesinput = document.createElement('input')
    pagesinput.type = 'text';
    pagesinput.id = 'pages';
    pagesinput.name = 'pages';
    pagesinput.required = true;
    form.appendChild(pagesinput)
    form.appendChild(document.createElement('br'))
    form.appendChild(document.createElement('br'))

    // wheather it's read
    const ifreadlabel = document.createElement('label');
    ifreadlabel.htmlfor = 'ifread'
    ifreadlabel.textContent = 'IfRead'
    form.appendChild(ifreadlabel);
    form.appendChild(document.createTextNode(' '))

    const ifreadSelect = document.createElement('Select');
    ifreadSelect.id = 'ifread';
    ifreadSelect.name = 'ifread';
    ifreadSelect.required = true;
    const optionYes = document.createElement('option');
    optionYes.value = 'yes';
    optionYes.textContent = 'yes';
    ifreadSelect.appendChild(optionYes);
    const optionNo = document.createElement('option');
    optionNo.value = 'no';
    optionNo.textContent = 'no';
    ifreadSelect.appendChild(optionNo);
    form.appendChild(ifreadSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    

    // submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    submitButton.onclick = function() {
        addBookToLibrary(
            document.getElementById('title').value,
            document.getElementById('author').value,
            document.getElementById('pages').value,
            document.getElementById('ifread').value
        );
    };
    form.appendChild(submitButton);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    
};