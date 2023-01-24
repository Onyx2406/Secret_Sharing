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



