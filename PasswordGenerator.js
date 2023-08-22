
function digitSwitch(e,d,c)
{
	let div = document.getElementById(d);
	let check = document.getElementById(c);
	if(check.checked == true)
	{
		e.style.transform = 'translate(0)' ;
		e.textContent ="OFF";
		div.classList.toggle('offMode');
		div.classList.toggle('onMode');
		e.style.backgroundColor = 'black';
		e.style.color = 'white';
		check.checked = false;
	}
	else{
		e.style.transform = 'translate(100%)' ;
		e.textContent ="ON";
		div.classList.toggle('offMode');
		div.classList.toggle('onMode');
		e.style.backgroundColor = 'white';
		e.style.color = 'black';
		check.checked = true;
	}
}

function generatePassword()
{
	let len = document.getElementById('length').value;
	let digits = document.getElementById('digits').checked;
	let specialChar = document.getElementById('specialChar').checked;
	let upperCase = document.getElementById('upperCase').checked;
	let lowerCase = document.getElementById('lowerCase').checked;
	let password = document.getElementById('password');

	if(len<0)
	{
		password.textContent = 'Please enter positive number';
		return;
	}
	password.textContent = '';
	  password.textContent = '';
      let i =0 ;
	  if( !digits && !specialChar && !upperCase && !lowerCase)
	    {
			password.textContent = 'Please check atleast one above';
			return;
		}
      while(true)
	   {
		
		if(i>=len)
		    break;
		if(upperCase)
		   {
			password.textContent += getUpperCaseChar();
			i++;
		   }	

		if(i>=len)
		  break;
		if(lowerCase)
		{
			password.textContent += getLowerCaseChar();
			i++;
		}

		if(i>=len)
		  break;
		if(specialChar)
		{
			password.textContent += getSpecialChar();
			i++;
		}

		if(i>=len)
		  break;
		if(digits)
		{
			password.textContent += Math.floor(Math.random()*10);
			i++;
		}

		if(i>=len)
		  break;
		
	   }
};

generatePassword();

function getLowerCaseChar()
{
	let str = String.fromCharCode( Math.floor(Math.random()*(122-97)+97).toString() );
	return str;
}

function getUpperCaseChar()
{
	let str = String.fromCharCode( Math.floor(Math.random()*(90-65)+65).toString() );
	return str;
}

function getSpecialChar()
{
	let str = String.fromCharCode( Math.floor(Math.random()*(33-47)+47).toString() );
	return str;
}

async function copyPassword()
{
	const pass = document.getElementById('password');

	try{
		await navigator.clipboard.writeText(pass.textContent);
		pass.textContent = ' copied ✔️';
		setTimeout(()=>{location.reload()},1000)
	}
	catch(err)
	{
		alert("can't copy try again");
	}
}

