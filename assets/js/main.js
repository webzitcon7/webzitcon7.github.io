function selector(select){
	return document.querySelector(select);
}


async function Olahan(){
    const data =  await getData();
    const ambil = data.project.task.main
    
    let ap = "";

    ambil.forEach((m) => ap += Card(m))
    const masukan = selector(".cardin")
    masukan.innerHTML = ap
}

async function getData(){
    const data = await fetch("https://progrez.cloud/services/project",{
      method: 'POST',
      mode: "cors",
    
      body: "token=utturhlv2u1n9xhykod7hqs1o0eptx&getTasks=1",
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'

      }
    })
    const res = await data.json()
    // console.log(res.project);
    return res
   
  }

  function tampilan(ambil){

    let ap = "";

    ambil.forEach((m) => ap += Card(m))
    const masukan = selector(".cardin")
    masukan.innerHTML = ap
  }

  function Card(m){
      return `
      <div class="colom">
        <h2>${m.task_name}</h2>
      </div>
      `;
  }
// tampilan();
Olahan()