async function getContent(){
    try {
      const response = await fetch('http://localhost:4567/')
      const data = await response.json()

    let usersList = data.map(function(user, indice){
      return `<tr>
                <td>${indice + 1}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}</td>
                <td>${user.address.city}</td>
             `
    })
    
    document.querySelector('#tbUsers tbody').innerHTML = usersList.join('')

    } catch (error) {

      console.error(error)

    }
  }

  getContent()