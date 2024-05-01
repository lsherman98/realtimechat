import { Injectable } from '@nestjs/common';
import * as Pusher from "pusher";

@Injectable()
export class PusherService {
    pusher: Pusher;
    constructor() {
        this.pusher = new Pusher({
            appId: "1796550",
            key: "6d26a5e68dc1315c89e8",
            secret: "f2673aba827dd2c1ee7e",
            cluster: "us2",
            useTLS: true
        });
    }

    async trigger(channel: string, event: string, data: any) {
        await this.pusher.trigger(channel, event, data)
    }
}
