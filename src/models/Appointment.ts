import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    // estamos desestruturando as propriedades do Appointment mas iremos utilizar o metodo Omit do TS para omitir o id pois ele é criado estatitcamente
    // quando utilizarmos o metodo new para criarmos um novo objeto podemos usar informações pre existentes nele.
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
