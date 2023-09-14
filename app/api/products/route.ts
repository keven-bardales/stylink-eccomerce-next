import datas from '@/app/api/(data)/products/products.json';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log(datas);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const POST = () => {
    const arreglo = datas.data;
  };
  return NextResponse.json(datas);
}
