export class PetsInterface {
  id: number;
  petName: string;
  ownerName: string;
  aptNotes: string;
  aptDate: string;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
