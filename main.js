

const perTanyaan = [
    {
        pertnyaan: "Berapakah 14 di kurangi 8?",
        jawab: "6"
    },
    {
        pertnyaan: "9 pangkat 2",
        jawab: "81"
    },
    {
        pertnyaan: "8 x 8 ?",
        jawab: "64"
    },
    {
        pertnyaan: "50 x 50?",
        jawab: "2500"
    },
    {
        pertnyaan: "100 : 5??",
        jawab: "20"
    },
]

// const quest = document.querySelector('.pertanyaan')
// const button = document.getElementById(btn)





// quest.innerHTML = `${perTanya.partanyaan}`
// console.log(indexquest)
// console.log(jawab)



let indexquest = 0
let score = 0
function displayquest() {
    document.getElementById("suaah").textContent = perTanyaan[indexquest].pertnyaan
    document.getElementById("inpute").value = "";
}

function scoreUpdate(){
    document.getElementById("score").textContent = `Score = ${score}`
}
// let hihi = perTanyaan[indexquest].pertnyaan
// quest.textContent = hihi
// let jawab = perTanyaan[indexquest].jawab

function ihacoy(){
    
    const input = document.querySelector('.input').value
    const jawaban = perTanyaan[indexquest].jawab
    // console.log(jawaban)
    
    if(input === jawaban){
        score = score+1;
        scoreUpdate()
        // console.log(indexquest)
    }else{
        
    }
    indexquest = indexquest+1;
    if (indexquest < perTanyaan.length) {
        displayquest();
    }else {
        document.querySelector(".wadah").style.display = 'none';
        document.querySelector(".wadah-resut").style.display = 'block';
        document.querySelector("body").style.backgroundColor = 'white'
        document.getElementById("skor-akhir").textContent = score;
        

        
    }

}


function startQuiz() {
    
    document.querySelector(".startQ").style.display = 'none';
    document.querySelector(".wadah").style.display = 'flex';
    displayquest();
    scoreUpdate();

}
// tombol enter
document.getElementById("inpute").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        ihacoy();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".startQ").style.display = 'block';
    document.querySelector(".wadah").style.display = 'none';

});





