const btn = document.getElementById("calculate");

btn.addEventListener('click', calculate = () => {
    let height = document.getElementById("heightINPT").value;
    let weight = document.getElementById("weightINPT").value;
    if (height == "" && weight == "") {
        alert("Please filled all the fields first! ")
        return
    }
    height /= 100;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2);

    document.getElementById("result").innerText = BMI;

    let status = "";

    if (BMI < 18.5) {
        status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    if (BMI >= 30) {
        status = "Obese";
    }
    document.querySelector(".comment").innerHTML = `Comment: you are <span id="comment">${status}</span>`;
}
)

