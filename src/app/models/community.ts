export interface ICommunity {
  id: string;
  name: string;
  city: string;
  timeZone: string;
}

export class Community{
  public static All: ICommunity[] = [
    {id: 'KryDotNet', name: 'KryDotNet', city: 'Красноярск', timeZone: 'Asia/Krasnoyarsk'},
    {id: 'KznDotNet', name: 'KznDotNet', city: 'Казань', timeZone: 'Europe/Moscow'},
    {id: 'MskDotNet', name: 'MskDotNet', city: 'Москва', timeZone: 'Europe/Moscow'},
    {id: 'SarDotNet', name: 'SarDotNet', city: 'Саратов', timeZone: 'Europe/Saratov'},
    {id: 'SpbDotNet', name: 'SpbDotNet', city: 'Санкт-Петербург', timeZone: 'Europe/Moscow'}
  ];
}
