function validate() {

	var username=document.getElementById('username').value
		var email=document.getElementById('email').value
			var password=document.getElementById('password').value
				var cpassword=document.getElementById('cpass').value

			checkusername(username)
			checkemail(email)
				checkpassword(password)
			checkcpassword(password,cpassword)




}

function checkusername(username)
{

if(username.length >7)
{
		document.getElementById('username').classList.add("success")

	document.getElementById('username').classList.replace("error","success")
	document.getElementById('username_error').innerText=''

}
else
{

	document.getElementById('username').classList.add("error")
	document.getElementById('username_error').innerText='Enter the valid username'


}
}

function checkpassword(password)
{
	if(password.length >7)
{
		document.getElementById('password').classList.add("success")

	document.getElementById('password').classList.replace("error","success")
	document.getElementById('password_error').innerText=''

}
else
{

	document.getElementById('password').classList.add("error")
	document.getElementById('password_error').innerText='password length must be 8 digits'


}
}

function checkcpassword(password,cpassword)
{
	
if(password==cpassword && (password!='' && cpassword.length>=8))
{
	
		document.getElementById('cpass').classList.add("success")

		document.getElementById('cpass').classList.replace("error","success")

	document.getElementById('cpass_error').innerText=' '

}
else
{

	document.getElementById('cpass').classList.add("error")
	document.getElementById('cpass_error').innerText='password does not match'


}


}


function checkemail(email)
{
	
	if(email.length>8 && email.includes("@gmail.com"))
{
	document.getElementById('email').classList.add("success")
	document.getElementById('email').classList.replace("error","success")
	document.getElementById('email_error').innerText=''

}
else
{

	document.getElementById('email').classList.add("error")
	document.getElementById('email_error').innerText='Enter the valid Email'


}


}