let EmpDetails = [
    {
        empcode: 'A102',
        name: 'James',
        age: 37,
        gender: 'Male',
        department: 'Finance',
        designation: 'Manager',
        salary: 65000
    },
    {
        empcode: 'A106',
        name: 'Mary',
        age: 24,
        gender: 'Female',
        department: 'Technology',
        designation: 'Vice-President',
        salary: 68000
    },
    {
        empcode: 'A122',
        name: 'Bob',
        age: 23,
        gender: 'Male',
        department: 'Marketing',
        designation: 'Manager',
        salary: 51000
    },
    {
        empcode: 'A088',
        name: 'Julia',
        age: 33,
        gender: 'Female',
        department: 'Finance',
        designation: 'Vice-President ', salary: 70000
    },

    {
        empcode: 'A055',
        name: 'Steve',
        age: 27,
        gender: 'Male',
        department: 'Technology',
        designation: 'Manager',
        salary: 53000
    },
    {
        empcode: 'A208',
        name: 'Katherine',
        age: 29,
        gender: 'Female',
        department: 'Marketing',
        designation: 'Manager',
        salary: 61000
    },
    {
        empcode: 'A181',
        name: 'Edwards',
        age: 31,
        gender: 'Male',
        department: 'Finance',
        designation: 'Trainee',
        salary: 49000
    },
    {
        empcode: 'A029',
        name: 'Margaret',
        age: 32,
        gender: 'Female',
        department: 'Technology',
        designation: 'President',
        salary: 53000
    },
    {
        empcode: 'A029',
        name: 'Bill',
        age: 27,
        gender: 'Male',
        department: 'Operations',
        designation: 'Manager',
        salary: 58000
    }
]

let dept = ['Finance', 'Operations', 'Marketing', 'Technology']
let desg = ['Manager', 'President', 'Trainee', 'Vice-President']

let editIndex = -1
let editDetails = {}



//Show All Emplyees
function showEmployees() {

    //ClrScr
    let FullDump = document.getElementById('FullDump')
    FullDump.innerHTML = ''

    let newEmp = document.getElementById('newEmp')
    newEmp.innerHTML = ''

    let PartDump = document.getElementById('PartDump')
    PartDump.innerHTML = ''

    //grab The id
    let showID = document.getElementById('showEmp')
    let makeTheEmployee = makeEmployee()
    showID.innerHTML = makeTheEmployee
}

//Make Employee
function makeEmployee() {

    //Filter Functionality
    let flterHd = `<span>Filter Employee By:</span>`
    let department = makeDropDown(dept, 'Choose Depatements', 'deptId')
    let designation = makeDropDown(desg, 'Choose Designation', 'desgId')
    let filterBtn = `<button class="bg-black white-text pad hv-red" onclick="filterTable()">Filter</button>`

    let completeFilter = `<p>${flterHd} ${department} ${designation} ${filterBtn}</p>`


    //Table Heading
    let tableHeading = `
                       <tr>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(1)">EmpCode</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(2)">Name</th>
                          <th class="bg-black white-text cus-pos" onclick="sortTheEmpByNum(6)">Age</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(3)">Gender</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(4)">Departement</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(5)">Designation</th>
                          <th class="bg-black white-text cus-pos" onclick="sortTheEmpByNum(7)">Salary</th>
                          <th class="bg-black white-text cus-pos"></th>
                       </tr>
                     `

    //Table Body
    let tableBody = EmpDetails.map((Emp, index) => {
        //Destructure The info of  Employee
        let { empcode, name, age, gender, department, designation, salary } = Emp

        return `
                <tr class="bg-grey">
                   <td>${empcode}</td>
                   <td>${name}</td>
                   <td>${age}</td>
                   <td>${gender}</td>
                   <td>${department}</td>
                   <td>${designation}</td>
                   <td>${salary}</td>
                   <td><button class="bg-black white-text hv-red" onclick="EditEmployee(${index})">Edit</button></td>
                </tr>
               `
    })

    //Make Complete Table
    let completeTable = `${completeFilter} <table class="mg">${tableHeading}${tableBody.join('')}</table>`

    return completeTable
}

//We are making DropDown for designation and departements
function makeDropDown(arr, header, id) {

    let DpBody = arr.map(elem => {
        return `<option value="${elem}">${elem}</option>`
    })

    let dpDownHd = `<option  selected>${header}</option>`

    let completeDpDown = `
                        <select id="${id}" class="bg-grey pad"> 
                        ${dpDownHd}
                        ${DpBody.join('')}
                        </select>
                       `
    return completeDpDown
}


