export class StudentModel {

    id!: string
    name!: string
    email!: string
    cellNo!: string



    location!: {
        id: string | undefined;
        name: string | undefined;
        city: string | undefined;
        state: string | undefined;
        photo: string | undefined;
        availableUnits: string | undefined;
        wifi: boolean | undefined
    }



}