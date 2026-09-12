function Account(iban, owner, balance){
    this.iban = iban,
    this.owner = owner,
    this.balance = balance,
    this.getBalance = function(){return this.balance;}
    this.deposit = function(amount){
        if( typeof(amount)!=='number' || amount<=0 ){
            return false;
        } else {
            this.balance+=amount;
            return true;
        }
    }
    this.withdraw = function(amount){
        if( typeof(amount)!=='number' || amount<=0 || amount > this.balance ){
            return false;
        } else {
            this.balance-=amount;
            return true;
        }
    }
};

function transfer(acc1,acc2, amount){
    if(acc1.withdraw(amount)){
        if(acc2.deposit(amount)){
            // успех
            return new Transaction(acc1,acc2,amount);     
        } else {
            acc1.deposit(amount)
            // не успех не смогли зачислить
            return new Transaction(acc1,acc2,amount, "не смогли зачислить");
        } 
    } else {
        // не успех не смогли списать
        return new Transaction(acc1,acc2,amount,"не смогли списать");
    }

}


function Transaction(acc1,acc2,amount,error ){
    this.account1 = acc1;
    this.account2 = acc2;
    this.amount = amount;
    if(error!==undefined){
        this.error = error;
    }

    this.transactionInfo = function(){
        let iban1=this.account1.iban || "счет не определен";
        let iban2=this.account2.iban || "счет не определен";
        let msg = ("error" in this) ? ` error ${this.error}`:"";
        return `Перевод с ${iban1} на ${iban2} на сумму ${amount}${msg}`
    }


}


let account1 = new Account("1111","jack",1000);
let account2 = new Account("2222","ann",1000);
//console.log(account1.getBalance());
//console.log(account1.withdraw("777"));

console.log(account1);
console.log(account2);
let res = transfer(account1,account2, 500);
console.log("1>>>>>>>>>>",res);
console.log("2>>>>>>>>>>",res.transactionInfo());
console.log(account1);
console.log(account2);



