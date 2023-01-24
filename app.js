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


/*This code creates a Rich Text Editor using the ClassicEditor library, which is then displayed on the page using the create() method and passing in a reference to the HTML element with the class "my_editor".

When the form is submitted, a submit event listener is triggered which prevents the default form submission behavior and checks if the text editor is empty. If it is, an error message is displayed using the SweetAlert library.

If the text editor is not empty, the value is then encoded using the btoa() method which encodes a string in base-64. This encoded value is then appended to the current URL as a hash fragment, creating a new shareable link.

The shareable link is then copied to the clipboard when the user clicks on the clipboard icon (created as a copyIcon element) using the navigator.clipboard.writeText() method. A success message is then displayed using the Toastify library.

Finally, the form's input is cleared and the decrypted message is displayed on the page if a hash fragment exists in the current URL using the atob() method which decodes a base-64 encoded string. */
