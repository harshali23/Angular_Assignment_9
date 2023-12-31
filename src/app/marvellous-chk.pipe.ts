import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
//Prime Number
    if (args == "Prime")
    {
    for(var i= 2; i< value; i++)
    {
        if(value % 2 == 0)

    {
        return value + " is not a Prime"
    }
    else 
    {
      return value + " is a Prime"
    }
    }
  }
  
  //Perfect Number
  if (args == "Perfect")
  {
    var temp = 0;

  // Iterate through numbers from 1 to half of the input number to find factors
  for (var i = 1; i <= value / 2; i++) {
    // Check if i is a factor of the input number
    if (value % i === 0) {
      // If i is a factor, add it to the sum
      temp += i;
    }
  }

  // Check if the sum of factors is equal to the original number and not zero
  if (temp === value && temp !== 0) {
    // If true, log that it is a perfect number
    return value + " is a Perfect number"
  } else {
    // If false, log that it is not a perfect number
    return value + " is not a Perfect number"
  }
  }

  //check if the number is even
  if(args == "Even")
  {
  if(value % 2 == 0) 
  {
    return value + " is a Even number"
  }
  else
  {
    return value + " is not a Even number"
  }
  }


    //check if the number is Odd
    if(args == "Odd")
    {
    if(value % 2 !== 0) 
    {
      return value + " is a Odd number"
    }
    else
    {
      return value + " is not a Odd number"
    }
    }
  




}

}
