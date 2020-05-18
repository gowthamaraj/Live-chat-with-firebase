class User{
    constructor(name,room){
        this.name = name;
        this.room = room;
        this.database = db.collection('chats');
        this.state;
    }
    async getMessage(callback){
        this.state = this.database.where('room', '==', this.room)
        .orderBy('time').onSnapshot(snapshot => {
            snapshot.docChanges().forEach( change => {
                if(change.type === 'added')
                {
                    callback(change.doc.data());
                  }
            })
        })
    }
    changeName(name){
        this.name = name;
        localStorage.name = name;
    }
    ChangeRoom(room){
        this.room = room;
        if(this.state){
            this.state();
          }
    }
    async add(message){
        const time = new Date();
        const data = {
            message : message,
            name : this.name,
            room : this.room,
            time : firebase.firestore.Timestamp.fromDate(time)
        };
        const response = await this.database.add(data);
        return response;
    }
}
