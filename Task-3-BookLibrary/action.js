function searching()
{
    let filter = document.getElementById('searchInput').value.toUpperCase();

    let Booklist1 = document.querySelectorAll('.bookimg');

    
    let list1 = document.getElementsByTagName('p');

    for(var i = 0; i<=list1.length; i++)
        {
            let a = Booklist1[i].getElementsByTagName('p')[0]

            let value = a.innerText || a.textContent

             if(value.toUpperCase().indexOf(filter) > -1)
                {
                    Booklist1[i].style.display = ''
                }else
                {
                    Booklist1[i].style.display = 'none';
                }
        }
    

}

 // Function to borrow a book
 function borrowBook(bookId) {
    // Get the book details
    const bookElement = document.getElementById(bookId);
    const bookTitle = bookElement.querySelector('p').textContent;
    
    // Get the current date
    const borrowDate = new Date().toLocaleDateString();

    // Create a borrow record
    const borrowRecord = {
        title: bookTitle,
        date: borrowDate
    };

    // Retrieve the current history from localStorage
    let borrowHistory = JSON.parse(localStorage.getItem('borrowHistory')) || [];

    // Add the new record to the history
    borrowHistory.push(borrowRecord);

    // Save the updated history back to localStorage
    localStorage.setItem('borrowHistory', JSON.stringify(borrowHistory));
}






// Function to display borrow history
function displayBorrowHistory() {
    const historyList = document.getElementById('borrow-history');
    
    // Retrieve the history from localStorage
    let borrowHistory = JSON.parse(localStorage.getItem('borrowHistory')) || [];
    
    // Clear the current list
    historyList.innerHTML = '';
    
    // Loop through the borrow history and display each record
    borrowHistory.forEach(record => {
        const li = document.createElement('li');
        li.textContent = `${record.title} - Borrowed on: ${record.date}`;
        historyList.appendChild(li);
    });
}

// Call the function to display the borrow history when the page loads
displayBorrowHistory();