/*
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------Filter Table-----------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
*/

function filterTable() {

    let deptValue = document.getElementById('deptId').value
    let desgValue = document.getElementById('desgId').value


    //For Filtering value We are assigning Empty value.if user is not selecting value
    if (deptValue === 'Choose Depatements') {
        deptValue = ''
    }

    if (desgValue === 'Choose Designation') {
        desgValue = ''
    }

    //We are making Filtered Table Body
    if (deptValue && desgValue) {
        var tableBody = EmpDetails.map((Emp, index) => {
            //Destructure The info of  Employee
            let { empcode, name, age, gender, department, designation, salary } = Emp
            if (department === deptValue && designation === desgValue) {
                return `
                       <tr class="bg-grey">
                          <td>${empcode}</td>
                          <td>${name}</td>
                          <td>${age}</td>
                          <td>${gender}</td>
                          <td>${department}</td>
                          <td>${designation}</td>
                          <td>${salary}</td>
                          <td><button class="bg-black white-text hv-red" onclick="EditEmployee(${index})">Edit</button></td>
                       </tr>
                      `
            }
        })
    } else if (deptValue === '' && desgValue) {
        var tableBody = EmpDetails.map((Emp, index) => {
            //Destructure The info of  Employee
            let { empcode, name, age, gender, department, designation, salary } = Emp
            if (designation === desgValue) {

                return `
                       <tr class="bg-grey">
                          <td>${empcode}</td>
                          <td>${name}</td>
                          <td>${age}</td>
                          <td>${gender}</td>
                          <td>${department}</td>
                          <td>${designation}</td>
                          <td>${salary}</td>
                          <td><button class="bg-black white-text hv-red" onclick="EditEmployee(${index})">Edit</button></td>
                       </tr>
                      `
            }
        })
    } else if (deptValue && desgValue === '') {
        var tableBody = EmpDetails.map((Emp, index) => {
            //Destructure The info of  Employee
            let { empcode, name, age, gender, department, designation, salary } = Emp
            if (department === deptValue) {
                return `
                       <tr class="bg-grey">
                          <td>${empcode}</td>
                          <td>${name}</td>
                          <td>${age}</td>
                          <td>${gender}</td>
                          <td>${department}</td>
                          <td>${designation}</td>
                          <td>${salary}</td>
                          <td><button class="bg-black white-text hv-red" onclick="EditEmployee(${index})">Edit</button></td>
                       </tr>
                      `
            }
        })
    } else {
        var tableBody = EmpDetails.map((Emp, index) => {
            //Destructure The info of  Employee
            let { empcode, name, age, gender, department, designation, salary } = Emp
            return `
                       <tr class="bg-grey">
                          <td>${empcode}</td>
                          <td>${name}</td>
                          <td>${age}</td>
                          <td>${gender}</td>
                          <td>${department}</td>
                          <td>${designation}</td>
                          <td>${salary}</td>
                          <td><button class="bg-black white-text hv-red" onclick="EditEmployee(${index})">Edit</button></td>
                       </tr>
                      `
        })
    }


    //Filter Functionality
    let flterHd = `<span>Filter Employee By:</span>`
    let department = makeDropDown(dept, 'Choose Depatements', 'deptId')
    let designation = makeDropDown(desg, 'Choose Designation', 'desgId')
    let filterBtn = `<button class="bg-black white-text pad hv-red" onclick="filterTable()">Filter</button>`

    let completeFilter = `<p>${flterHd} ${department} ${designation} ${filterBtn}</p>`


    //Table Heading
    let tableHeading = `
                       <tr>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(1)">EmpCode</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(2)">Name</th>
                          <th class="bg-black white-text cus-pos" onclick="sortTheEmpByNum(6)">Age</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(3)">Gender</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(4)">Departement</th>
                          <th class="bg-black white-text cus-pos" onclick="sortByEmpCode(5)">Designation</th>
                          <th class="bg-black white-text cus-pos" onclick="sortTheEmpByNum(7)">Salary</th>
                          <th class="bg-black white-text cus-pos"></th>
                       </tr>
                     `

    //Make Complete Table
    let completeTable = `${completeFilter} <table class="mg">${tableHeading}${tableBody.join('')}</table>`

    //clrscr
    let newEmp = document.getElementById('newEmp')
    newEmp.innerHTML = ''

    let FullDump = document.getElementById('FullDump')
    FullDump.innerHTML = ''

    let PartDump = document.getElementById('PartDump')
    PartDump.innerHTML = ''

    //grab The id
    let showID = document.getElementById('showEmp')
    showID.innerHTML = completeTable
}

