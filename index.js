// Write your solution in this file!
const employee = {
    name : 'Sam',
    streetAddress: '12 Broadway'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
return {
    ...employee,[key]: value,
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee= {
      ...employee}
    delete newEmployee[key]
    console.log(newEmployee)
    return newEmployee
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key){

      delete employee[key]
      console.log(employee)
      return employee
    }