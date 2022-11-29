import dayjs from 'dayjs';

export const getDate = (date: string) => dayjs(date).format('DD-MMM-YYYY');

export const getDateShort = (date: string) => dayjs(date).format('DD-MMM');

export const userData = {
  userName: localStorage.getItem('userName') ?? '',
  userId: localStorage.getItem('userId') ?? '',
};