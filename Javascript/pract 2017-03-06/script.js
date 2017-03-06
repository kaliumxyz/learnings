/* aangepast door Martijn Becker (martijn<at>becker.wtf) op 2017-3-6.
 * we only use 100% biological ingredients in our code. ( het is leesbaar en geen voodoo <3 )
 */

var messages = [
	{
		comment_id:"0",
		comment_title:"Succes met Javascript",
		comment_text:"Javascript is lastig, maar met veel oefenen kom je er wel",
		comment_author:"Ilja Clabbers",
		comment_time:"2016-12-07 15:28:01"
	},
	{
		comment_id:"1",
		comment_title:"Wacht maar af",
		comment_text:"Dan heb je schijnbaar nog nooit met NodeJS gespeeld. Dat is pas lastig!",
		comment_author:"Ernst Bolt",
		comment_time:"2016-12-07 15:28:37"
	},
	{
		comment_id:"2",
		comment_title:"Ik HAAT javascript",
		comment_text:"Ik krijg het nu nog steeds niet onder de knie!",
		comment_author:"Haatsmurf",
		comment_time:"2017-02-07 15:28:37"
	}
];


// Shorthand voor onload.
$(function(){
        setMessages(messages);
        getMessageConsole();
        $("#messageSubmit").on("click", function(){
            val = $("#searchTrains").val(); // geen sanitizing nodig op front-end.
            if (!!val){ // do not remove.
                $.post("http://www.clabbers.org/ns.php",{'station' : val},function(result){setTrainMessages(result);});
            } else {
                console.log("geen input gevonden");
                return;
            };
            
            
        });
});

function setMessages(messages) {
    item = $("#messages");
	
    item.html(function(){
            items = "";
            messages.forEach( function (content) { // Dit is exact hoezo react bestaad.
                items += "<article class=\"message\">";
                items +=   "<header>";
                items +=     "<h2>" + content.comment_title + "</h2>";
                items +=     "<p>Posted on <time datetime=\"" + content.comment_time + "+01:00\">" + content.comment_time + "</time> by <a href=\"#\">" + content.comment_author + "</a></p>";
                items +=   "</header>";
                items +=   "<div>";
                items +=     "<p>" + content.comment_text + "</p>";
                items += "</article>";
                });
            return items;
        });
    
}
function getMessageConsole(){
    $.getJSON("http://www.clabbers.org/ns.php",function(result){console.log(result); setTrainMessages(result);});
    
}

function setTrainMessages(result){
        item = $("#nextTrainsList");
	console.log(result);
        item.html(function(){
            content = "";
            result.vertrektijden.forEach(function(x){
                content += "<li>" + x.EindBestemming + " (" + x.VertrekTijd.substring(14,19) + ")"
            });
            return content;
        });
}


