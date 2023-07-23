
async function getAdvice() {
    var response = await fetch("https://api.adviceslip.com/advice");
    var data = await response.json();
    console.log(data);
    return data;
}
function displayAdvice(id, advice) {
    var adviceId= document.getElementById('adviceId');
    adviceId.innerHTML = `advice number: ${id}:;<br>your advice: ${advice}`;
}

const Btn = document.getElementById('submit');
Btn.addEventListener('click', async () => {
    try {
        const a = await getAdvice();
        console.log(a);
        displayAdvice(a.slip.id, a.slip.advice);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

