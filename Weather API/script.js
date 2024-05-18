fetch('https://reqres.in/api/users?page=2').then((res) => res.json()).then((data)=>makeCard(data.data))

function makeCard(data){
    let store = data.map((el)=>singleCard(el.avatar,el.first_name,el.last_name,el.email))
    document.querySelector('.main').innerHTML = store.join('');
}

function singleCard(avatar,first_name,last_name,email)
{
    let card = `
    <div class="col-3 d-flex flex-column m-4 bg-light p-3">
            <img src=${avatar} alt="" class="col-5">
            <span class="fw-bolder">Name: ${first_name} ${last_name}</span>
            <span class="fw-bolder">E-mail: ${email}</span>
        </div>
    `
    return card;
}