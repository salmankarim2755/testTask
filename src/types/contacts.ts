

export interface IContact {
    accountId: string;
    assignee: string;
    createdAt: string;
    id: string;
    img: string;
    messagesReceived: number;
    messagesSent: number;
    name: string;
    phoneNumber: string;
    platformNames: string[];
    tags: [{name: string}];
    type: string;
    number: string;
    index: number;
    letter: string;
}

export interface IContactsAPIRes {
    contacts: IContact[];
}

export interface IRes {
    data: IContactsAPIRes;
}