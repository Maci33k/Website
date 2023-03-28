var check = true;
var check2 = true;
function change() 
{
	if (check == true)
	{
	var text ="<a href='https://github.com/Maci33k/Website'>OurRepository</a>" + "</br></br>"
	+
	"<a href='https://docs.github.com/en'>OfficialGitHubDocumentation</a>"
	+ "</br></br>" + "<a href='https://github.com/ualhmis/'>HMISGitHub</a>"
	+ "</br></br>" + "<a href=' https://git-scm.com/book/en/v2'>GitBook</a>"
	+ "</br></br>" + "<a href='https://learn.microsoft.com/en-us/azure/?product=popular'>AzureDocumentation</a>"
	
	
	document.getElementById("description").innerHTML = text;
	document.getElementById("resources").innerHTML = "<i class='icon-graduation-cap'></i></br>Back to description";
	check = false;
	}
}

function change2()
{
	if (check == false)
	{
		document.getElementById("description").innerHTML = "Welcome to the website created by Los Polacos!" +
"</br></br>" +
"Here you will find personal information about members of our group: Maciek and Anita." + 
"</br></br>"
+"If you want to get in touch with us, you will find our e-mail addresses in the section Contact" +
"</br></br>"+
"Que tengas un buen dia!";
document.getElementById("resources").innerHTML = "<i class='icon-graduation-cap'></i></br>Resources";
		check = true;
	}
}

function both() 
{
	if(check == true)
		change();
	else change2();
}

function mailChange()
{
	if (check2 == true)
	{
	var text = "<a href='https://github.com/Maci33k'>Maciek's GitHub</a>" + "</br></br>" +
	"<a href = 'https://github.com/nisia289'>Anita's GitHub</a>" + "</br></br>"
	+ "Maciek's mail: mi637@inlumine.ual.es" + "</br></br>"
	+ "Anita's mail: aj171@inlumine.ual.es"
	
	
	document.getElementById("description").innerHTML = text;
	document.getElementById("mail").innerHTML = "<i class='icon-mail-alt'></i></br>Back to description"
	check2 = false;
	}
}

function mailChange2()
{
	document.getElementById("description").innerHTML = "Welcome to the website created by Los Polacos!" +
"</br></br>" +
"Here you will find personal information about members of our group: Maciek and Anita." + 
"</br></br>"
+"If you want to get in touch with us, you will find our e-mail addresses in the section Contact" +
"</br></br>"+
"Que tengas un buen dia!";
document.getElementById("mail").innerHTML = "<i class='icon-mail-alt'></i></br>Contact";
		check2 = true;
}



function both2() 
{
	if(check2 == true)
		mailChange();
	else
		mailChange2();
}
	