const devs = document.querySelector('.team-members')
const table = document.querySelector('#stu_table tbody')
const fTable = document.querySelector('#family_table tbody')

for (let i = 0; i < devsData.length; i++) {
    
    devs.innerHTML += `
                    <div class="team_box">
                    <div class="dev_img">
                        <img src="${devsData[i].Photo}" alt="Photo">
                    </div>
                    <div class="dev_title">
                        <h3><b>Name:</b>${devsData[i].Name}</h3>
                        <p><b>Age:</b>${devsData[i].Age}</p>
                        <span><b>Skill:</b>${devsData[i].Skill}</span>
                        <p><b>Description:</b> ${devsData[i].Descr}</p>
                        <p><b>Location:</b>${devsData[i].Location}</p>
                    </div>
                </div>
    
    
  `
    
}



stuData.map((data,index) => {

    table.innerHTML += `
    
                <tr>
                    <td>${index + 1}</td>
                    <td>${data.Roll}</td>
                    <td><img src="${data.Photo}"></td>
                    <td>${data.Name}</td>
                    <td>${data.Addre}</td>
                    <td>${data.Phone}</td>
                </tr>
    
    `

})

familyData.forEach((data,index) => {
       
    fTable.innerHTML += `
    
                <tr>
                    <td>${index + 1}</td>
                    <td>${data.Name}</td>
                    <td><img src="${data.Photo}"></td>
                    <td>${data.Age}</td>
                    <td>${data.Relation}</td>
                    <td>${data.Phone}</td>
                 </tr>
    
    
    `

})