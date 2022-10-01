$(document).ready(function(){
    $("#newQuote").on("click",function(){
        var source="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        //Source link  request for the quote and response is shown by the function
        $.getJSON(source,function(response){
            //Storing the response from the api in the variable  for the changing the text of quote
            var forismaticText=JSON.stringify(response);
            //Json.parse to convert the string into javascript object 
            var newQuote=JSON.parse(forismaticText);
            //Changing the html of the quotetext
            $("#quotetext").html(newQuote.quoteText);
            $("#authorText").html(newQuote.quoteAuthor);
            //Changing the background color contantly code taken from stack over flow
            $("html").css("--main-bg-color",function(){
                var change = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
                if ( change == '#ffffff'){
                    return '#f1f1f1';
                } else return change;
            });

        });
    });
});