/*
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------Add New Employee----------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
*/


function AddNewEmp() {
    //Clear Screen
    let showID = document.getElementById('showEmp')
    showID.innerHTML = ''

    let FullDump = document.getElementById('FullDump')
    FullDump.innerHTML = ''

    let PartDump = document.getElementById('PartDump')
    PartDump.innerHTML = ''

    //grab The id
    let newEmp = document.getElementById('newEmp')
    let createTheEmp = createEmp()
    newEmp.innerHTML = createTheEmp
}


function createEmp() {

    let { empcode = '', name = '', age = '', gender = '', department = '', designation = '', salary = '' } = editDetails
    //console.log('editDetails= '+editDetails.empcode)



    //Make Employee Code Field
    let emcode = makeTextField('Employee Code', 'empCode', empcode)

    //Name Of Emp
    let Empname = makeTextField('Name', 'nm', name)

    //Age Of Emp
    let Empage = makeTextField('Age', 'age', age)

    //Make CheckBoxes
    let mkChkBox = makeCheckBoxes('Gender', 'gender', gender)

    //Make DropDown
    let Empdepartment = makeEmpDropDown(dept, 'Select Departement', 'deptIdOfEmp', 'Department', department)
    let Empdesignation = makeEmpDropDown(desg, 'Select Designation', 'desgIdofEmp', 'Designation', designation)

    //Salary
    let Empsalary = makeTextField('Salary', 'sal', salary)

    let btnText = (editIndex >= 0) ? 'Edit Employee Info' : 'Add new Employee'

    //Submit Button
    let sbmtBtn = `<button class="bg-black white-text hv-red" onclick="submitEmployee()" id="btn">${btnText}</button>`

    return `<div class="Mg-left">${emcode}${Empname}${Empage}${mkChkBox}${Empdepartment}${Empdesignation}${Empsalary}${sbmtBtn}</div>`
}


function makeTextField(label, id, editDtls = '') {
    let readonly = (editIndex >= 0 && id === 'empCode') ? 'readonly' : ''
    return `
             <p >${label} <input type="text" id="${id}" value="${editDtls}" ${readonly}></p>
           `
}


function makeCheckBoxes(label, name, editDetails = '') {
    let checked1 = ''
    let checked2 = ''
    if (editDetails === 'Male') {
        checked1 = 'checked'
    }
    if (editDetails === 'Female') {
        checked2 = 'checked'
    }

    return `
            <p>${label}<input type="radio" name="${name}" value="Male" ${checked1}>Male<input type="radio" name="${name}" value="Female" ${checked2}>Female</p>
           `
}


function makeEmpDropDown(arr, header, id, label, editDetails = '') {

    let DpBody = arr.map(elem => {
        return `<option value="${elem}">${elem}</option>`
    })

    let selectedHeader = (editIndex >= 0) ? editDetails : header

    let dpDownHd = `<option  selected>${selectedHeader}</option>`

    let completeDpDown = `
                        <select id="${id}"> 
                        ${dpDownHd}
                        ${DpBody.join('')}
                        </select>
                       `
    let finalDpDOwn = `<p>${label} ${completeDpDown}</p>`

    return finalDpDOwn
}

//Edit Employee
function EditEmployee(index) {
    editIndex = index
    editDetails = EmpDetails[index]
    AddNewEmp()
}



//Submit Employee Details
function submitEmployee() {


    let EmpCodeValue = document.getElementById('empCode').value

    let nameValue = document.getElementById('nm').value

    let ageValue = document.getElementById('age').value

    let departementValue = document.getElementById('deptIdOfEmp').value

    let designationValue = document.getElementById('desgIdofEmp').value

    let salary = document.getElementById('sal').value

    let Gender = document.getElementsByName('gender')

    let value = ''

    for (let i = 0; i < Gender.length; i++) {
        if (Gender[i].checked) {
            value = Gender[i].value
        }
    }

    let newEmp = { empcode: EmpCodeValue, name: nameValue, age: ageValue, gender: value, department: departementValue, designation: designationValue, salary: salary }

    if (validate(newEmp)) {
        (editIndex >= 0) ? EmpDetails[editIndex] = newEmp : EmpDetails.push(newEmp)
        editIndex = -1
        editDetails = {}
        showEmployees()
    } else console.log('Not Working')
}


