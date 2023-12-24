
let user1 = document.getElementById("inp1");
let user2 = document.getElementById("inp2");
let paragraf = document.getElementById("product");
let box1 = document.getElementById("rd1");
let box2 = document.getElementById("rd2");
const healthyFoods = document.getElementsByClassName("healthyEating")

function btn1() {

    let user3 = user1.value;
    let user4 = user2.value;
    // Aşağıdaki kod İnputun içine eğer herhangi bir değer verilmedi ise alet verir 
    if (user3.trim() == "" || user4.trim() == "") {
        alert("Lütfen Boy Kilo değeri giriniz");
        return; // İşlemi durdur, sonuçları gösterme
    }
    const cm = parseFloat(user3);
    const metre = cm / 100;

    const bill = user4 / (metre * metre);
    const roundedNumber = bill.toFixed(2);
    paragraf.innerHTML = roundedNumber;
    console.log(roundedNumber);

    const femaleWeightGroups = {
        underweight: 18.50,
        normal: 25,
        overweight: 30,
        obese: 40
    }

    const maleWeightGroups = {
        underweight: 19.50,
        normal: 26,
        overweight: 31,
        obese: 41
    }
    const isFemale = box1.checked
    const currentWeightGroups = isFemale ? femaleWeightGroups : maleWeightGroups


    if (roundedNumber <= currentWeightGroups.underweight) {
        conclusion.innerHTML = "Düşük kilolu"
        conclusion.style.color = "#8a2be2"
        conclusion.style.fontWeight="bold"
        
        const unhealthyFoodSections = document.querySelectorAll(".unhealthyFood");
       
        for (const section of unhealthyFoodSections) {
            section.style.display = "none";
        }
        for (const section of healthyFoods) {
            section.style.display = "block";
            console.log(section,"Uğur hocam")
        }
       

    } else if (roundedNumber < currentWeightGroups.normal) {
        conclusion.innerHTML = "Normal kilolu" 
        conclusion.style.color = "blue"
        conclusion.style.fontWeight="bold"
        
        const unhealthyFoodSections = document.querySelectorAll(".unhealthyFood");
        for (const section of unhealthyFoodSections) {
            section.style.display = "none";
        }
        const unhealthyFoodWeak = document.querySelectorAll(".healthyEating");
        for (const section of unhealthyFoodWeak) {
            section.style.display = "block";
        
        }
    
    } else if (roundedNumber < currentWeightGroups.overweight) {
        conclusion.innerHTML = "Fazla Kilolu"
        conclusion.style.color = "#ef9a9a"
        conclusion.style.fontWeight="bold"
        const unhealthyFoodSections = document.querySelectorAll(".unhealthyFood");
        for (const section of unhealthyFoodSections) {
            section.style.display = "block";
        }
        const unhealthyFoodWeak = document.querySelectorAll(".healthyEating");
        for (const section of unhealthyFoodWeak) {
            section.style.display = "none";
        }

    } else if (roundedNumber < currentWeightGroups.obese) {
        conclusion.innerHTML = "Obez Olmuşsun Yeme Artık "
        conclusion.style.color = "#723f3f"
        const unhealthyFoodSections = document.querySelectorAll(".unhealthyFood");
        for (const section of unhealthyFoodSections) {
            section.style.display = "block";
        }
        const unhealthyFoodWeak = document.querySelectorAll(".healthyEating");
        for (const section of unhealthyFoodWeak) {
            section.style.display = "none";
        }

    } else {

        conclusion.innerHTML = "Aşırı Obez Yemeeeeeeeee"
        const unhealthyFoodSections = document.querySelectorAll(".unhealthyFood");
        conclusion.style.color = "red"
        for (const section of unhealthyFoodSections) {
            section.style.display = "block";
        }
        const unhealthyFoodWeak = document.querySelectorAll(".healthyEating");
        for (const section of unhealthyFoodWeak) {
            section.style.display = "none";
        }
    }
    

}

function female() {
    document.getElementsByClassName("veribles")[0].style.backgroundColor="pink" 
    /* user1.style="background-color:transparent;
    border:none;border-bottom:1px solid #000;outline:0"  bu kod inputun valuesini rengini değişitiri*/
    
}
document.addEventListener("DOMContentLoaded", function() {
    female();
  });

user1.onfocus = function (a) {
    console.log(a)
    a.target.setAttribute("placeholder", "örn: 175")
    // a.target.style.backgroundColor="#000"
}
user2.onfocus = function (a) {
    console.log(a)
    a.target.setAttribute("placeholder", "örn: 60")
    // a.target.style.backgroundColor="#000"
}
function male() {
    document.getElementsByClassName("veribles")[0].style.backgroundColor="lightsteelblue" 
}


function btn2() {
    user1.value = "";
    user2.value = "";
    paragraf.innerHTML = "";
}

