import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    const idBooking = await this.bookingRepository.find({
      select: ['idBooking'],
      order: { idBooking: 'DESC' },
    });

    let idBookingFormat = 'B001';
    if (idBooking.length != 0) {
      const id = idBooking[0].idBooking;
      const idBookingFix = parseInt(id.substring(1, 4)) + 1;
      idBookingFormat = 'B' + idBookingFix.toString().padStart(3, '0');
    }

    const booking = new Booking();
    booking.idBooking = idBookingFormat;
    booking.date = createBookingDto.date;
    booking.status = createBookingDto.status;
    booking.lampiran = createBookingDto.lampiran;
    booking.idMahasiswa = createBookingDto.idMahasiswa;
    booking.idDosen = createBookingDto.idDosen;
    booking.idKelas = createBookingDto.idKelas;
    booking.idRuang = createBookingDto.idRuang;
    booking.jamMulai = createBookingDto.jamMulai;
    booking.jamSelesai = createBookingDto.jamSelesai;

    const data = await this.bookingRepository.save(booking);
    return data;
  }

  async findAll() {
    return `This action returns all booking`;
  }

  async findOne(id_kelas: string) {
    const booking = await this.bookingRepository.findOne({
      where: { idKelas: id_kelas },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
