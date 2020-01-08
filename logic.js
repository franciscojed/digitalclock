let current_date = new Date();
let hour = current_date.getHours();
let minutes = current_date.getMinutes();
let seconds = current_date.getSeconds();

this.document.write( "<p>"+ hour + ":" + minutes + "<span>:" + seconds + "</span></p>" );

