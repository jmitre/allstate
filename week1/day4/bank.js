var myBankAccount = {
  accountHolder: 'Andreas',
  checkingBalance: 10,
  savingsAccount: 200,
  addToChecking: function(dollarAmount){
    if(dollarAmount > 0 && dollarAmount <= 200 )
      this.checkingBalance += dollarAmount;//will modify checkingBalance attribute
  }
};

// addToChecking: function(dollarAmount){
//   this.checkingBalance += dollarAmount;//will modify global
// }

function creditAccount(balance){
  this.withdraw = balance;
}


creditAccount.call(myBankAccount, function(){ return 10});
console.log(myBankAccount);


module.exports = myBankAccount;
