/*
A REAL-WORLD PROBLEM MODELED USING OBJECT ORIENTED PROGRAMMING
showing different OOP attributes
SIMPLE BANK ACCOUNT MANAGEMENT SYSTEM
*/ 

let Account = function(name, accNum, age, balance) {
	//ALL ACCOUNT USERS MUST BE ABOVE 10 YEARS OLD
	if (age < 18) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be 18 years and above!";
	} else {
			//ACCOUNT OBJECT PROPERTIES
		this.Name = name;
		this.Age = age;
		this.AccNum = accNum;
		if(balance){
			this.Balance = balance;
		}
		else{
			this.Balance = 0;
		}
	}
}
//DEPOSIT FUNCTION INHERITS FROM THE PARENT ACCOUNT CLASS
Account.prototype.deposit = function(amount) {
	 if (amount > 0 && this.Balance) {
	 	this.Balance += amount;
	 	console.log("New Balance is " + this.Balance);
	 }else if(!this.Balance){
	 	console.log("NONEXISTENT ACCOUNT!");
	 }
	 else{
	 	console.log("INVALID DEPOSIT AMOUNT \nACCOUNT BALANCE IS " + this.Balance);
	 }
}
//WITHDRAW FUNCTION INHERITS FROM THE PARENT ACCOUNT CLASS
Account.prototype.withdraw = function(amount){
	if(amount < this.balance && this.balance > minBal){
		this.Balance -= amount;
		console.log("Your new Balance is: " + this.Balance);
	}else if (!this.Balance) {
		console.log("INVALID ACCOUNT!");
	}
	else if (this.Balance < amount){
		console.log("INSUFFICIENT FUNDS!, cannot withdraw beyond the current balance");
	}
}
//ACCOUNT USER INFORMATION DISPLAY FUNCTION
Account.prototype.customerInfo = function() {
	var customer = {
		'name': this.Name,
		'age' : this.Age,
		'accNum' : this.AccNum,
		'balance': this.Balance,
		'accountType': (this.constructor === Savings) ? "SAVINGS" : "CURRENT"
	}
	console.log(customer);
}
//SAVINGS ACCOUNT OBJECT
function Savings(name, accNum, age, balance) {
	if (age < 18 && balance < 1000 ) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be 18 years and above!\
		 \nMinimum Account opening fee is 1000";
	}
	else{
		this.Name = name;
		this.Age = age;
		this.AccNum = acNum;
		this.Balance = balance;
		var minBal = 1000;
		if(this.Balance === minBal){
			return "Cannot withdraw beyond the minimum Savings Account balance";
			this.Balance -= minBal;
		}
	}
}
/*
TO MAKE THE SAVINGS ACCOUNT OBJECT TO INHERIT FROM THE PARENT ACCOUNT CLASS
AND A CONSTRUCTOR TO ENABLE CREATION OF A SAVINGS ACCOUNT
*/
Savings.prototype = new Account();
Savings.prototype.constructor = Savings;

//CURRENT ACCOUNT OBJECT
function Current(name,accNum,age,balance) {
	if (age < 18 && balance < 5000) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be 18 years and above!\
		\nMinimun Account Opening fee is 5000";
	}
	else{
		this.Name = name;
		this.Age = age;
		this.AccNum = accNum;
		this.Balance = balance;
		var minBal = 5000;
		if(this.Balance === minBal){
			return "Cannot withdraw beyond the minimum Current Account balance";
			this.Balance -= minBal;
		}
	}
}
/*
TO MAKE THE CURRENT ACCOUNT OBJECT TO INHERIT FROM THE PARENT ACCOUNT CLASS
AND A CONSTRUCTOR TO ENABLE CREATION OF A CURRENT ACCOUNT
*/
Current.prototype = new Account();
Current.prototype.constructor = Current;