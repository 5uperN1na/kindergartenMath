window.addEventListener('DOMContentLoaded', function () {

    console.log('test');

    //Created text for button
    let button = document.createElement('button');
    //Appended text to the button element.
    let text = document.createTextNode('Load Math');
    //Appended button element (with text) to the button
    button.appendChild(text);
    //Appended button to body
    document.body.appendChild(button);

    //global variable for age
    let age = 7;

    //ADD function

    function addOne(age) {


        age = age + 1;

        let h3 = document.createElement('h3');
        //Created text for button
        let h3Text = document.createTextNode(age + ' + 1');
        //Appended text to the button element.
        h3.appendChild(h3Text);
        //Appended button element (with text) to the tag
        document.body.appendChild(h3);


        let p = document.createElement('p');
        let pText = document.createTextNode(age);
        p.appendChild(pText);
        document.body.appendChild(p);
    }

    addOne(age);

    //Subtract

    function subtractOne(x) {
        x = x + 1;

    }

    subtractOne(age);




});