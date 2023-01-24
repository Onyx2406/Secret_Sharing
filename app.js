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


/*The code creates a Rich Text Editor by using the ClassicEditor library. It creates an instance of the editor by calling the create() method on the ClassicEditor object and passing in a reference to the HTML element with the class my_editor. This will cause the editor to be displayed on the page in the element with the class my_editor.

When the form is submitted, an event listener is added to the form element to listen for the submit event. When the event is triggered, the function passed to the event listener is executed. The first thing that happens inside the function is that the default form submission behavior is prevented by calling the preventDefault() method on the event object passed to the function. This is done so that the form doesn't submit and refresh the page.

The function then selects the text editor element using document.querySelector('.my_editor') and checks if it's empty by comparing its value property to an empty string. If it is empty, an error message is displayed using the SweetAlert library by calling the swal() function and passing in the necessary options.

If the text editor is not empty, the value entered by the user is encoded to base64 using the btoa() method, which is a built-in JavaScript function for encoding strings. The encoded value is then used to create a new shareable link by appending it to the current URL as a hash fragment. The new shareable link is created by concatenating the current URL with the encoded value, using the ${} template literals.

The code then creates a new element with an i tag and assigns it the class fa-solid, fa-clipboard to represent a clipboard icon. This element is added to the sweet alert modal with title, text and content options.

When the user clicks on the clipboard icon, the navigator.clipboard.writeText() method is called and passed the shareable link as an argument. This causes the shareable link to be copied to the clipboard. A success message is then displayed using the Toastify library by calling the showToast() method on a Toastify object that is configured with the necessary options.

Finally, the form's input is cleared by setting the value property of the text editor element to an empty string.

The code also includes a section that checks if the current URL contains a hash fragment. If it does, the code uses the atob() method to decode the hash fragment, which is assumed to be a base64 encoded string. The decoded message is then added to the HTML element with the class messagePara and the class form-box is hidden and class dispMessage is displayed.*/
