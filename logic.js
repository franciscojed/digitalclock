function giveMeTheTime() {

    let current_date= new Date();
    let hour= current_date.getHours();
    let minutes= current_date.getMinutes();
    let seconds= current_date.getSeconds();
    let session;
    
    if(hour >= 0 && hour <= 11) {             
        session = "AM";
        
        if(hour == 0) hour = hour + 12;
        
        if (hour <= 9) hour = "0"+ hour;
            
    }
    
    
    
    if(hour >= 12 && hour <= 23) {        
        session = "PM";    
        
        if (hour != 12) hour = hour - 12;        
            
        if(hour <= 9) hour = "0" + hour;
            
    }
    
        
    if(minutes <= 9) minutes = "0" + minutes;
    
    if(seconds <= 9) seconds = "0" + seconds;
    

    let now = "<p>"+ hour + ":" + minutes + "<span>:" + seconds + "</span>" + session + "</p>";


    document.getElementById("nowTime").innerHTML= now;

    setTimeout(giveMeTheTime, 1000);


}


