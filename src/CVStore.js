import EventEmitter from 'events'

class CVStore extends EventEmitter{

    _contacts = [ ];
    _jobs=[];
    _schools=[];
    _skills=[];
    _summary="";

    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.on('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change',callback);
    }
}

export  default new CVStore();