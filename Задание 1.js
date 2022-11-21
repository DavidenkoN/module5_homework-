var numb = prompt ("Введите значение");
var numb = +numb;
if (typeof numb == 'number' && !isNaN(numb))
{
  console.log("Это число");
  if(x % 2 == 0)
  {
    console.log("Это четное число");
  } 
  else
  {
    console.log("Это нечетное число");
  } 
} 
else{
  console.log(«Упс, кажется, вы ошиблись»);
}