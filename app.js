// implementing rich text editor
ClassicEditor.create(document.querySelector('.my_editor'));


document.querySelector('form').addEventListener('submit', (e) => {

    e.preventDefault();

    const descriptionInput = document.querySelector('.my_editor');

    if (descriptionInput.value === '') {

        return swal("Empty Field", "Please enter something in the textarea", "error");

    }

    const encodedDescription = window.btoa(descriptionInput.value);

    const shareableLink = `${window.location}#${encodedDescription}`;


    const copyIcon = document.createElement('i');

    copyIcon.classList.add('fa-solid');

    copyIcon.classList.add('fa-clipboard');


    copyIcon.addEventListener('click', () => {

        navigator.clipboard.writeText(shareableLink);

        Toastify({
            text: "link copied successfully to clipboard",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #44be56, #3fbc66, #3fba74, #43b880, #4ab58a)",
                fontSize: '1.9rem'
            },
            onClick: function () { }
        }).showToast();

    });


    swal({
        title: 'Here is your link',
        text: `${shareableLink}`,
        content: copyIcon
    });

    descriptionInput.value = '';


});



const { hash } = window.location;



    const decryptedMessage = window.atob(hash.replace('#', ''));

    if (decryptedMessage) {

        document.querySelector('.form-box').classList.add('hide');
    
        document.querySelector('.dispMessage').classList.remove('hide');
    
        document.querySelector('.messagePara').innerHTML = decryptedMessage;
    
    }


/*This code is using the ClassicEditor library to create a rich text editor on a web page, and then adding event listeners to the form element that surrounds the text area.

The first event listener is added to the form's submit button, when the form is submitted, it prevents the default event from occurring and checks if the input field is empty, if it is, it will show an error message. If it is not empty, it will take the input's value and encode it using the btoa() function, which converts the input value to base64 encoded ASCII.

It then creates a shareableLink variable by concatenating the current URL and the encoded value, and creates a new HTML element of type "i" and assigns classes to it.

The next event listener is added to this newly created element, which listens for a click event and uses the clipboard API to write the shareableLink to the clipboard. It also uses the Toastify library to display a message saying the link has been copied to the clipboard.

Then, it shows a SweetAlert (swal) dialog box with the shareableLink as the text, and the newly created "i" element as the content of the dialog box.

After this, the input field is cleared.

Lastly, it is checking if there is a hash in the URL, if so, it will decode the hash using the atob() function, which converts the base64 encoded ASCII to the original string. */
