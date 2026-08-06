function showTip(){

    const tips = [
        "Always wear sunscreen with SPF 30 or higher during the day.",
        "Wash your face twice daily with a gentle cleanser.",
        "Moisturize even if you have oily skin.",
        "Drink plenty of water to help keep your skin hydrated.",
        "Avoid touching your face throughout the day.",
        "Introduce new skincare products one at a time.",
        "Be patient—most skincare products take several weeks to show results."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("tip").innerHTML = randomTip;
}

function skinQuiz(){

    const results = [
        "You may have Dry Skin. Look for hydrating cleansers and rich moisturizers.",
        "You may have Oily Skin. Lightweight moisturizers and gentle cleansers are great options.",
        "You may have Combination Skin. Balance hydration while controlling excess oil.",
        "You may have Normal Skin. Maintain a simple, consistent skincare routine.",
        "You may have Sensitive Skin. Choose fragrance-free and gentle products."
    ];

    const randomResult = results[Math.floor(Math.random() * results.length)];

    document.getElementById("quizResult").innerHTML = randomResult;
}

function showIngredient(){

    const ingredients = [
        "💧 Hyaluronic Acid: Helps attract moisture and keeps skin hydrated.",
        "✨ Vitamin C: Brightens skin and helps reduce dark spots.",
        "🌿 Niacinamide: Reduces redness and improves skin texture.",
        "🌙 Retinol: Encourages skin renewal and reduces fine lines.",
        "🫧 Salicylic Acid: Helps unclog pores and reduce acne."
    ];

    const randomIngredient =
        ingredients[Math.floor(Math.random() * ingredients.length)];

    document.getElementById("ingredientFact").innerHTML =
        randomIngredient;
}

function updateRoutine(){

    const checks =
        document.querySelectorAll(".routine-box input[type='checkbox']");
    let completed = 0;

    checks.forEach(function(box){

        if(box.checked){
            completed++;
        }

    });

    const status = document.getElementById("routineStatus");

    if(completed === 4){
        status.innerHTML =
            "🎉 Great job! You completed your skincare routine today!";
    }

    else{
        status.innerHTML =
            completed + " of 4 steps completed.";
    }

}

function recommendRoutine(){

    const concern =
        document.getElementById("concern").value;

    const recommendation =
        document.getElementById("recommendation");

    if(concern === "Dryness"){
        recommendation.innerHTML =
        "Use a gentle cleanser, hyaluronic acid serum, rich moisturizer, and sunscreen every morning.";
    }

    else if(concern === "Acne"){
        recommendation.innerHTML =
        "Consider products with salicylic acid, oil-free moisturizer, and sunscreen.";
    }

    else if(concern === "Dark Spots"){
        recommendation.innerHTML =
        "Vitamin C in the morning and sunscreen daily can help improve uneven skin tone.";
    }

    else if(concern === "Fine Lines"){
        recommendation.innerHTML =
        "Retinol at night, moisturizer, and daily sunscreen are commonly recommended.";
    }

    else{
        recommendation.innerHTML =
        "Please select a skin concern first.";
    }
}

function submitForm(event){
    event.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
    event.target.reset();
}