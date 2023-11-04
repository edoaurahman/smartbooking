import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { WebSocketService } from './room.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class MyGateway {
  @WebSocketServer() server: Server;
  constructor(private readonly websocketService: WebSocketService) {}

  @SubscribeMessage('join')
  create(
    @MessageBody('username') username: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.websocketService.join(username, client.id);
  }

  async refreshRoom() {
    const rooms = await this.websocketService.findAll();
    this.server.emit('refreshRoom', rooms);
  }

  @SubscribeMessage('disconnecting')
  disconnect(@ConnectedSocket() client: Socket) {
    console.log('disconnected');
    this.websocketService.leave(client.id);
  }
}
