
// Numbers counting up animation in Statistics Section

const statistics = document.querySelectorAll(".statistics h1");
const timeNeeded = 200; 
        
statistics.forEach(statistic => {
    const targetStatistic = +statistic.textContent;
    const increment = targetStatistic / timeNeeded; 
    let counter = 0 ; 
    let count = 0; 
    const timer = setInterval(()=>{
        counter ++;  
        if(counter === timeNeeded){
            clearInterval(timer);
        }
        count += increment;
        statistic.textContent = Math.round(count);  
    },1);
});