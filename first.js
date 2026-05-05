/*for (let i = 0; i !=10; i+= 0.1) {
    console.log(i);
  }*/
 let x = 55;
 let y = 10;
 let z = x+y;
 document.getElementById("demo").innerHTML = z;

 let fruits = ["Apple", "Mangos","Bannana"];
 document.getElementById("Demo").innerHTML = fruits[1];


 let student ={
  name: "ali",
  age:22,
  city:"Lahore"
 };
 document.getElementById("student").innerHTML = student.name + ""+ student.age +""+ student.city;
 document.getElementById("hi".innerHTML="hello")
 $a="ali";
 console.log($a);

  function firstFunction(){
            var x;
            if (confirm("Are u sure to delete ?") == true)
            {
                x="you deleted the record";
            }
            else
            {
                x= "you canceled the operation";
            }
            document.getElementById('demo1').innerHTML = x;
        }


    	function firstFunction()
    	{
	    	var name = prompt("Please enter your name","Iltaf Hussain");
	    		if (name != null) 
	    		{
	    			document.getElementById('demo1').innerHTML= 
	    			"Dear " + name + "! calm down and do practice ";
	    		}
    		}
document.write("Hello Student!<br>");
    document.write("Welcome to JavaScript Practical<br>");

    let a = 5;
    let b = 10;

    document.write("Sum of a and b is: " + (a + b));

    let text = "JavaScript";

let result = text.slice(0, 6);

console.log(result);

function validateform() {
  var name = document.myform.name.value;
  var pwd  = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name cannot be blank.");
    return false;
  }
  if (pwd.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }
  return true; // all valid
}

 