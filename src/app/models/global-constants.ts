export class HaircutStatus {
    static ERROR = -1;
    static INITIAL_REQUEST = 0
    static BARBER_DECLINED = 1;
    static BARBER_RESCHEDULED = 2;
    static USER_DECLINED = 3;
    static SUCCESS = 5;
}

export class StatusMessages {
    static INITIAL_REQUEST = 'A HAIRCUT request has been sent';
    static WAITING_ROOM = 'Awaiting a response';
    static FINALIZING_REQUEST = 'Your HAIRCUT request has been ACCEPTED and FINALIZED';
    static BARBER_EN_ROUTE = 'Your selected barber is EN ROUTE';
    static HAIRCUT = 'Cleaning you up';
    static ERROR = 'an ERROR has occured';
}