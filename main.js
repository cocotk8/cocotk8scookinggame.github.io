document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const outputText = document.getElementById('outputText');

    const firstIngInput = document.getElementById('firstInput').querySelector('.select-selected');
    const secondIngInput = document.getElementById('secondInput').querySelector('.select-selected');
    const thirdIngInput = document.getElementById('thirdInput').querySelector('.select-selected');
    const fourthIngInput = document.getElementById('fourthInput').querySelector('.select-selected');

    const firstIngImage = document.getElementById('firstInputGridBox');
    const secondIngImage = document.getElementById('secondInputGridBox');
    const thirdIngImage = document.getElementById('thirdInputGridBox');
    const fourthIngImage = document.getElementById('fourthInputGridBox');

    function removeIng() {
        firstIngInput.setAttribute('data-value', '');
        firstIngInput.innerHTML = 'Select an ingredient';

        secondIngInput.setAttribute('data-value', '');
        secondIngInput.innerHTML = 'Select an ingredient';
        
        thirdIngInput.setAttribute('data-value', '');
        thirdIngInput.innerHTML = 'Select an ingredient';
        
        fourthIngInput.setAttribute('data-value', '');
        fourthIngInput.innerHTML = 'Select an ingredient';
    }

    function displayImage(IngInput, image) {
        if (IngInput.getAttribute('data-value') === 'beef') {
            image.style.backgroundImage = 'url("images/beef.png")';
        } else if (IngInput.getAttribute('data-value') === 'bread') {
            image.style.backgroundImage = 'url("images/bread.png")';
        } else if (IngInput.getAttribute('data-value') === 'cheese') {
            image.style.backgroundImage = 'url("images/cheese.png")';
        } else if (IngInput.getAttribute('data-value') === 'eggs') {
            image.style.backgroundImage = 'url("images/eggs.png")';
        } else if (IngInput.getAttribute('data-value') === 'butter') {
            image.style.backgroundImage = 'url("images/butter.png")';
        } else if (IngInput.getAttribute('data-value') === 'flour') {
            image.style.backgroundImage = 'url("images/flour.png")';
        } else if (IngInput.getAttribute('data-value') === 'sugar') {
            image.style.backgroundImage = 'url("images/sugar.png")';
        } else if (IngInput.getAttribute('data-value') === 'cream') {
            image.style.backgroundImage = 'url("images/cream.png")';
        } else if (IngInput.getAttribute('data-value') === 'milk') {
            image.style.backgroundImage = 'url("images/milk.png")';
        } else if (IngInput.getAttribute('data-value') === 'lettuce') {
            image.style.backgroundImage = 'url("images/lettuce.png")';
        } else if (IngInput.getAttribute('data-value') === 'tomato') {
            image.style.backgroundImage = 'url("images/tomato.png")';
        } else if (IngInput.getAttribute('data-value') === 'pasta') {
            image.style.backgroundImage = 'url("images/pasta.png")';
        } else {
            image.style.backgroundImage = 'none';
        }
    }

    button.addEventListener('click', () => {
        const ingredients = [
            firstIngInput.getAttribute('data-value'), 
            secondIngInput.getAttribute('data-value'), 
            thirdIngInput.getAttribute('data-value'), 
            fourthIngInput.getAttribute('data-value')
        ];
        const relevantIng = ingredients.filter(ing => ing !== '');

        // ingredients
        ingForBurger = ['bread', 'beef', 'lettuce', 'tomato'];
        ingForHotdog = ['bread', 'beef', 'lettuce'];
        ingForLasagna = ['pasta', 'cheese', 'beef', 'tomato'];
        ingForSpaghetti = ['pasta', 'tomato', 'cheese'];
        ingForPizza = ['flour', 'tomato', 'cheese'];
        ingForCake = ['flour', 'eggs', 'milk', 'sugar'];
        ingForDonut = ['flour', 'eggs', 'milk', 'cream'];
        ingForCupcake = ['flour', 'eggs', 'sugar', 'cream'];
        ingForPancake = ['flour', 'eggs', 'milk', 'butter'];
        ingForBagel = ['bread', 'cream'];
        ingForSalad = ['lettuce', 'tomato'];
        
        if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForBurger.sort())) {
            outputText.innerText = 'You have made a Burger'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForHotdog.sort())) {
            outputText.innerText = 'You have made a Hotdog'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForLasagna.sort())) {
            outputText.innerText = 'You have made a Lasagna'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForSpaghetti.sort())) {
            outputText.innerText = 'You have made a Spaghetti'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForPizza.sort())) {
            outputText.innerText = 'You have made a Pizza'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForCake.sort())) {
            outputText.innerText = 'You have made a Cake'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForDonut.sort())) {
            outputText.innerText = 'You have made a Donut'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForCupcake.sort())) {
            outputText.innerText = 'You have made a Cupcake'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForPancake.sort())) {
            outputText.innerText = 'You have made a Pancake'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForBagel.sort())) {
            outputText.innerText = 'You have made a Bagel'; 
        } else if (JSON.stringify(relevantIng.sort()) === JSON.stringify(ingForSalad.sort())) {
            outputText.innerText = 'You have made a Salad'; 
        } else {
            outputText.innerText = 'Invalid recipe';
        }

        removeIng()
    });

    document.addEventListener('click', () => {
        displayImage(firstIngInput, firstIngImage);
        displayImage(secondIngInput, secondIngImage);
        displayImage(thirdIngInput, thirdIngImage);
        displayImage(fourthIngInput, fourthIngImage);
    })
});

