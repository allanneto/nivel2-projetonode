import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  // os repositorios serao responsaveis pela comunicaçãoo dos dados com a base de dados;

  private appointments: Appointment[]; // setamos que a variavel appointments é privada e só podemos utilaza dentro desse arquivo.

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    // a logica de buscar se ja existe uma data para o appointment ficara aqui

    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    // ira armazenar os dados enviados
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
