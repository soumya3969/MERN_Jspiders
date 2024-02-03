let employee=[
    {
        id:101,
        name:'Rashmi',
        gender:'Female',
        degn:'jnr developer',
        age:28,
        salary: 22000,
        company: Aloha,
        city:'Bangalore',
        state:'Karnataka'
    },
    {
        id:102,
        name:'Soumya',
        gender:'Male',
        degn:'Intern',
        age:24,
        salary: 16000,
        company: 'Jspiders',
        city:'Bhubaneswar',
        state:'Odisha'
    },
    {
        id:103,
        name:'Sandhya',
        gender:'Female',
        degn:'Intern',
        age:24,
        salary:16000 ,
        company: 'Jspiders',
        city:'Raipur',
        state:'CG'
    },
    {
        id:104,
        name:'Goutam',
        gender:'Male',
        degn:'Manager',
        age:31,
        salary: 45000,
        company: 'orient',
        city:'Bangalore',
        state:'Karnataka'
    },
    {
        id:105,
        name:'Sumit',
        gender:'Male',
        degn:'Senior developer',
        age:23,
        salary: 30000,
        company: 'flipkart',
        city:'Bangalore',
        state:'Karnataka'
    }
];
function displayEmp (emps) {
    if (emps.length>0) {
        let eachEmp=` `;
        for (const emp of emps) {
            eachEmp+=` <div class="col-12">
            <div class="card">
                <div class="card-body d-flex justify-content-evenly bg-gradient ">
                   <h5>101</h5>
                   <h5>Rashmi</h5>
                   <h5>Female</h5>
                   <h5>Jnr Developer</h5>
                   <h5>28</h5>
                   <h5>22000</h5>
                   <h5>Aloha</h5>
                   <h5>Bangalore</h5>
                   <h5>Karnataka</h5>
                   </div>
                </div>
            </div>
        </div>`
            
        }
        document.getElementById('details').innerHTML+=eachEmp;
    }
}
displayEmp(employee)