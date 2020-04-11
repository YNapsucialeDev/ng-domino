import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy
{
    public socketID: string = '';
    public player: string = '';
    public messages: Array<Object> = [];
    public formValid: boolean = false;
    public players: Array<Object> = [];

    //message form control
    public mensaje: FormControl = new FormControl('', Validators.required);
    
    constructor(private socket: Socket) 
    {

    }

    ngOnInit() 
    {
        this.player = window.localStorage.getItem('usuario').toUpperCase();
        //conection to room
        this.socket.on('welcome', (socket) => {
            this.socketID = socket.id;
            this.socket.emit('new_player', {
                id: this.socketID,
                player: this.player
            })
        });

        //error handling
        this.socket.on('error', (error) => {
            console.log(error);
        });

        //on full room to start game
        this.socket.on('fullRoom', () =>
        {   
            console.log('FULL ROOM, INITIATE GAME NOW!');
        });

        //on full room to start game
        this.socket.on('players', (players) =>
        {   
            this.players = players;
        });

        //message for chat
        this.socket.on('message', (body) =>
        {
            this.messages.push(body);
        });

        this.socket.on('init-game', (game) =>
        {
            if(game == true)
            {
                alert('EL JUEGO EMPIEZA EN 5 SEGUNDOS');  
            }
        });
    }

    ngOnDestroy()
    {
        
    }

    public validarForm(eventKey: number): void
    {
        if(this.mensaje.valid && this.mensaje.value != '')
        {
            this.formValid = true;
            if(eventKey == 13)
            {
                this.enviarMensaje();
            }
        }
        else
        {
            this.formValid = false;
        }
    }

    public enviarMensaje(): void
    {
        let body: Object = 
        {
            id: this.socketID,
            message: this.mensaje.value,
            user: this.player
        };
        this.socket.emit('message', body);
        this.messages.push(body);
        this.mensaje.reset();
    }
}