const tips1 = `<h3>Basic Regex Operators</h3>
                    <li>. (Dot): Matches any single character except newline characters.</li>
                    <li>^ (Caret): Matches the start of the string.</li>
                    <li>$ (Dollar): Matches the end of the string.</li>
                    <li>* (Asterisk): Matches zero or more occurrences of the preceding element.</li>
                    <li>+ (Plus): Matches one or more occurrences of the preceding element.</li>
                    <li>? (Question mark): Matches zero or one occurrence of the preceding element.</li>
                    <li>| (Pipe): Acts as a logical OR between expressions.</li>
                    <li>[...] (Character class): Matches any one character in the brackets.</li>
                    <li>[^...] (Negated character class): Matches any one character not in the brackets.</li>
                    <li>{n} (Curly brackets): Matches exactly n number of occurrences of the preceding element.</li>
                    <li>{n,}: Matches n or more occurrences of the preceding element.</li>
                    <li>{n,m}: Matches between n and m occurrences of the preceding element.</li>`;


const tips2 = `<h3>Special Character Classes</h3>
                    <li>\\d: Matches any digit (equivalent to [0-9]).</li>
                    <li>\\D: Matches any non-digit character (equivalent to [^0-9]).</li>
                    <li>\\w: Matches any alphanumeric character (equivalent to [a-zA-Z0-9_]).</li>
                    <li>\\W: Matches any non-alphanumeric character (equivalent to [^a-zA-Z0-9_]).</li>
                    <li>\\s: Matches any whitespace character (spaces, tabs, line breaks).</li>
                    <li>\\S: Matches any non-whitespace character.</li>
                    `;


const tips3 = `<h3>Anchors and Boundaries</h3>
                <li>\\b: Matches a word boundary (the position between a word and a non-word character).</li>
                <li>\\B: Matches a position where the previous and next character are of the same type: Either both must be words, or both must be non-words.</li>
                <li>\\A: Matches the beginning of the input.</li>
                <li>\\Z: Matches the end of the input or before a final newline.</li>
                <li>\\z: Matches the end of the input.</li>
                `;

const tips4 = `<h3>Escaping Special Characters</h3>
                <li>\\\\: Use a backslash to escape special characters (e.g., \\. matches a literal dot).</li>
                `;


const tipsList = [tips1, tips2, tips3, tips4];
let idx = 1;


const nextTipBtn = document.getElementById('nextTipBtn');

function changeTips(event) {

    const tipsHTMLRoot = document.getElementById('tips');

    tipsHTMLRoot.innerHTML = tipsList[idx];
    idx = (++idx)%tipsList.length;

}

nextTipBtn.addEventListener('click', changeTips);