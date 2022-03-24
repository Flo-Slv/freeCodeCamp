let tab = [
  { name: 'ONE HUNDRED', val: 100},
  { name: 'TWENTY', val: 20},
  { name: 'TEN', val: 10},
  { name: 'FIVE', val: 5},
  { name: 'ONE', val: 1},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.1},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

let checkCashRegister = (price, cash, cid) => {
  // Initialize object to return.
  let change = {
    status: "",
    change: []
  };

  // Diff between given cash and products price.
  let rest = cash - price;

  // Check if we have enough money.
  let register = cid.reduce((prev, curr) => {
    prev.total += curr[1];
    prev[curr[0]] = curr[1];
    return prev;
  }, { total: 0 });

  // Just enough money.
  if (register.total === rest) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  }

  // Not enough money.
  if (register.total < rest) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }

  let arr = tab.reduce((prev, curr) => {
    let value = 0;

    while (register[curr.name] > 0 && rest >= curr.val) {
      register[curr.name] -= curr.val;
      rest -= curr.val;
      value += curr.val;

      rest = Math.round(rest * 100) / 100;
    };

    if (value > 0) {
      prev.push([curr.name, value]);
    }

    return prev;
  }, []); 

  if (arr.length < 1 || rest > 0) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }

  change.status = "OPEN";
  change.change = arr;
  return change;
};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
