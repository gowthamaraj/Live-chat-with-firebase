const send = document.querySelector('.send');
const change = document.querySelector('.change');
const message_box = document.querySelector('.message_box');
const rooms = document.querySelector('.rooms');
const btn = document.querySelectorAll('.btn-info');

send.addEventListener('submit', e =>
{
    e.preventDefault();
    message = send.message.value.trim();
    user.add(message).then(()=>{
        send.reset();
    }).catch(err => {console.log(err);});
    
});

change.addEventListener('submit', e=>{
    e.preventDefault();
    name = change.user_name.value.trim();
    user.changeName(name);
    change.reset();
});

rooms.addEventListener('click', e=> {
    btn.forEach(btn => {
        if(btn.classList.contains('selected')){
            btn.classList.remove('selected');
        }
    });
    if(e.target.tagName === "BUTTON" || e.target.tagName === "A"){
        user.ChangeRoom(e.srcElement.dataset.room);
        UI.clear();
        user.getMessage(data => UI.updateUI(data));
        e.target.classList.add('selected');
    }
})

const username = localStorage.name ? localStorage.name : 'User007';
const UI = new UserInterface(message_box);
const user = new User(username,"gaming");
user.getMessage(data => UI.updateUI(data));

