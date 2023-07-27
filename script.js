async function getAdvice() {
    
      var response = await fetch("https://api.adviceslip.com/advice");
      var data = await response.json();
      return data;
    }
  function displayAdvice(id, advice) {
    var adviceId = document.getElementById('adviceId');
   adviceId.innerHTML = "";
    adviceId.innerHTML = `ADVICE # ${id}`;
    var adv = document.getElementById('advice');
    adv.innerHTML = "";
    adv.innerHTML = `"${advice}"`;
  }
  
  const Btn = document.getElementById('dice');
  Btn.addEventListener('click', async () => {
    try {
      const a = await getAdvice();
      console.log(a);
      displayAdvice(a.slip.id, a.slip.advice);
    
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });
  
