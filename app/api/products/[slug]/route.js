import { NextResponse } from 'next/server'
 
export async function GET(request,{params}) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
// get query params
const {searchParams}= new URL(request.url)
let query = searchParams.get('query')
// get body data
let body =request.json()
console.log(params.slug,query,body)
 
  return NextResponse.json({ message:"hello world with params "+params.slug })
}

