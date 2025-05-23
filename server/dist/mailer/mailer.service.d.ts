import { ConfigService } from '@nestjs/config';
export declare class MailerService {
    private readonly configService;
    private transporter;
    constructor(configService: ConfigService);
    sendMail(to: string, subject: string, html: string): Promise<any>;
}
