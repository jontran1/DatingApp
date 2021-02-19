export interface Message{
    id: Number;
    senderId: Number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: Number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}