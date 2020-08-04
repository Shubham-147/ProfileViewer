const data = [
  {
    name : 'Shubham Gandhi',
    age:24,
    gender:'male',
    lookingfor:'female',
    location:'jagdalpur',
    image:'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name : 'PJ',
    age:24,
    gender:'female',
    lookingfor:'male',
    location:'jagdalpur',
    image:'https://randomuser.me/api/portraits/women/82.jpg'
  }
]

const profile = profileIterator(data)

function profileIterator(profiles) {
  let nextIndex = 0;
  
  return {
    next:()=>{
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done :false }: {done :true}
    }
  }
}


nextProfile =() =>{
  const currentProfile = profile.next().value
  if(currentProfile != undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class='list-group'>
  <li class='list-group-item'>Name : ${currentProfile.name} </li>
  <li class='list-group-item'>Age : ${currentProfile.age} </li>
  <li class='list-group-item'>Gender : ${currentProfile.gender} </li>
  <li class='list-group-item'>Location : ${currentProfile.location} </li>
  </ul>
  `
  
  document.getElementById('imageDisplay').innerHTML = `<img src = '${currentProfile.image}'>`
  }
  else {
    window.location.reload()
  }

}
document.getElementById('next').addEventListener('click',nextProfile)
nextProfile()