//validate Employee
function validate(newEmp) {

    let flag = 0

    for (let key in newEmp) {
        if (!newEmp[key]) {
            flag = 1
            if (key === 'empcode' || key === 'name' || key === 'age' || key === 'salary') {
                alert('Please Enter ' + key)
                break;
            } else if (key === 'gender') {
                alert('Please Select ' + key)
                break;
            }
        } else if (key === 'empcode') {
            //Check Empcode is repeating or not
            let index = EmpDetails.findIndex(emp => emp.empcode === newEmp.empcode)
            if (index >= 0 && editIndex === -1) {
                flag = 1
                alert('empcode Already Exist')
                break;
            }
        } else if (key === 'department' || key === 'designation') {
            let index1 = dept.findIndex(dp => dp === newEmp.department)
            if (index1 === -1 && key === 'department') {
                flag = 1
                alert('Plz Select Departement')
                break;
            }

            let index2 = desg.findIndex(dp => dp === newEmp.designation)
            if (index2 === -1 && key === 'designation') {
                flag = 1
                alert('Plz Select Designation')
                break;
            }
        }
    }

    if (flag === 1) {
        return 0
    } else {
        if (editIndex >= 0) {
            alert('Employee Details Have been Update')
        }
        return 1
    }
}





//------------------------------------------------------All Sorting Functions------------------------------------------------

let index

//Using this Function We are sorting empcode and name of Employee
function sortByEmpCode(val) {
    index = val
    EmpDetails.sort(sortEmpCode)
    showEmployees()
}


function sortEmpCode(emp1, emp2) {
    let empDet1
    let empDet2

    if (index === 1) {
        empDet1 = emp1.empcode
        empDet2 = emp2.empcode
    } else if (index === 2) {
        empDet1 = emp1.name
        empDet2 = emp2.name
    } else if (index === 3) {
        empDet1 = emp1.gender
        empDet2 = emp2.gender
    } else if (index === 4) {
        empDet1 = emp1.department
        empDet2 = emp2.department
    } else if (index === 5) {
        empDet1 = emp1.designation
        empDet2 = emp2.designation
    }

    return empDet1.localeCompare(empDet2)
}

//using This Function We are sorting name and salary of the Employee

function sortTheEmpByNum(val) {
    index = val
    EmpDetails.sort(sortEmpByNum)
    showEmployees()
}


function sortEmpByNum(emp1, emp2) {
    let empDet1
    let empDet2

    if (index === 6) {
        empDet1 = emp1.age
        empDet2 = emp2.age
    } else if (index === 7) {
        empDet1 = emp1.salary
        empDet2 = emp2.salary
    }

    if (empDet1 < empDet2) {
        return -1
    } else if (empDet1 > empDet2) {
        return 1
    } else return 0
}


/*
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Full Dump-----------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
*/


function fullDump() {
    //Clear Screen
    let showID = document.getElementById('showEmp')
    showID.innerHTML = ''

    let newEmp = document.getElementById('newEmp')
    newEmp.innerHTML = ''


    //Grab The ID
    let FullDump = document.getElementById('FullDump')

    let dumpBody = EmpDetails.map(elem => {
        let { empcode, name, age, gender, department, designation, salary } = elem
        return `${empcode}::${name}::${age}::${gender}::${department}::${designation}::${salary}`

    })
    FullDump.innerHTML = `<p id="ft">${JSON.stringify(dumpBody)}</p>`
}



/*
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Full Dump-----------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
*/


function PartialDump() {
    //Clear Screen
    let showID = document.getElementById('showEmp')
    showID.innerHTML = ''

    let newEmp = document.getElementById('newEmp')
    newEmp.innerHTML = ''

    let FullDump = document.getElementById('FullDump')
    FullDump.innerHTML = ''


    //Grab The ID
    let PartDump = document.getElementById('PartDump')

    let dumpBody = EmpDetails.map(elem => {
        let { empcode, name, age } = elem
        return `Code=${empcode},Name=${name},Age=${age}`

    })
    FullDump.innerHTML = `<p id="ft2">${JSON.stringify(dumpBody)}</p>`
}



