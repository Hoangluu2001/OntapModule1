class Mobile {
    constructor(name) {
        this.name = name;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
        this.status = true;
        this.battery = 100;
    }

    isOn() {
        return this.status;
    }

    turnOff() {
        this.status = false;
    }

    chargeBattery(){
        if(this.isBatteryFull()){
        } else {
            this.battery +=1;
        }
    }
    isBatteryFull(){
        return this.battery ==100;
    }

    writeMsg(msg) {
        this.msg = msg;
    }
    sendMassage(mobile){
        this.outbox.push(this.msg);
        mobile.inbox.push(this.msg);

    }
    getInbox(){
        return this.inbox;
    }



}