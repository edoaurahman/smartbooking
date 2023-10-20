import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { RoomService } from './room.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RoomGateway {
  @WebSocketServer() server: Server;
  constructor(private readonly roomService: RoomService) {}

  @SubscribeMessage('join')
  create(
    @MessageBody('username') username: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.roomService.join(username, client.id);
  }

  async refreshRoom() {
    const rooms = await this.roomService.findAll();
    this.server.emit('refreshRoom', rooms);
  }

  @SubscribeMessage('disconnecting')
  disconnect(@ConnectedSocket() client: Socket) {
    this.roomService.leave(client.id);
  }
}
