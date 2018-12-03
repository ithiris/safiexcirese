function compare_strings(str1, str2)
{
var Equal = str1.toUpperCase() === str2.toUpperCase();
  return Equal;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));
