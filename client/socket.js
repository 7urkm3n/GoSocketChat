import {EventEmitter} from 'events';

class Socket{
	constructor(ws = new WebSocket(), ee = new EventEmitter()){
		this.ws = ws;
		this.ee = ee;
		ws.onmessage   = this.message.bind(this);
		ws.onopen      = this.open.bind(this);
		ws.onclose     = this.close.bind(this);
	}

  on(name, fn){
    this.ee.on(name, fn);
  }

	off(name, fn){
		this.ee.removeListeber(name, fn);
	}

	emit(name, data){
		const message = JSON.stringify({name, data});
		this.ws.send(message);
	}

	message(e){
		try{
			console.log("E msg", JSON.parse(e.data))
			const message = JSON.parse(e.data)
			this.ee.emit(message.name, message.data);
		}
		catch(err){
			this.err.emit("error", err);
		}
	}

	open(){
		this.ee.emit('connect');
	}

	close(){
		this.ee.emit('disconnect');
	}

}

export default Socket;