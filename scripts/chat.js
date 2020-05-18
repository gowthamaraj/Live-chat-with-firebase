// db.collection('chats').get().then((snapshot) => {
//     console.log(snapshot.docs[0].data());
// }).catch( err => {
//     console.log(err);
// })

class User{
    constructor(name,room){
        this.name = name;
        this.room = room;
        this.database = db.collection('chats');
        this.state;
    }
    async getMessage(){
        this.state = this.database.where('room', '==', this.room)
        .orderBy('time').onSnapshot(snapshot => {
            snapshot.docChanges().forEach( change => {
                // if(change.type === 'added')
                {
                    console.log(change.type)
                  }
            })
        })
    }
}

const new_user = new User("mike","gaming");
new_user.getMessage().then(()=>{
    console.log("got the message");}
).catch( err => {
    console.log(err);
})