const btn = document.getElementById('btn');

btn.addEventListener('click', submit);

function submit(event) {

    const pattern = document.getElementById('regexInput').value;
    const textInput = document.getElementById('textInput').value;

    const output = document.getElementById('output');
    output.value = '';
    
    let regex = new RegExp(pattern, 'i');
    let result = regex.exec(textInput);
    console.log(result);

    result.forEach((match) => {
        output.value += "\n " + match;
    })
}

