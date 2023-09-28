function sumSalaries(salaries){
    let total =0;
     for(let sal of Object.values(salaries)){
        total += sal;
     }
     return total;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(sumSalaries(salaries));