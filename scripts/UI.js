class UserInterface{
    constructor(list){
        this.list = list;
    }

    clear(){
        this.list.innerText = '';
    }

    updateUI(data){
        const time = dateFns.distanceInWordsToNow(
            data.time.toDate(),
            { addSuffix:true }
          );
          const html = `
      <li class="list-group-item">
        <span class="username">${data.name}:</span>
        <span class="message">${data.message}</span>
        <div class="time">${time}</span>
      </li>
    `;
    this.list.innerHTML += html;
    }
}